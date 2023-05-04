<script setup lang="ts">
import { useSession, useLogin, useLogout } from '@/model/session';
import router from '@/router';

const session = useSession();
const logout = useLogout();
const login = useLogin();

function logout2() {
    logout();
}
function toLogin(){
    router.push('/login');
}

// const users that connects to the interface users


</script>

<template>
            
            
            <div class="navbar-item" v-if="session.user">
                Welcome, {{ session.user.name }}
                <a class="button is-info" @click=logout2>
                    <span class="icon">
                        <i class="fas fa-sign-out-alt"></i>
                    </span>
                    <strong id="logout-txt">Logout</strong>
                </a>
            </div>
            <div class="navbar-item" v-else>
                <div class="login-btn">
                    <a class="button is-info" @click=toLogin>
                        <span class="icon">
                            <i class="fas fa-user"></i>
                        </span>
                        <strong>Login</strong>
                    </a>
                </div>
                <div class="signup-btn">
                    <a class="button is-info">
                        <RouterLink to="/signup" id="signup-btn">
                            <span class="icon">
                                <i class="fas fa-user-plus"></i>
                            </span>
                            <strong style="color: white;">Sign up</strong>
                        </RouterLink>
                    </a>
                    
                </div>
                
            </div>



</template>

<style scoped>
    .button{
        margin-left: 10px;
    }
    .login-btn{
        margin-right: 10px;
    }
    .signup-btn{
        margin-left: 10px;
    }
</style>