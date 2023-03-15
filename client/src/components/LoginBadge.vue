<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login } from '@/model/session';


const session = useSession();

</script>

<template>
            <div class="navbar-item" v-if="session.user">
                Welcome, {{ session.user.name }}
                (<a id="logout-txt" @click=" session.user = null">Logout</a>)
            </div>
            <div class="navbar-item" v-else>
                <a class="button is-danger" id="signup-btn">
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                    <strong>Sign up</strong>
                </a>
                <a class="button is-danger" @click="login">
                    <span class="icon">
                        <i class="fas fa-user"></i>
                    </span>
                    <strong>Login</strong>
                </a>
                
            </div>



</template>

<style scoped>
#signup-btn{
   margin-left: 10px;
   margin-right: 10px;
}
#logout-txt{
    color: teal;
    padding: 5px;
}
#logout-txt:hover{
    text-decoration: underline;
}
</style>