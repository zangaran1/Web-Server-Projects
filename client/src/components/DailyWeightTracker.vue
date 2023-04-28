<script setup lang="ts">
    import { ref, vShow } from 'vue';
    import { getWorkouts, getWorkoutUsers, getMostRecentWorkout, type Workout } from '@/model/workouts';
    import { useSession } from '@/model/session';
    import data from '@/data/users.json';

    const myworkouts = ref( getWorkouts());
    const session = useSession();
    const recentWorkouts = ref(getMostRecentWorkout());
    const users = data.users;

    const recentWorkoutName = ref(recentWorkouts.value.workoutName);

    

</script>

<template>
    

    <div class="container">
        <div class="workout" v-for="workout in myworkouts" :key="workout.workoutId" v-show="session.user.name === workout.workoutUser">
            <div class="recentworkout" v-for="recentworkout in recentWorkouts">
            </div>
        </div>
    </div>
   
</template>



<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 85%;
        background-color: rgb(56, 56, 56);
        border-radius: 20px;
        margin-top: 5%;
        padding: 1rem;
        height: 50vh;
    }
    



</style>