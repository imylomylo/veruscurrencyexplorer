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
  expandedRow.value = expandedRow.value === item ? null : item;
};

</script>

<template>
  <v-layout>
    <v-row>
      <v-col>
    <h1>Currencies</h1>
    <v-hover v-slot="{ isHovering, props }">
    <v-container variant="outlined" v-bind="props" :class="`elevation-${isHovering ? 24 : 6}`" class="mx-auto pa-6 transition-swing overflow-x-auto">
       <v-data-table 
       :items="currencies" 
       :headers="headers" 
       @click:row="toggleExpansion"
       v-model:expanded="expanded"
       show-expand>
        <!-- Your expanded card content here -->
        <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ info.VRSCversion }}</v-toolbar-title>
      </v-toolbar>
    </template>
          <template v-slot:expanded-row="{ currencies, headers }">
            <table>
          <tr>
        <td :colspan="currencies.length">
          More info about {{ headers.title }}
        </td>
      </tr>
      </table>
    </template>
    </v-data-table>

    </v-container>
    </v-hover>
    </v-col>
    </v-row>
    </v-layout>

</template>

<style scoped></style>
