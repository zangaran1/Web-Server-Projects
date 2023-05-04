<script setup lang="ts">
import { ref } from 'vue';
import { createWorkout, type Workout } from '@/model/workouts';
import { useSession } from '@/model/session';
import router from '@/router';

const session = useSession();

const workoutName = ref('');
const excercise = ref('');
const sets = ref(0);
const reps = ref(0);
const weight = ref(0);
const caloriesBurned = ref(0);
const duration = ref(0);
const date = ref('');

function newWorkout() {
    createWorkout(({
        workoutName: workoutName.value,
        workoutUser: session.user!.name,
        excercise: excercise.value,
        sets: sets.value,
        reps: reps.value,
        weight: weight.value,
        caloriesBurned: caloriesBurned.value,
        duration: duration.value,
        date: date.value
    } as unknown as Workout))
    
    router.push('/workouts');
}
</script>

<template>
    <div class="section">
        <div class="container" v-if="session.user">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="box">
                        <div class="field">
                            <label class="label">Workout Name</label>
                            <div class="control">
                                <input class="input" type="text" v-model="workoutName" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Excercise</label>
                            <div class="control">
                            <input class="input" type="text" v-model="excercise" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">sets</label>
                            <div class="control">
                            <input class="input" type="number" v-model="sets" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">reps</label>
                            <div class="control">
                            <input class="input" type="number" v-model="reps" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">weight</label>
                            <div class="control">
                            <input class="input" type="number" v-model="weight" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">caloriesBurned</label>
                            <div class="control">
                            <input class="input" type="number" v-model="caloriesBurned" />
                            </div>
                        </div> 
                        <div class="field">
                            <label class="label">duration</label>
                            <div class="control">
                            <input class="input" type="number" v-model="duration" />
                            </div>
                        </div> 
                        <div class="field">
                            <label class="label">date</label>
                            <div class="control">
                            <input class="input" type="date" v-model="date" />
                            </div>
                        </div> 
                        <div class="field">
                            <div class="control">
                            <button class="button is-link" @click="newWorkout">Submit</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
    </div>
    

</template>

<style scoped>

</style>