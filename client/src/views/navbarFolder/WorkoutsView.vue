<script setup lang="ts">
import { ref } from 'vue';
import { getWorkouts, type Workout } from '../../model/workouts'

const myworkouts = ref( getWorkouts());

</script>

<template>
  <div class="section">
    <div class="container">
      <div class="start-a-workout-section">
        <button class="button is-info is-large">Start A New Workout</button>
      </div>
      <div class="workout" v-for="workout in myworkouts" :key="workout.workoutId">
        <p>{{ workout.workoutId }}</p>
        <h3>{{ workout.workoutName }}</h3>
        <p>{{ workout.excercise }}</p>
        <p>{{ workout.sets }}</p>
        <p>{{ workout.reps }}</p>
        <p>{{ workout.weight }}</p>
        <p>{{ workout.caloriesBurned }}</p>
        <p>{{ workout.duration }}</p>
        <p>{{ workout.distance }}</p>
        <p>{{ workout.pace }}</p>
        <p>{{ workout.description }}</p>
        
      </div>
      
      
    </div>
  </div>
</template>

<style scoped>
.section{
  background-color: white;
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
</style>
