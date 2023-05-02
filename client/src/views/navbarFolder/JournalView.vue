<script setup lang="ts">
import { ref } from "vue";
import { useSession, useLogin } from "@/model/session";

const session = useSession();

const date = ref("");
const weight = ref(0);
const bodyFat = ref(0);
const notes = ref("");

const save = () => {
  console.log(date.value);
  console.log(weight.value);
  console.log(bodyFat.value);
  console.log(notes.value);
};


</script>

<template>
  <div class="container" v-if="session.user">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box">
          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date" v-model="date" />
            </div>
          </div>
          <div class="field">
            <label class="label">Weight</label>
            <div class="control">
              <input class="input" type="number" v-model="weight" />
            </div>
          </div>
          <div class="field">
            <label class="label">Body Fat</label>
            <div class="control">
              <input class="input" type="number" v-model="bodyFat" />
            </div>
          </div>
          <div class="field">
            <label class="label">Notes</label>
            <div class="control">
              <textarea class="textarea" v-model="notes"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link" @click="save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container{
    margin-top: 50px;
  }
</style>
