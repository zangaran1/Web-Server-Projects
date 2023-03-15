<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';


</script>

<template>
    
    <NavBar />

    <div class="container">
        <RouterView />
    </div>
    
    
</template>

<style scoped>

</style>
