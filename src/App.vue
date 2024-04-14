

<template>
  <TheNavigation></TheNavigation>
    <div class="container mx-auto justify-center flex mt-10 columns-1" data-theme="dark">
    <router-view>
    </router-view>
    </div>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';

</script>

