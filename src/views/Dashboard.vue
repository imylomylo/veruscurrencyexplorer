<script setup>
import {ref} from 'vue'
</script>

<template>
  <v-layout>
    <v-row>
      <v-col>
    <h1>Dashboard</h1>
    <v-container class="mx-auto pa-6 container-ho">
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
    </v-container>
    </v-col>
    </v-row>
    </v-layout>
</template>

<style scoped>
.container-ho {
  border: 2px solid transparent; /* Set initial border */
  transition: border-color 0.3s ease-in-out; /* Smooth transition for border color */
}

/* Add hover effect */
.container-ho:hover {
  animation-play-state: paused; 
  border: 2px solid transparent; /* Set initial border */
  border-color: #3165D4;/* Pause the animation on hover */
}
</style>
