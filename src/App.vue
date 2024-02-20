

<template>
  <v-app color="primary">
  <TheNavigation></TheNavigation>
  <v-container>
    <router-view></router-view>
  </v-container>
</v-app>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';

</script>
<style scoped>
</style>
