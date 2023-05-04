<script setup lang="ts">
import { ref } from "vue";
import { useSession, useLogin } from "@/model/session";
import { createJournal, type Journal } from "@/model/journals";
import router from "@/router";

const session = useSession();

const date = ref("");
const bodyWeight = ref(0);
const caloriesEaten = ref(0);
const entryContent = ref("");

function submit() {
  createJournal(({
    date: date.value,
    bodyWeight: bodyWeight.value,
    caloriesEaten: caloriesEaten.value,
    entryContent: entryContent.value,
    owner: session.user!.username,
  } as unknown as Journal))

  router.push("/");
}

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
              <input class="input" type="number" v-model="bodyWeight" />
            </div>
          </div>
          <div class="field">
            <label class="label">Calories Eaten Today</label>
            <div class="control">
              <input class="input" type="number" v-model="caloriesEaten" />
            </div>
          </div>
          <div class="field">
            <label class="label">Entry</label>
            <div class="control">
              <textarea class="textarea" v-model="entryContent"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link" @click="submit">submit</button>
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
