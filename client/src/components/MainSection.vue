<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useSession, login } from '@/model/session';


const session = useSession();
</script>

<template>
  <div class="card">
    <header class="card-header">
        <p class="card-header-title" id="card-title">
            Component
        </p>
    </header>

    <div class="card-content">
        <div class="content">
        
        </div>
    </div>
</div>
</template>

<style scoped>
    #card-title{
        background-color: teal;
        justify-content: center;
    }

</style>



