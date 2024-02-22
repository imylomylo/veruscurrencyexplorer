<script setup>
import {ref} from 'vue'
</script>

<template>
  <v-container class="mx-auto">
    <v-hover v-slot="{ isHovering, props }">
    <v-card variant="outlined" v-bind="props" :class="`elevation-${isHovering ? 24 : 6}`" class="mx-auto pa-6 transition-swing max-width">
      <v-card-title>
        RPC HOST
      </v-card-title>
            <v-text-field label="Enter Your RPC"></v-text-field> 
            <v-btn class="">Save</v-btn>    
    </v-card>
    </v-hover>
  </v-container>
</template>

<style scoped>
</style>
