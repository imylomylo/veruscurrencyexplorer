

<template>
  <v-app color="primary">
  <TheNavigation></TheNavigation>
  <v-container class="content-container">
    <router-view>
    </router-view>
  </v-container>
</v-app>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';

</script>
<style scoped>
.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensures the container takes the full height of the viewport */
}
</style>
