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
  { title: 'Proof Protocol' },
  { title: 'Options' }
];
const options = [
  { value: 1, label: 'FRACTIONAL' },
  { value: 2, label: 'ID_ISSUANCE' },
  { value: 4, label: 'ID_STAKING' },
  { value: 8, label: 'ID_REFERRALS' },
  { value: 16, label: 'ID_REFERRALREQUIRED' },
  { value: 32, label: 'TOKEN' },
  { value: 128, label: 'GATEWAY' },
  { value: 256, label: 'PBAAS' },
  { value: 512, label: 'PBAAS_CONVERTER' }
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

const defaultCurrencies = ref([]) // HERE

const filterCurrencies = () => {
  if (selectedOptions.value.length === 0) {
    return defaultCurrencies.value // HERE
  }

  return defaultCurrencies.value.filter(currency => {
    return selectedOptions.value.every(option => {
      return (currency.currencydefinition.options & option) !== 0
    })
  })
}

onMounted(async () => {
  info.value = await currencyHelpers.getInfo()
  defaultCurrencies.value = await currencyHelpers.listCurrencies()
  currencies.value = filterCurrencies();
})

watch(selectedOptions, (newValue) => {
  console.log('selectedOptions changed:', newValue);
  currencies.value = filterCurrencies();
});

</script>

<template>
  <div class="overflow-x-auto h-52">
    <div class="collapse collapse-arrow ">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        Filter Currencies
      </div>
      <div class="collapse-content">
        <div class="form-control border mt-1 pt-1">
          <label v-for="(option, index) in options" :key="index">
            <input type="checkbox" :value="option.value" class="checkbox checkbox-primary" v-model="selectedOptions">
            <span class="label-text">{{ option.label }}</span>
          </label>
        </div>
      </div>
    </div>
      <table class="table table-xs table-pin-rows">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.title">{{ header.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr @click="handleCurrencyClick(currency)" class="hover" v-for="currency in currencies"
            :key="currency.currencydefinition.currencyid">
            <td>{{ currency.currencydefinition.fullyqualifiedname }}</td>
            <td>{{ currency.currencydefinition.currencyid }}</td>
            <td>{{ currency.currencydefinition.idregistrationfees }}</td>
            <td>{{ currency.currencydefinition.idimportfees }}</td>
            <td>{{ currency.currencydefinition.proofprotocol }}</td>
            <td>{{ currency.currencydefinition.options }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    <div v-if="selectedCurrency" class="overflow-auto">
      <h2>Selected Currency Details</h2>
      <pre class="w-full">{{ selectedCurrency.bestcurrencystate.currencyid }}</pre>
      <pre class="w-full">{{ selectedCurrency.currencydefinition.fullyqualifiedname }}</pre>
      <pre class="w-full">{{ selectedCurrency.currencydefinition.idregistrationfees }}</pre>
      <pre class="w-full">{{ selectedCurrency.currencydefinition.idreferrallevels }}</pre>
      <pre class="w-full">{{ selectedCurrency.currencydefinition.idimportfees }}</pre>
      <pre class="w-full">{{ selectedCurrency.currencydefinition.preallocations }}</pre>
      <pre class="w-full">{{ selectedCurrency.bestcurrencystate.reservecurrencies }}</pre>


      <!-- <pre class="w-full">{{ selectedCurrency }}</pre> -->
      <!-- <pre class="w-full">{{ selectedCurrency }}</pre> -->
    </div>
</template>
