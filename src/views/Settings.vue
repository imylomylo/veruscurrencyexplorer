<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const rpcValue = ref('');
const store = useStore();

const saveRpc = () => {
  store.commit('updateRpcValue', rpcValue.value);
  rpcValue.value = ref('');
};

// TODO fix validation for ip address, v-text-field v-model rpcValue.value
// const numberRule = (value) => {
//   return true
//   const isValid = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(value); // Use regex to check if value contains only digits
//   return isValid || 'Only IP addresses are allowed';
// };
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
    <v-card variant="outlined" v-bind="props" :class="`elevation-${isHovering ? 24 : 6}`" class="mx-auto pa-6 transition-swing max-width">
      <v-card-title>
        RPC HOST
      </v-card-title>
            <v-text-field v-model="rpcValue.value"
                label="Enter Your RPCd"
                type="string" ></v-text-field>
            <v-btn @click="saveRpc">Save</v-btn>    
    </v-card>
    </v-hover>
</template>

<style scoped>

</style>
