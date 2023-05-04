<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '@/model/session';
import {useLogin} from '@/model/session';

const login = useLogin();

const email = ref('');
const password = ref('');

function submit() {

    login(email.value, password.value);
}
</script>

<template>
    <div>
        <h1>Log In</h1>
        <form @submit.prevent="submit">
            <label for="username">email</label>
            <input type="text" id="email" name="email" v-model="email" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="password" />
            <button type="submit">Log In</button>
        </form>
    </div>
</template>


<style scoped>

</style>