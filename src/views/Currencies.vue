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
const expanded = ref(null);

(async () => {
  info.value = await currencyHelpers.getInfo();
  currencies.value = await currencyHelpers.listCurrencies();
})();

const toggleExpansion = (item) => {
   // Check if the clicked item is already expanded
   const isExpanded = expanded.value === item;

// If it's expanded, collapse it (set to null)
// If it's not expanded, expand it
expanded.value = isExpanded ? null : item;
};
</script>

<template>
  <v-layout>
    <v-row>
      <v-col>
    <h1>Currencies</h1>
    <v-container class="mx-auto pa-6">
      <v-data-table 
      :items="currencies" 
      :headers="headers" 
      @click:row="toggleExpansion"
      v-model:expanded="expanded"
      show-expand
    >
      <!-- expanded card content -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Version {{ info.VRSCversion }}</v-toolbar-title>
        </v-toolbar>
      </template>

        <template v-slot:expanded-row="{ item }">
          <tr>
            <td :colspan="headers.length">
              More info about {{ headers}}
            </td>
          </tr>
        </template>
    </v-data-table>

    </v-container>
    </v-col>
    </v-row>
    </v-layout>

</template>

<style scoped>

</style>
