<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin } from '@/model/session';
import { getWorkouts, type Workout } from '@/model/workouts';
import {getUsers , type AppUser} from '@/model/appUsers';

const workouts = ref<Workout[]>([]);
getWorkouts().then((data) => {
    workouts.value = data.data;
});

const users = ref<AppUser[]>([]);
getUsers().then((data) => {
    users.value = data.data;
});

const session = useSession();
</script>

<template>
    <div class="section">
        <div class="columns">
            <div class="column is-three-quarters">
                <div class="friends-activity" v-for="friendsWorkout in workouts" v-if="session.user" v-show="session.user.name !== friendsWorkout.workoutUser">
                    <div class="card">
            <div class="card-header">
              <div class="card-top-left">
                {{ friendsWorkout.workoutUser }}'s {{ friendsWorkout.workoutName }} Workout
              </div>
              <div class="card-top-right">
                {{ friendsWorkout.date }} 
              </div>
            </div>
            <div class="card-content">
              <div class="card-content-left">
                <div class="workout-excercise">
                  {{ friendsWorkout.excercise }}
                </div>
                <div class="workout-attributes">
                  <div class="workout-sets">
                    {{ friendsWorkout.sets }} sets
                  </div>
                  <div class="workout-reps">
                    {{ friendsWorkout.reps }} reps
                  </div>
                  <div class="workout-weight">
                    {{ friendsWorkout.weight }} lbs
                  </div>
                </div>
                
              </div>

              <div class="card-content-right">
                <div class="workout-calories-burned">
                  <p>{{ friendsWorkout.caloriesBurned }} calories burned</p>
                  
                </div>
                <div class="workout-duration">
                  {{ friendsWorkout.duration }} minutes
                </div>
              </div>

            </div>
          </div>
                </div>
            </div>
            <div class="column" id="column2">
                <div class="friends-bar">
                    <div class="friends" v-for="user in users" v-if="session.user" v-show="session.user.name !== user.name">
                        <div class="friends-container">
                            <div class="user-profile-picture">
                                <img id="profile-pic" :src="user.image" alt="Profile Picture">
                            </div>
                            <div class="user-credentials">
                                {{ user.username }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section {
    margin-top: 50px;
  }
  .container{
    max-width: 800px;
    margin: 0 auto;
  }
  .friends-activity {
    margin-bottom: 50px;
  }
  .card {
    background-color: rgb(56, 56, 56);
    border-radius: 5px;
    max-width: 600px;
    margin: 0 auto;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: hsl(204, 86%, 53%);
    color: white;
  }
  .card-top-left {
    font-size: 20px;
    padding: 5px;
  }
  .card-top-right {
    font-size: 20px;
    color: hsl(204, 86%, 53%);
    background-color: white;
    border: 2px solid hsl(204, 86%, 53%);
    padding: 5px;
  }
  .card-content {
    display: flex;
    justify-content: space-between;
  }
  .workout-attributes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .workout-sets, .workout-reps, .workout-weight {
    border: 2px solid hsl(204, 86%, 53%);
    border-radius: 5px;
    padding: 5px;
    background-color: rgb(44, 44, 44);
    color: white;
    margin: 10px;
  }
  .workout-excercise {
    font-size: 30px;
    margin-bottom: 10px;
    border: 2px solid hsl(204, 86%, 53%);
    border-radius: 5px;
    padding: 5px;
    background-color: rgb(44, 44, 44);
    color: white;
    text-align: center;
  }
  .card-content-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .workout-calories-burned{
    border-radius: 5px;
    padding: 1rem;
    background:linear-gradient(to left, hsl(204, 93%, 57%), rgb(162, 226, 255), hsl(204, 86%, 53%));
    color: white;
    font-size: 20px;
    margin: 10px;
  }
  
  .workout-duration {
    border: 2px solid hsl(204, 86%, 53%);
    border-radius: 5px;
    padding: 5px;
    background-color: rgb(44, 44, 44);
    color: white;
    margin: 10px;
  }
  .card-content-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    .friends-bar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    #profile-pic{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: rgb(56, 56, 56);
        border: 2px solid hsl(204, 86%, 53%);
    }
    .friends{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(44, 44, 44);
        border-radius: 5px;
        margin-bottom: 20px;
        margin-top: 10px;
        padding: 0px 10px 0px 10px;
        color: white;
    }
    .user-credentials{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
    .friends-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

</style>