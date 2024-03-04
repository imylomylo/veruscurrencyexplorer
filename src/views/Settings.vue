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
  <v-layout>
    <v-row>
      <v-col>
    <v-container class="mx-auto pa-6 container-ho">
      <v-card-title>
        RPC HOST
      </v-card-title>
            <v-text-field v-model="rpcValue.value"
                label="Enter Your RPCd"
                type="string" ></v-text-field>
            <v-btn @click="saveRpc">Save</v-btn>    
    </v-container>
    </v-col>
    </v-row>
    </v-layout>
</template>

<style scoped>
.container-ho {
  border: 2px solid transparent; /* Set initial border */
  transition: border-color 0.3s ease-in-out; /* Smooth transition for border color */
}

/* Add hover effect */
.container-ho:hover {
  animation-play-state: paused; 
  border: 2px solid transparent; /* Set initial border */
  border-color: #3165D4;/* Pause the animation on hover */
}
</style>
