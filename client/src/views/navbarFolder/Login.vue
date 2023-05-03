<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '@/model/session';
</script>

<template>
    <div>
        <h1>Log In</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
    </div>
</template>


<style scoped>

</style>