<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login } from '@/model/session';


const session = useSession();

</script>

<template>
            <div class="navbar-item" v-if="session.user">
                Welcome, {{ session.user.name }}
                (<a @click=" session.user = null">logout</a>)
            </div>
            <div class="navbar-item" v-else>
                <a class="button is-dark" @click="login">
                    <span class="icon">
                        <i class="fas fa-user"></i>
                    </span>
                    <strong>Login</strong>
                </a>
                <a class="button is-info" id="signup-btn">
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                    <strong>Sign up</strong>
                </a>
            </div>



</template>

<style scoped>
#signup-btn{
   margin-left: 10px;
   margin-right: -10px;
}
</style>