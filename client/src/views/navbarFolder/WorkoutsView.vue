<script setup lang="ts">

</script>

<template>
  <div class="section">
    <div class="container">
      <div class="start-a-workout-section">
        <button class="button is-info is-large">Start A New Workout</button>
      </div>
      <div class="modal is-active">
        <div class="modal-content">
          <h1>Press + to add a Workout</h1>
          <button class="button is-info">+</button>
        </div>
      </div>
      <div class="workouts">
      
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
