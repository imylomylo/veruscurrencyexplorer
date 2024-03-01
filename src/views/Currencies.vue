<script setup>
console.log("currencies setup")
// import currencyHelpers from '../lib/currencyHelpers';

</script>
<script>
import { ref } from 'vue'
import currencyHelpers from '../lib/currencyHelpers';
let info = ref([])
let currencies = ref([])
let headers = [
  {title: 'Name', value: 'currencydefinition.fullyqualifiedname'},
  {title: 'ID', value: 'currencydefinition.currencyid'},
  {title: 'ID rego fee', value:'currencydefinition.idregistrationfees'},
  {title: 'ID import fee', value:'currencydefinition.idimportfees'},
  {title: 'Converter Name', value:'currencydefinition.gatewayconvertername'},
  {title: 'Proof Protocol', value:'currencydefinition.proofprotocol'},
  {title: 'Options', value: 'currencydefinition.options'}
]
info = await currencyHelpers.getInfo()
currencies = await currencyHelpers.listCurrencies()
export default {
  name: "Verus Currencies"
}
</script>

<template>
    <h1>Currencies</h1>
    {{ info.VRSCversion }}
      <v-data-table :items="currencies" :headers="headers">
      </v-data-table>

   
    <v-hover v-slot="{ isHovering, props }">
    <v-card variant="outlined" v-bind="props" :class="`elevation-${isHovering ? 24 : 6}`" class="mx-auto pa-6 transition-swing">
      <v-card-title>
        Currency Info
      </v-card-title>
    <pre>
        {{ currencies }}
      </pre>

    </v-card>
    </v-hover>

</template>

<style scoped></style>
