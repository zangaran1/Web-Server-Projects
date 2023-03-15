<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';

    const isMenuActive = ref(false);

    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar is-danger">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            
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
              Home
            </RouterLink>
            <RouterLink to="/workouts" class="navbar-item">
              <span class="icon" id="workouts-icon">
                <i class="fa-solid fa-dumbbell"></i>
              </span>
              My Workouts
            </RouterLink>
            <RouterLink to="/journal" class="navbar-item">
              <span class="icon" id="journal-icon">
                <i class="fa-solid fa-book"></i>
              </span>
              Journal
            </RouterLink>
            <RouterLink to="/statistics" class="navbar-item">
              <span class="icon" id="statistics-icon">
                <i class="fa-solid fa-chart-line"></i>
              </span>
              Statistics
            </RouterLink>
            <RouterLink to="/admin" class="navbar-item">
              <span class="icon" id="admin-icon">
                <i class="fa-solid fa-lock"></i>
              </span>
              Admin
            </RouterLink>
 
          </div>
          </div>
      
          <div class="navbar-end">

            <LoginBadge />

            <div class="navbar-item">
              <div class="field">
                <p class="control">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
</template>


<style scoped>
#home-icon, #journal-icon, #workouts-icon, #statistics-icon, #admin-icon{
  margin: 2.5px;
}
.router-link-active {
  border-bottom: #2889f7d5 5px solid;
}
  
#navbar-edit{
  background-color: #ff5100d5;
}
#navbar-edit:hover{
  background-color: #ff5100d5;
}

</style>