<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin } from '@/model/session';


const session = useSession();
</script>

<template>
    <div class="user-friends-list-banner" v-if="session.user">
        <h2>Friends List</h2>
        <hr>
        <div class="list-of-friends">
            <span class="follower-slide">
                1. Lebron James
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                2. Anthony Rizzo
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                3. Mike Trout
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                4. Tatiana Fernandez
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                5. Justin Harvey
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                6. Nicholas  Harvey
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                7. Conor Olson
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                8. Mike Zangara
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                9. Katniss Everdeen
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
            <span class="follower-slide">
                10. Peeta Melark
                <a class="button is-info" id="unfollow-btn">Unfollow</a>
            </span>
        </div>
    </div>
</template>

<style scoped>
.user-friends-list-banner h2{
    color: rgb(255, 255, 255);
    visibility: visible;
    text-align: center;
    margin-top: 50px;
}
.list-of-friends{
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    
}
#unfollow-btn{
    margin-right: 0px;
    float: right;
}
.follower-slide{
    background-color: rgb(51, 49, 49);
    padding: 20px;
    border-radius: 20px;
    margin: 10px;
}
</style>