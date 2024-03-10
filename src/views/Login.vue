<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:5000', {
            username: this.username,
            password: this.password
          });
          const token = response.data.access_token;
          // Store token in local storage or Vuex state
          localStorage.setItem('token', token);
          // Redirect user or perform other actions
        } catch (error) {
          console.error('Login failed:', error);
          // Handle login error (e.g., display error message)
        }
      }
    }
  };
  </script>
  