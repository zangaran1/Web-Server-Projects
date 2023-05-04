<script setup lang="ts">
    import { ref } from 'vue';
    import { getWorkouts, type Workout } from '@/model/workouts';
    import { useSession } from '@/model/session';
    
   

const session = useSession();

// show only the most recent workout
</script>

<template>
    
<div class="section">
    <div class="columns">
        <div class="column is-two-thirds">
            <div class="user-bio-goals">
                <div class="widget">
                    <div class="about-me">
                        <h1>About me:</h1>
                    </div>
                    <div class="bio">
                        {{ session.user?.bio }}
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="column">
            <div class="new-workout-post">
                <div class="widget">
                    <div class="buttons">
                        <div class="button is-info">
                            <router-link to="/newWorkout">New Workout</router-link>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <div class="buttons">
                        <div class="button is-info">
                            <router-link to="/newEntry">New Journal Entry</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   
   
</template>



<style scoped>
  .widget{
    background-color: rgb(56, 56, 56);
    border-radius: 20px;
    padding: 1em;
    margin-bottom: 1em;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .button{
    margin-bottom: 1em;
    margin-top: 1em;
  }
  *{
    color: white;
  }
  .bio
    {
        margin-top: 1em;
        margin-bottom: 1em;
        text-align: center;
        height: 300px;
    }
    .about-me{
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 1em;
    }
</style>