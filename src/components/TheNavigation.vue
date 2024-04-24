<template>
  <header class="navbar columns-4 justify-between bg-primary text-white">
  <div>
    <h1 class="">Verus Currency Explorer</h1>
  </div>
  <div>
    <h1>RPC: {{ rpcValue }} Version: {{ versionInfo }}</h1>
  </div>
  <div>
  <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-outline m-1">          
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      </div>
      <ul tabindex="0" class="dropdown-content z-[1] menu outline p-2 shadow bg-primary rounded-box w-52">
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/currencies">Currencies</router-link></li>
            <li><router-link to="/settings">Settings</router-link></li>
      </ul>
    <button class="btn btn-outline">
      <router-link to="/login">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
      </router-link>
    </button>
    </div>
  </div>
</header>
  </template>
<script setup>
import { ref, version } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const drawer = ref(false);
const store = useStore();
const rpcValue = computed(() => store.state.rpcValue);
const versionInfo = computed(() => store.state.versionStatus)
</script>
