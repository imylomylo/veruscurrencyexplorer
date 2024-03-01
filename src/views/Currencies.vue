<script setup>
console.log("currencies setup")
// import currencyHelpers from '../lib/currencyHelpers';

</script>
<script>
import { ref } from 'vue'
import currencyHelpers from '../lib/currencyHelpers';
let info = ref([])
let currencies = ref([])
info = await currencyHelpers.getInfo()
currencies = await currencyHelpers.listCurrencies()
export default {
  name: "Verus Currencies"
}
</script>

<template>
    <div class="container">
      <h1>Currencies</h1>
      {{ info.VRSCversion }}
      <li v-for="(currency, index) in currencies">
        {{ currency.currencydefinition.fullyqualifiedname }}
      </li>
    </div>
    <h1>Currencies</h1>
   
    <v-hover v-slot="{ isHovering, props }">
      
    <v-card variant="outlined" v-bind="props" :class="`elevation-${isHovering ? 24 : 6}`" class="mx-auto pa-6 transition-swing">
      <v-card-title>
        Lorem Ispetem
      </v-card-title>
      <v-data-table></v-data-table>     
      <v-textarea label="Your JSON HERE" prepend-inner-icon="mdi-code-json"></v-textarea>

    </v-card>
    </v-hover>
</template>

<style scoped></style>
