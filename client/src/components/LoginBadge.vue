<script setup lang="ts">
import { useSession, useLogin, useLogout } from '@/model/session';

const session = useSession();
const logout = useLogout();
const login = useLogin();

function logout2() {
    logout();
}

// const users that connects to the interface users


</script>

<template>
            
            
            <div class="navbar-item" v-if="session.user">
                Welcome, {{ session.user.name }}
                (<a @click="logout2()">logout</a>)
            </div>
            <div class="navbar-item" v-else>
                <a class="button is-primary" @click="login('nzangara25@gmail.com','password')">
                    <span class="icon">
                        <i class="fas fa-user"></i>
                    </span>
                    <strong>Login</strong>
                </a>
                <RouterLink to="/signup" id="signup-btn">
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                    <strong>Sign up</strong>
                </RouterLink>
            </div>



</template>

<style scoped>
#signup-btn{
   margin-left: 10px;
   margin-right: 10px;
}
#logout-txt{
    margin-left: 10px;
}
.navbar-dropdown{
    text-align: center;
    align-items: center;
    justify-content: center;
    
}
</style>