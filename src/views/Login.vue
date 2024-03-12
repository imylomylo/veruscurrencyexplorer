<template>
  <v-container>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username" required>
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required>
      <button type="submit">Login</button>
    </form>
  </v-container>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:5000', {
      username: username.value,
      password: password.value
    });
    const token = response.data.access_token;
    // Store token in local storage or Vuex state
    localStorage.setItem('token', token);
    // Redirect user or perform other actions
  } catch (error) {
    console.error('Login failed:', error);
    // Handle login error (e.g., display error message)
  }
};
</script>
