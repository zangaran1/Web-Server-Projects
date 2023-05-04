<script setup lang="ts">

import { ref } from 'vue';
import { createUser, type User } from '@/model/appUsers';
import router from '@/router';

const email = ref('');
const username = ref('');
const name = ref('');
const password = ref('');
const image = ref('');




function signup() {
    createUser(({
        email: email.value,
        username: username.value,
        name: name.value,
        password: password.value,
        image: image.value
    } as User))
}
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="card-top">
                    <h1>Sign Up</h1>
                    <div id="line"></div>
                </div>
            </div>
            <form @submit.prevent="signup">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" v-model="email" />
                <label for="username">Username</label>
                <input type="text" id="username" name="username" v-model="username" />
                <label for="name">Name</label>
                <input type="text" id="name" name="name" v-model="name" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="password" />
                <label for="image">Profile Image</label>
                <input type="text" id="image" name="image" v-model="image" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</template>


<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin-top: 50px;
    }
    .card{
        width: 500px;
        border-radius: 10px;
        background-color: rgb(56, 56, 56);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .card-header{
        background-color: hsl(204, 86%, 53%);
        border-radius: 10px 10px 0 0;
        padding: 20px;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .card-top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card-top h1{
        color: white;
        font-size: 2rem;
        text-align: center;
        font-weight: 700; 
    }
    #line{
        width: 100px;
        height: 5px;
        background-color: white;
        border-radius: 5px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    label{
        color: white;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 10px;
    }
    input{
        width: 300px;
        padding: 10px;
        border-radius: 20px;
        margin: 10px;
        background-color: rgb(44, 44, 44);
        color: white;
        border-color: hsl(204, 86%, 53%);
    }
    button{
        width: 150px;
        padding: 10px;
        border-radius: 20px;
        margin: 10px;
        background-color: hsl(204, 86%, 53%);
        color: white;
        border-color: hsl(204, 86%, 53%);
        font-size: 1.2rem;
        font-weight: 700;
    }

    
   
       
   
</style>