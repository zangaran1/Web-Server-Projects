<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSession, login } from '@/model/session';


const session = useSession();

</script>

<template>
    <div class="card">
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
                        <a></a>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card-title{
    background-color: teal;
    justify-content: center;
}
</style>