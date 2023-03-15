<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login } from '@/model/session';


const session = useSession();
</script>

<template>
   <div class="username-banner">
        <div class="username" v-if="session.user">
            <p id="username-txt">
                {{ session.user.name }}
            </p>
        </div>
   </div>
   <div class="user-top-banner">
        <div class="follower-count">
            Followers: 10
        </div>
        <div class="following-count">
            Following: 13
        </div>
        <div class="workouts-completed-count">
            Workouts Completed: 5
        </div>
        <aside>
            <div class="user-profile-picture">
                <img src="../../assets/pics/picme.png" alt="" id="profile-pic">
            </div>
        </aside>
   </div>
   <div class="user-bio-container">
        <div class="user-bio">
            <p >
                Hello My name is Nicholas Zangara, and I am a Senior Computer Science Student at SUNY New Paltz. I also play baseball for the school. I am a left handed pitcher, and fitness and athletics is a big part of my life!
            </p>
        </div>
   </div>
</template>


<style scoped>
#profile-pic{
    border-radius: 75%;
    width: 100px;
    height: 100px;
}
.username-banner{
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
#username-txt{
    color: white;
    font-size: 30px;
}
.user-top-banner{
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 20px;
    background-color: rgb(51, 49, 49);
}
.follower-count, .following-count, .workouts-completed-count{
    font-size: larger;
    padding: 20px;
    color: white;
   
}
.user-profile-picture{
    padding: 20px;
}
.user-bio-container{
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.user-bio{
    padding: 20px;
    color: white;
}
</style>