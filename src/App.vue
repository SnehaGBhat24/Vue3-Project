<template>
   <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item has-text-white is-size-3">Recipies Center</p>
    </div>
    <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <p class="navbar-item has-text-white is-size-4" @click="goToUrl('/recipes')">Recipes</p>
        <p class="navbar-item has-text-white is-size-4" @click="goToUrl('/bookmarks')">BookMarks</p>
        <p class="navbar-item has-text-white is-size-4" @click="logout">Logout</p>
      </div>
    </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const logout = () => {
      localStorage.clear();
      router.push('/');
    }
    const goToUrl = (url) => {
      if (route.path === '/' && route.name === 'Login') {
        router.push('/');
      } else router.push(url);
    }
    return {
      logout,
      goToUrl,
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  margin-top: 0.75px;
}
.navbar {
  z-index: 42 !important;
  background-color: black;
  min-height: 5.3rem !important;
}
</style>
