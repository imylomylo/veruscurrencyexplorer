<template>
    <div class="overflow-x-auto columns-1">
      <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.title">{{ header.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover" v-for="currency in currencies" :key="currency.currencydefinition.currencyid">
            <td @click="handleCurrencyClick(currency)">{{ currency.currencydefinition.fullyqualifiedname }}</td>
            <td>{{ currency.currencydefinition.currencyid }}</td>
            <td>{{ currency.currencydefinition.idregistrationfees }}</td>
            <td>{{ currency.currencydefinition.idimportfees }}</td>
            <td>{{ currency.currencydefinition.gatewayconvertername }}</td>
            <td>{{ currency.currencydefinition.proofprotocol }}</td>
            <td>{{ currency.currencydefinition.options }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    <div v-if="selectedCurrency">
      <h2>Selected Currency Details</h2>
      <textarea rows="5" cols="50">{{ selectedCurrency }}</textarea>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import currencyHelpers from '../lib/currencyHelpers';

const info = ref({});
const currencies = ref([]);
const headers = [
  { title: 'Name' },
  { title: 'ID' },
  { title: 'ID rego fee' },
  { title: 'ID import fee' },
  { title: 'Converter Name' },
  { title: 'Proof Protocol' },
  { title: 'Options' }
];
const selectedCurrency = ref(null);
const currencyDetails = ref('');

const handleCurrencyClick = (currency) => {
  console.log(currency.currencydefinition.currencyid)
  const fullyQualifiedName = currency.currencydefinition.fullyqualifiedname;
  console.log("Clicked currency:", fullyQualifiedName);
  selectedCurrency.value = currency;
};

onMounted(async () => {
  info.value = await currencyHelpers.getInfo();
  currencies.value = await currencyHelpers.listCurrencies();
});
</script>
