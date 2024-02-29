<script setup>
import {ref} from 'vue'
</script>

<template>
    <h1>Currencies</h1>
   
    <v-hover v-slot="{ isHovering, props }">
      
    <v-card variant="outlined" v-bind="props" :class="`elevation-${isHovering ? 24 : 6}`" class="mx-auto pa-6 transition-swing">
      <v-card-title>
        Lorem Ispetem
      </v-card-title>
      <v-data-table></v-data-table>     
      <v-textarea label="Your JSON HERE" prepend-inner-icon="mdi-code-json"></v-textarea>

    </v-card>
    </v-hover>
</template>

<style scoped>
</style>
