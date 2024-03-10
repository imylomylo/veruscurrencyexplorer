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
const expand = ref([]);

(async () => {
  info.value = await currencyHelpers.getInfo();
  currencies.value = await currencyHelpers.listCurrencies();
})();

</script>

<template>
  <v-layout>
    <v-row>
      <v-col>
    <h1>Currencies</h1>
    <v-container class="mx-auto pa-6">
      <v-data-table 
      v-model:expanded="expand"
      :items="currencies" 
      :headers="headers" 
      show-expand
    >
      <!-- expanded card content -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Version {{ info.VRSCversion }}</v-toolbar-title>
        </v-toolbar>
      </template>

        <template v-slot:expanded-row=" headers, item ">
          <tr>
            <td :colspan="headers.length">
              More info about {{ item.index }}
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
