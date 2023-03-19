<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useSession, login } from '@/model/session';
    import UserProfileView from '@/views/otherViews/userProfileView.vue';
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
                <UserProfileView />
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
    background-color: rgb(56, 55, 55);
    }
    

</style>



