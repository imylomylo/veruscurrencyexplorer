<template>
  <v-layout>
    <v-row>
      <v-col>
        <h1>Currencies</h1>
        <v-container class="mx-auto pa-6">
          <v-data-table 
            :items="currencies" 
            :headers="headers" 
            dense
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Version {{ info.VRSCversion }}</v-toolbar-title>
              </v-toolbar>
            </template>

            <!-- Display currency ID and attach click event -->
            <template v-slot:item.currencydefinition.fullyqualifiedname="{ item }">
              <span @click="handleCurrencyClick(item)">
                {{ item.currencydefinition.fullyqualifiedname }}
              </span>
            </template>
          </v-data-table>

          <!-- Display selected currency details -->
          <div v-if="selectedCurrency">
            <h2>Selected Currency Details</h2>
            <textarea rows="5" cols="50">
            {{ selectedCurrency }}
            </textarea>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue'
import currencyHelpers from '../lib/currencyHelpers';

const info = ref([]);
const currencies = ref([]);
const headers = [
  { title: 'Name', value: 'currencydefinition.fullyqualifiedname' },
  { title: 'ID', value: 'currencydefinition.currencyid' },
  { title: 'ID rego fee', value: 'currencydefinition.idregistrationfees' },
  { title: 'ID import fee', value: 'currencydefinition.idimportfees' },
  { title: 'Converter Name', value: 'currencydefinition.gatewayconvertername' },
  { title: 'Proof Protocol', value: 'currencydefinition.proofprotocol' },
  { title: 'Options', value: 'currencydefinition.options' }
];
const selectedCurrency = ref(null);
const currencyDetails = ref('');

(async () => {
  info.value = await currencyHelpers.getInfo();
  currencies.value = await currencyHelpers.listCurrencies();
})();

const handleCurrencyClick = (currency) => {
  console.log(currency.currencydefinition.currencyid)
  const fullyQualifiedName = currency.currencydefinition.fullyqualifiedname;
  console.log("Clicked currency:", fullyQualifiedName);
  selectedCurrency.value = currency;
};



</script>
