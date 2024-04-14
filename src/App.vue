

<template>
  <v-app>
  <TheNavigation></TheNavigation>
  <v-main>
    <div class="container mx-auto justify-center flex mt-10 ">
    <router-view>
    </router-view>
    </div>
  </v-main>
</v-app>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';

</script>
<style scoped>

</style>
