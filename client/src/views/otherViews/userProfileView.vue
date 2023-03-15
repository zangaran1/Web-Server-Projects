<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login } from '@/model/session';


const session = useSession();
</script>

<template>
   <div class="user-top-banner">
        <div class="username" v-if="session.user">
            <p id="username-txt">
                {{ session.user.name }}
            </p>
        </div>
        <div class="follower-count">
            Followers: 10
        </div>
        <div class="following-count">
            Following: 13
        </div>
        <aside>
            <div class="user-profile-picture">
                <img src="../../assets/pics/picme.png" alt="" id="profile-pic">
            </div>
        </aside>
   </div>
</template>


<style scoped>

</style>