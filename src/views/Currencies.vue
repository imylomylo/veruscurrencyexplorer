<script setup>
import { ref, onMounted, watch } from 'vue';
import currencyHelpers from '../lib/currencyHelpers';
import VerusBasket from '../components/VerusBasket.vue'

const info = ref({});
const currencies = ref([]);
const headers = [
  { title: 'Name' },
  { title: 'ID' },
  { title: 'ID rego fee' },
  { title: 'ID import fee' },
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
const currencyDictionary = ref([])
const loaded = ref(false)

const handleCurrencyClick = async (currency) => {
  const fullyQualifiedName = currency.currencydefinition.fullyqualifiedname;
  currencyDetails.value = await currencyHelpers.getCurrency(fullyQualifiedName)
  selectedCurrency.value = currency;
};

const isBasketCurrency = (currency) => {
  if (currency.currencydefinition.options & 1 !== 0) {
    return true
  }
  return false
}

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

function convertData(data, result) {
  result.value.push(...convertToJSONObjects(data));
}

// [...{"currencyid": "thecurrencyid", "ticker": "currencyFQN"}...]
function convertToJSONObjects(data) {
  return data.map(item => {
    const result = {};
    result["ticker"]=item.currencydefinition.fullyqualifiedname
    result["currencyid"] = item.currencydefinition.currencyid
    return result;
  });
}

onMounted(async () => {
  info.value = await currencyHelpers.getInfo()
  defaultCurrencies.value = await currencyHelpers.listCurrencies()
  currencies.value = filterCurrencies();
  await convertData(defaultCurrencies.value, currencyDictionary)
})


watch(selectedOptions, (newValue) => {
  currencies.value = filterCurrencies();
});

</script>

<template>
  <div>
    <div class="collapse collapse-arrow bg-base-200">
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
    <div class="columns-2 h-52">
      <div>
        <div class="overflow-y-auto h-52">
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
                <td>{{ currency.currencydefinition.options }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div v-if="selectedCurrency">
          <h2>Selected Currency Details</h2>
          <pre class="w-full">ID:             {{ selectedCurrency.bestcurrencystate.currencyid }}</pre>
          <pre class="w-full">NAME:           {{ selectedCurrency.currencydefinition.fullyqualifiedname }}</pre>
          <pre class="w-full">OPTIONS:           {{ selectedCurrency.currencydefinition.options }}</pre>
          <pre class="w-full">ID REGO:        {{ selectedCurrency.currencydefinition.idregistrationfees }}</pre>
          <pre class="w-full">ID REF LEVELS:  {{ selectedCurrency.currencydefinition.idreferrallevels }}</pre>
          <pre class="w-full">ID IMPORT FEE:  {{ selectedCurrency.currencydefinition.idimportfees }}</pre>
          <!-- <pre class="w-full">PRE-ALLOCATIONS:{{ selectedCurrency.currencydefinition.preallocations }}</pre>
          <pre class="w-full">RESERVES:       {{ selectedCurrency.bestcurrencystate.reservecurrencies }}</pre> -->
        </div>
      </div>
    </div>
    <div class="columns-1">
      <div v-if="selectedCurrency">
        <div v-if="isBasketCurrency(selectedCurrency)">
          <VerusBasket
            v-if="currencyDetails.fullyqualifiedname == selectedCurrency.currencydefinition.fullyqualifiedname"
            :fullyQualifiedName="currencyDetails.fullyqualifiedname" :supply="currencyDetails.bestcurrencystate.supply" :bestHeight="currencyDetails.bestheight"
            :reserveCurrencies="currencyDetails.bestcurrencystate.reservecurrencies"
            :currencyDictionary="currencyDictionary" />
            <p>If supply is <strong>0</strong> then this fractional (basket) currency is bricked from the beginning.</p>
        </div>
        <div v-else>
          is not a basket currency
        </div>
      </div>
    </div>
  </div>
</template>
