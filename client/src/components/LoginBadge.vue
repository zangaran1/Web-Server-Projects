<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login } from '@/model/session';



const session = useSession();

</script>

<template>
            <div class="navbar-item" v-if="session.user">
                <a class="button is-info" id="logout-txt" @click=" session.user = null">Logout</a>
            </div>
            <div class="navbar-item" v-else>
                <RouterLink to="/signup" class="signup-page">
                    <a class="button is-danger" id="signup-btn">
                        <span class="icon">
                            <i class="fas fa-user-plus"></i>
                        </span>
                        <strong>Sign up</strong>
                    </a>
                </RouterLink>
                
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
</style>