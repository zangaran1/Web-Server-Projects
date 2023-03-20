<script setup lang="ts">
import { ref } from 'vue';
import { getWorkouts, type Workout } from '../../model/workouts';
import { useSession } from '@/model/session';

const myworkouts = ref( getWorkouts());
const session = useSession();

</script>

<template>
  <div class="section" v-if="session.user">
    <div class="container">
      <div class="start-a-workout-section">
        <button class="button is-info is-large">Start A New Workout</button>
      </div>
      <div class="workout-list">
        <div class="workout" v-for="workout in myworkouts" :key="workout.workoutId">
          <div class="workout-name">
            <b>{{ session.user.name }}'s </b><b> {{ workout.workoutName }} Workout</b>
          </div>
          <div class="data-container">
            <div class="workout-data-left">
              <div class="workout-excercises">{{ workout.excercise }}</div>
                <div class="workout-traits">
                  <div class="workout-sets">{{ workout.sets }} Sets</div>
                  <div class="workout-reps">{{ workout.reps }} Reps</div>
                  <div class="workout-weight">{{ workout.weight }} Pounds</div>
                </div>
              
            </div>
            <div class="workout-data-right">
              <p id="workout-cals">{{ workout.caloriesBurned }} Calories Burned</p>
              <p id="workout-duration">{{ workout.duration }} Minutes</p>
            </div>
          </div>
          
          
      </div>
    </div>
      
      
    </div>
  </div>
</template>

<style scoped>
.section{
  margin-top: 20px;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.start-a-workout-section{
  padding: 25px;
}
.workout-list{
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 65%;
}
.workout{
flex-basis: 12rem;
flex-grow: 1;
margin: 1rem;
background-color: rgb(44, 44, 44);
color: white;
width: 100%;
border-radius: 5px;
box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.628);
 
}
.workout-name{
  padding: 1.5rem;
  background-color: hsl(348, 100%, 61%)
}
.data-container{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 2.5rem;
  
}
.workout-traits{
  display: flex;
  flex-direction: row;
  padding: 1rem;
  margin: 1rem;
}
.workout-sets{
  padding: 1rem;
  background-color: blue;
}
.workout-data-left, .workout-data-right{
  padding: 2.5rem;
}
.workout-data p{
  padding: 5px;
}
.workout-excercises{
  background-color: black;
  padding: 1rem;
}
</style>
