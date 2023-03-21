<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useSession, login } from '@/model/session';
    import UserProfile from '@/views/otherViews/UserProfileView.vue'; 
    import FriendsListView from '@/views/otherViews/FriendsListView.vue';


const session = useSession();
</script>

<template>
  <div class="card" id="card">
    <header class="card-header">
        <p class="card-header-title" id="card-title">
            Component
        </p>
    </header>

    <div class="card-content">
        <div class="content">
            <div class="user-profle-content">
                <UserProfile />
            </div>
            <div class="friends-list">
                <FriendsListView />
            </div>
            <div class="messages-content">

            </div>
            <div class="refer-content">

            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
    #card-title{
        justify-content: center;
        background-color: hsl(348, 100%, 61%);
    }
    #card{
    background-color: rgb(44, 44, 44);
    }
    

</style>



