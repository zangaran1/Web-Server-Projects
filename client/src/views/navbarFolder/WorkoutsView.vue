<script setup lang="ts">
import { ref } from 'vue';
import { getWorkouts, type Workout } from '@/model/workouts';
import { useSession } from '@/model/session';

const workouts = ref<Workout[]>([]);
getWorkouts().then((data) => {
    workouts.value = data.data;
});

const session = useSession();
</script>



<template>
  <div class="section" v-if="session.user">
    <div class="container">
      <div class="workout" v-for="workout in workouts" v-if="session.user" v-show="session.user.name === workout.workoutUser">
          <div class="card">
            <div class="card-header">
              <div class="card-top-left">
                {{ workout.workoutUser }}'s {{ workout.workoutName }} Workout
              </div>
              <div class="card-top-right">
                {{ workout.date }} 
              </div>
            </div>
            <div class="card-content">
              <div class="card-content-left">
                <div class="workout-excercise">
                  {{ workout.excercise }}
                </div>
                <div class="workout-attributes">
                  <div class="workout-sets">
                    {{ workout.sets }} sets
                  </div>
                  <div class="workout-reps">
                    {{ workout.reps }} reps
                  </div>
                  <div class="workout-weight">
                    {{ workout.weight }} lbs
                  </div>
                </div>
                
              </div>

              <div class="card-content-right">
                <div class="workout-calories-burned">
                  <p>{{ workout.caloriesBurned }} calories burned</p>
                  
                </div>
                <div class="workout-duration">
                  {{ workout.duration }} minutes
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
  .workout {
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

</style>
