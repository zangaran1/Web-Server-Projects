<script setup lang="ts">
import { ref } from 'vue';
import { createWorkout, type Workout } from '@/model/workouts';
import { useSession } from '@/model/session';
import router from '@/router';
import {getUsers, search, type User} from '@/model/appUsers';
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

/*const users = ref<User[]>([]);
    getUsers().then((data) => {
      users.value = data.data;
    });

  let input = ref("");
  function filteredListFocus() {
    if (input.value.length > 0) {
      return users.value.filter((userN) => {
        return userN.name.toLowerCase().includes(input.value.toLowerCase());
      }).map((userN) => {
      return userN.name;
      });
    } else {
      return [];
    }
  }
*/

  // user search users import from appUsers.ts
    const users = ref<User[]>([]);
    getUsers().then((data) => {
      users.value = data.data;
    });

    let input = ref("");
    function filteredListFocus() {
      if (input.value.length > 0) {
        return users.value.filter((userN) => {
          return userN.name.toLowerCase().includes(input.value.toLowerCase());
        }).map((userN) => {
        return userN.name;
        });
      } else {
        return [];
      }
    }

    function searchUser() {
      search(input.value).then((data) => {
        users.value = data.data;
      });
    }

    function selectUser(userN: string) {
        input.value = userN;
    }

    function clearInput() {
      input.value = "";
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
                            <label class="label">tag friends</label>
                        
                            <input class="input" type="text" v-model="input" />
                            <div class="dropdown" v-if="session.user">
                                <div class="item userN" v-for="userN in filteredListFocus()" :key="userN" @click="selectUser">
                                    <p>{{ userN }}</p>
                                    
                                </div>
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
.dropdown{
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 100;
  width: 350px;
  margin: 0 auto;
}
.item {
  color: black;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
.userN {
  background-color: white;
  cursor: pointer;
}
.error {
  background-color: tomato;
}
</style>