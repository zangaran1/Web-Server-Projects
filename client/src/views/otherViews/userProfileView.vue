<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin } from '@/model/session';


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
   <div class="user-top-banner" v-if="session.user">
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
   <div class="user-bio-container" v-if="session.user">
        <div class="user-bio-headline">
            <h2>Something About Me</h2>
            <hr>
        </div>
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
    background-color: hsl(348, 100%, 61%);
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
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    justify-content: center;
}
.user-bio{
    padding: 20px;
    color: white;
}
.user-bio-headline h2{
    color: white;
    text-align: center;
}
.user-bio-headline{
    justify-content: center;
}
</style>