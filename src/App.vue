

<template>
  <TheNavigation></TheNavigation>
    <div class="container justify-center mt-10 columns-2" data-theme="dark">
    <router-view></router-view>
    </div>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';

</script>

