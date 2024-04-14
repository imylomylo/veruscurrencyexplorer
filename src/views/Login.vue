<template>
  <div class="grid-cols-1 flex flex-col space-y-4 items-center">
    <h1 v-if="!loggedIn" class="text-2xl">Login</h1>

    <h1 v-else>Welcome, {{ username }}</h1>
    
    <form v-if="!loggedIn" @submit.prevent="login" class="flex flex-col space-y-4">
      <input type="text" v-model="username" placeholder="Enter Your Username" class="input input-bordered input-primary flex items-center gap-2" required>
      <input type="password" v-model="password" placeholder="Enter Your Password" class="input input-bordered input-primary flex items-center gap-2" required>
      <button type="submit" class="btn btn-primary text-white">Login</button>
    </form>
    
    <button v-if="loggedIn" class="btn" @click="logout">Logout</button>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const loggedIn = ref(false); // Define loggedIn variable

const login = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/login', {
      username: username.value,
      password: password.value
    });
    const token = response.data.access_token;
    localStorage.setItem('token', token);
    loggedIn.value = true; // Set loggedIn to true after successful login
    console.log(token);
    // Redirect user or perform other actions
  } catch (error) {
    console.error('Login failed:', error);
    // Handle login error (e.g., display error message)
  }
};

const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Set the token in the Authorization header
      }
    };
    const response = await axios.post('http://127.0.0.1:5000/logout', null, config);
    console.log('Logout successful:', response.data);
    loggedIn.value = false; // Set loggedIn to false after successful logout
    // Clear form and perform other actions
    username.value = '';
    password.value = '';
  } catch (error) {
    console.error('Logout failed:', error);
    // Handle logout error (e.g., display error message)
  }
};

</script>
