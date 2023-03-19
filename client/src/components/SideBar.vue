<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSession, login } from '@/model/session';


const session = useSession();

</script>

<template>
    <div class="card" id="card">
        <header class="card-header">
        <p class="card-header-title" id="card-title">
            User Section 
        </p>
        </header>
        <div class="card-content">
            <div class="content">
                <aside class="menu">
                    <div class="menu-list" id="menu-content">
                        <a>User Profile</a>
                        <a>Friends</a>
                        <a>Settings</a>
                        <a>Messages</a>
                        <a>Refer A Friend</a>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card-title{
    background-color: hsl(348, 100%, 61%);
    justify-content: center;
}
#card{
    background-color: rgb(44, 44, 44);
}
#menu-content a{
    color: white;
}
#menu-content a:hover{
    background-color:rgb(78, 78, 78) ;
}
</style>