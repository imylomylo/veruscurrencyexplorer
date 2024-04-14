<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const rpcValue = ref('');
const store = useStore();

const saveRpc = () => {
  store.commit('updateRpcValue', rpcValue.value);
  rpcValue.value = ref('');
};

</script>

<template>
  <div class="grid-col-1 flex flex-col space-y-4">
    <div class="flex flex-col space-y-4">
        <h2>RPC HOST</h2>
        <input v-model="rpcValue" placeholder="Enter Your RPC" type="text" class="input input-bordered input-primary flex items-center gap-2"/>
        <button @click="saveRpc" class="btn btn-primary">Save</button>
      </div>
    </div>
</template>
