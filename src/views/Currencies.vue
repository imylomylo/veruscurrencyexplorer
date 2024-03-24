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
           
            <template v-slot="{ items }">
             <tbody>
              <tr v-for="item in items" :key="item.currencydefinition.currencyid" @click="handleCurrencyClick(item)">
                <td v-for="(header, index) in headers" :key="index">
          <!-- Access nested properties properly -->
                  {{ getNestedValue(item, header.value) }}
                </td>
              </tr>
            </tbody>
            </template>

          </v-data-table>
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
const selectedCurrency = ref({});

const handleCurrencyClick = (currency) => {
  console.log("Clicked currency:", currency);
  selectedCurrency.value = currency;
};


const getNestedValue = (obj, path) => {
  // Split the path into keys
  const keys = path.split('.');
  // Traverse the object using keys to access nested properties
  return keys.reduce((acc, key) => acc[key], obj);
};

// Fetch data on component mount
(async () => {
  info.value = await currencyHelpers.getInfo();
  currencies.value = await currencyHelpers.listCurrencies();
})();
</script>
