<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login } from '@/model/session';
import { useRoute, useRouter } from 'vue-router';
import data from '@/data/users.json';

const session = useSession();

const route = useRoute();
const router = useRouter();

// const users that connects to the interface users
const users = ref(data.users);

</script>

<template>
            
            
            <div class="navbar-item" v-if="session.user">
                Welcome, {{ session.user.name }}
                <a class="button is-info" id="logout-txt" @click=" session.user = null">Logout</a>
            </div>
            <div class="navbar-item" v-else>
                <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    Login
                </a>
                <div class="navbar-dropdown">
                    <a class="navbar-item" v-for="user in users" :key="user.userID" @click="session.user = user">
                        {{ user.name }}
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" data-toggle="modal" data-target="#exampleModal">
                        <RouterLink to="/signup" class="signup-page">
                            <a class="navbar-item">
                                <span class="icon">
                                    <i class="fas fa-user-plus"></i>
                                </span>
                                <strong>Sign up</strong>
                            </a>
                        </RouterLink>
                    </a>       
                </div>
            </div>
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
</style>