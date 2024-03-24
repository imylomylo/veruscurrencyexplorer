<template>
    <div class="status-box">
      <p>{{ viewName }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  // Access the current route
  const route = useRoute();
  
  // Access the meta data of the current route to get the view name
  const viewName = route.meta.viewName;
  
  </script>
  
  <style scoped>
  .status-box {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
  </style>
  