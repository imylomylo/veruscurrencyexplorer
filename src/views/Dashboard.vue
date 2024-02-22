<script setup>
import {ref} from 'vue'
</script>

<template>
  <v-container class="mx-auto mb-6">
    <h1>Dashboard</h1>
    <v-hover v-slot="{ isHovering, props }">
    <v-card variant="outlined" v-bind="props" :class="`elevation-${isHovering ? 24 : 6}`" class="mx-auto pa-6 transition-swing">
      <v-card-title>
        Lorem Ispetem
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere 
        adipisci,iusto, 
        voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum 
        maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, 
        voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
      </v-card-text>
    </v-card>
    </v-hover>
  </v-container>
</template>

<style scoped>
</style>
