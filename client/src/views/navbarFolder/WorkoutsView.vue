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
      <h1>Hello</h1>
      <div class="workout" v-for="workout in workouts" v-if="session.user">
          <div class="workout-name">
            {{ workout.workoutName }}
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .workout-name{
    background-color: blue;
    width: 200px;
    height: 200px;
  }
  .container{
    background-color: green;
  }
</style>
