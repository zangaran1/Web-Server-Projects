<script setup lang="ts">
import { ref, vShow } from 'vue';
import { getWorkouts, getWorkoutUsers, type Workout } from '../../model/workouts';
import { useSession } from '@/model/session';
import data from '@/data/users.json';



const myworkouts = ref( getWorkouts());
const session = useSession();
const isModalActive = ref(false);
const users = ref(data.users);
const workoutUsers = ref(getWorkoutUsers());






const newWorkout = () => {
  const workoutName = document.querySelector('input[name="workoutName"]') as HTMLInputElement;
  const excerciseType = document.querySelector('input[name="excerciseType"]') as HTMLInputElement;
  const sets = document.querySelector('input[name="sets"]') as HTMLInputElement;
  const reps = document.querySelector('input[name="reps"]') as HTMLInputElement;
  const weight = document.querySelector('input[name="weight"]') as HTMLInputElement;
  const calories = document.querySelector('input[name="calories"]') as HTMLInputElement;
  const duration = document.querySelector('input[name="duration"]') as HTMLInputElement;
  const date = document.querySelector('input[name="date"]') as HTMLInputElement;

  

  const newWorkout = {
    workoutId: myworkouts.value.length + 1,
    workoutName: workoutName.value,
    workoutUser: session.user.name,
    excercise: excerciseType.value,
    sets: sets.value,
    reps: reps.value,
    weight: weight.value,
    caloriesBurned: calories.value,
    duration: duration.value,
    date: date.value,
  };

  myworkouts.value.push(newWorkout);
  isModalActive.value = false;

};

const deleteWorkout = (workoutId: number) => {
  myworkouts.value = myworkouts.value.filter((workout) => workout.workoutId !== workoutId);
};





</script>



<template>
  <div class="section" v-if="session.user">
    <div class="container">
      <div class="start-a-workout-section">
        <button class="button is-info is-large" @click="isModalActive = true">Start A New Workout</button>
      </div>
      
       <div class="modal" :class="{ 'is-active': isModalActive }">
         <div class="modal-background"></div>
         <div class="modal-card">
             <header class="modal-card-head">
          <p class="modal-card-title">Start A New Workout</p>
                 <button class="delete" aria-label="close" @click="isModalActive = false"></button>
               </header>
               <section class="modal-card-body">
                   <div class="field">
                       <label class="label">Workout Name</label>
                       <div class="control">
                          <input class="input" type="text" placeholder="Workout Name" name="workoutName">
                        </div>
                       </div>
                       <div class="field">
                        <label class="label">Excercise Type</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Excercise Type" name="excerciseType">
                      </div>
                    </div>
                    <div class="field">
                        <label class="label">Sets</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Sets" name="sets">
                          </div>
                        </div>
                        <div class="field">
                            <label class="label">Reps</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Reps" name="reps">
                              </div>
                            </div>
                            <div class="field">
                                <label class="label">Weight</label>
                                <div class="control">
                                  <input class="input" type="text" placeholder="Weight" name="weight">
                                  </div>
                                </div>
                                <div class="field">
                                    <label class="label">Calories Burned</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Calories Burned" name="calories">
                                      </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Duration</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Duration" name="duration">
                                          </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">
                                              Date
                                            </label>
                                            <div class="control">
                                                <input class="input" type="date" placeholder="Date" name="date">
                                              </div>
                                            </div>
                                          </section>
                                          <footer class="modal-card-foot">
                                              <button class="button is-success" @click="newWorkout">Save changes</button>
                                              <button class="button" @click="isModalActive = false">Cancel</button>
                                            </footer>
                                          </div>
                                        </div> 

      
      <div class="workout-list">
        <div class="workout" v-for="workout in myworkouts" :key="workout.workoutId" v-show="session.user.name === workout.workoutUser"> 
          <div class="close-workout">
            <button class="delete" aria-label="close" @click="deleteWorkout(workout.workoutId)"></button>
          </div>
          <div class="workout-name">
            <b>{{ workout.workoutUser }}'s </b><b> {{ workout.workoutName }} Workout</b> <span><b>Data Completed: {{ workout.date }}</b></span>
          </div>
          <div class="data-container">
            <div class="workout-data-left">
              <div class="workout-excercises">{{ workout.excercise }}</div>
                <div class="workout-traits">
                  <div class="workout-sets">{{ workout.sets }} Sets</div>
                  <div class="workout-reps">{{ workout.reps }} Reps</div>
                  <div class="workout-weight">{{ workout.weight }} Pounds</div>
                </div>
                <div class="workout-share">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Share this Workout!
                    </span>
                  </a>
                </div>
            </div>
            <div class="workout-data-right">
              <div class="workout-metrics">
                <div class="workout-cals">{{ workout.caloriesBurned }} Calories Burned</div>
                <div class="workout-duration">{{ workout.duration }} Minutes</div>
              </div>
              
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
  flex-direction: column-reverse;
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
  padding: 0 1.5rem 1.5rem 1.5rem;
  background-color: hsl(348, 100%, 61%);
}
.workout-name span{
  text-align: right;
  margin-left: 12rem;
  border: 1px hsl(348, 100%, 61%) solid;
  padding: .5rem;
  background-color: white;
  color: hsl(348, 100%, 61%);
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
  padding: 1.5rem;
  margin: 1rem;
}
.workout-sets, .workout-reps, .workout-weight{
  padding: 1.5rem;
  background-color: rgb(20, 20, 20);
  margin: .5rem;
  border-radius: 12px;
  border: 1px hsl(348, 100%, 61%) solid;
  text-align: center;
}
.workout-data-left, .workout-data-right{
  padding: 2.5rem;
}
.workout-data p{
  padding: 5px;
}
.workout-excercises{
  background-color: rgb(20, 20, 20);
  padding: 1rem;
  text-align: center;
  border-radius: 12px;
  font-size: 2rem;
  border: 1px hsl(348, 100%, 61%) solid;
}
.workout-cals{
  background:linear-gradient(to right, red, pink);
  padding: 2rem;
  margin: 1rem;
  font-size: 2rem;
  text-align: center;
  border-radius: 12px;
}
.workout-duration{
  background-color: rgb(20, 20, 20);
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 12px;
  border: 1px hsl(348, 100%, 61%) solid;
}
.workout-share{
  align-items: center;
  justify-content: center;
  text-align: center;
}
.card{
  background-color: rgb(44, 44, 44);
  color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.628);
  font-size: 2rem;
}
.card-top{
  text-align: center;
}
.card-top #line{
  background-color: hsl(348, 100%, 61%);
  margin-left: 20px;
  margin-right: 20px;
}
label{
  color: white;
  padding: 5px;
}
.control input{
  background-color: rgb(255, 255, 255);
  color: black;
  border: 1px white solid;
  border-radius: 5px;
  font-size: 1.5rem;
}
.card-content{
  text-align: center;
  margin: 1rem;
}
#submit-btn{
  margin: 30px;
}
modal{
  z-index: 100;
}
.close-workout{
  background-color: hsl(348, 100%, 61%);
  border-radius: 5px 5px 0 0;
  padding: .25rem;
}
</style>
