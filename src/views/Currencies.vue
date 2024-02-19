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
</template>

<style scoped></style>
