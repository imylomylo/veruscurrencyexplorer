<template>
  <div>
    <v-app-bar color="primary">
      <v-row align="center">
        <v-col cols="4">
          <v-toolbar-title>Verus Currency Explorer</v-toolbar-title>
        </v-col>

        <v-col cols="4" class="text-center">
          <v-toolbar-title>RPC: {{ rpcValue }}</v-toolbar-title>
        </v-col>

        <v-col cols="4" class="text-right">
          <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/" class="nav-link" :class="{ 'active-menu': $route.path === '/' }">Dashboard</router-link>
            <router-link to="/currencies" class="nav-link" :class="{ 'active-menu': $route.path === '/currencies' }">Currencies</router-link>
            <router-link to="/settings" class="nav-link" :class="{ 'active-menu': $route.path === '/settings' }">Settings</router-link>
          </v-toolbar-items>
          <v-btn icon class="hidden-md-and-up" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-expand-transition>
    <v-navigation-drawer :model-value="drawer" temporary class="navdrawer" :icon="menubar">
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
    </v-expand-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const drawer = ref(false);
const store = useStore();
const rpcValue = computed(() => store.state.rpcValue);

</script>

<style scoped>
.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.active-menu {
  font-weight: bold;
  font-size: large;
}

.navdrawer {
  background-color: blue;
  color: white;
}
</style>
