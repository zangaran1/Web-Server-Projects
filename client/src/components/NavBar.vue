<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
import SearchBar from './SearchBar.vue';
    const isMenuActive = ref(false);

    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar is-dark">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            
            <img alt="Vue logo" class="logo" src="@/assets/codefitlogo.png" width="300" height="44" />
            
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">
            
            <RouterLink to="/" class="navbar-item">
              <span class="icon" id="home-icon">
                <i class="fa-solid fa-house"></i>
              </span>
            </RouterLink>
            <RouterLink to="/admin" class="navbar-item">
              <span class="icon" id="admin-icon">
                <i class="fa-solid fa-lock"></i>
              </span>
            </RouterLink>
 
          </div>
          <div class="navbar-item" >
              <SearchBar />
            </div>
          </div>
      
          <div class="navbar-end">
            <LoginBadge />
          </div>
        </div>
      </nav>
</template>


<style scoped>
#home-icon, #journal-icon, #workouts-icon, #statistics-icon, #admin-icon{
  margin: 2.5px;
}
.router-link-active {
}

.navbar{
  border-bottom: 1px solid hsl(0, 2%, 31%);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  z-index: 100;
}




</style>