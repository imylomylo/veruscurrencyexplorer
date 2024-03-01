

<template>
  <v-app color="primary">
  <TheNavigation></TheNavigation>
  <v-main>
  <v-container fluid>
    <router-view>
    </router-view>
  </v-container>
  </v-main>
</v-app>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';

</script>
<style scoped>
.content-container-two{
  min-width: 100%;
  margin: 0 auto;
}
.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensures the container takes the full height of the viewport */
}
</style>
