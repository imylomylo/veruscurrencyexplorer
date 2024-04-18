<script setup>
import { ref, onMounted, watch } from 'vue';
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
const options = [
  { value: 1, label: 'OPTION_FRACTIONAL' },
  { value: 2, label: 'OPTION_ID_ISSUANCE' },
  { value: 4, label: 'OPTION_ID_STAKING' },
  { value: 8, label: 'OPTION_ID_REFERRALS' },
  { value: 16, label: 'OPTION_ID_REFERRALREQUIRED' },
  { value: 32, label: 'OPTION_TOKEN' },
  { value: 128, label: 'OPTION_GATEWAY' },
  { value: 256, label: 'OPTION_PBAAS' },
  { value: 512, label: 'OPTION_PBAAS_CONVERTER' }
];
const selectedCurrency = ref(null);
const currencyDetails = ref('');
const selectedOptions = ref([]); // Array to store selected options

const handleCurrencyClick = (currency) => {
  console.log(currency.currencydefinition.currencyid)
  const fullyQualifiedName = currency.currencydefinition.fullyqualifiedname;
  console.log("Clicked currency:", fullyQualifiedName);
  selectedCurrency.value = currency;
};

// Function to filter currencies based on selected options
const filterCurrencies = () => {
  if (selectedOptions.value.length === 0) {
    return currencies.value; // Return all currencies if no options are selected
  }

  return currencies.value.filter(currency => {
    return selectedOptions.value.every(option => {
      // Check if the currency has the selected option
      return (currency.currencydefinition.options & option) !== 0;
    });
  });
};

onMounted(async () => {
  info.value = await currencyHelpers.getInfo();
  currencies.value = await currencyHelpers.listCurrencies();
});

// Watch for changes in selectedOptions and filter currencies accordingly
watch(selectedOptions, () => {
  currencies.value = filterCurrencies();
});
</script>

<template>
  <div class="overflow-x-auto columns-1">
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" /> 
      <div class="collapse-title text-xl font-medium">
         Filter Currencies
      </div>
  <div class="collapse-content"> 
      <div class="form-control border mt-1 pt-1">
          <label v-for="(option, index) in options" :key="index">
           <input type="checkbox" :value="option.value" class="checkbox checkbox-primary" v-model="selectedOptions"> <span class="label-text">{{ option.label }}</span>
          </label>
      </div>
  </div>
    </div>
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

