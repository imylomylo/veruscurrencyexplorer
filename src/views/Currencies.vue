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
const expanded = ref([]);

(async () => {
  info.value = await currencyHelpers.getInfo();
  currencies.value = await currencyHelpers.listCurrencies();
})();

const toggleExpansion = (item) => {
  expanded.value = expanded.value === item ? null : item;
};
</script>

<template>
  <v-layout>
    <v-row>
      <v-col>
    <h1>Currencies</h1>
    <v-container class="mx-auto pa-6 container-ho overflow-x-auto">
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
              More info about
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
.container-ho {
  border: 2px solid transparent; /* Set initial border */
  transition: border-color 0.3s ease-in-out; /* Smooth transition for border color */
}

/* Add hover effect */
.container-ho:hover {
  animation-play-state: paused; 
  border: 2px solid transparent; /* Set initial border */
  border-color: #3165D4;/* Pause the animation on hover */
}
</style>
