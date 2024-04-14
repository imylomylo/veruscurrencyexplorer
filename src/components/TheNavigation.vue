<!-- <template>
  <div>
    <v-app-bar class="navbar bg-primary text-primary-content">
      <v-row align="center">
        <v-col cols="4">
          <v-toolbar-title>Verus Currency Explorer</v-toolbar-title>
        </v-col>

        <v-col cols="4" class="text-center">
          <v-toolbar-title>RPC: {{ rpcValue }} Verison: {{ versionInfo }}</v-toolbar-title>
        </v-col>

  <v-col cols="4" class="text-right">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
          class="btn btn-ghost text-xl">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <div class="dropdown">
      <v-list>
        <v-list-item>
          <router-link to="/" class="nav-link" :class="{ 'active-menu': $route.path === '/' }">Dashboard</router-link>
         </v-list-item>
         <v-list-item>
          <router-link to="/currencies" class="nav-link" :class="{ 'active-menu': $route.path === '/currencies' }">Currencies</router-link>
         </v-list-item>
         <v-list-item>
          <router-link to="/settings" class="nav-link" :class="{ 'active-menu': $route.path === '/settings' }">Settings</router-link>
        </v-list-item>
      </v-list> 
      </div>
    </v-menu>
    <v-btn class="btn btn-ghost text-xl">
      <router-link to="/login" class="nav-link">
        <v-icon>mdi-login</v-icon>
        </router-link>
    </v-btn>
    <v-btn icon class="hidden-sm-and-up" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
      </v-btn>
        </v-col>
    </v-row>
    </v-app-bar>


    <v-navigation-drawer :model-value="drawer" temporary class="dropdown" :icon="menubar">
      <v-list>
        <router-link to="/" class="nav-link" :class="{ 'active-menu': $route.path === '/' }">
          <v-list-item>
            <v-icon>mdi-view-dashboard</v-icon>
            Dashboard
          </v-list-item>
        </router-link>
        <router-link to="/currencies" class="nav-link" :class="{ 'active-menu': $route.path === '/currencies' }">
          <v-list-item>
            <v-icon>mdi-currency-usd</v-icon>
            Currencies
          </v-list-item>
        </router-link>
        <router-link to="/settings" class="nav-link" :class="{ 'active-menu': $route.path === '/settings' }">
          <v-list-item>
            <v-icon>mdi-cog</v-icon>
            Settings
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

  </div>
</template> -->
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
            <li><a :class="{ 'active-menu': $route.path === '/' }" href="/">Dashboard</a></li>
            <li><a :class="{ 'active-menu': $route.path === '/currencies' }" href="/currencies">Currencies</a></li>
            <li><a :class="{ 'active-menu': $route.path === '/settings' }" href="/settings">Settings</a></li>
      </ul>
    <button class="btn btn-outline">
      <a :class="{ 'active-menu': $route.path === '/login' }" href="/login">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
        </a>
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
