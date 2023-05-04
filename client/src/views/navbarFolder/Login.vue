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
    <div class="container">
        <h1>Log In</h1>
        <form @submit.prevent="submit">
            <label for="username">Email</label>
            <input type="text" id="email" name="email" v-model="email" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="password" />
            <button type="submit">Log In</button>
        </form>
    </div>
</template>


<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(56, 56, 56);
        width: 50%;
        margin-top: 5em;

    }
    h1 {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0.5em;
        color: white;
        margin-top: .5em;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        padding: 2rem;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.5em;
        color: white;
    }

    input {
        padding: 0.5em;
        margin-bottom: 1em;
        border: 2px solid hsl(204, 86%, 53%);
        background-color: rgb(44, 44, 44);
        color: white;
        border-radius: 16px;
    }

    button {
        padding: 0.5em;
        background-color: hsl(204, 86%, 53%);
        color: #fff;
        border: none;
        border-radius: 0.25em;
        cursor: pointer;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    button:hover {
        background-color: hsl(204, 86%, 63%);
    }

</style>