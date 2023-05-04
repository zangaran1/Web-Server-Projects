<script setup lang="ts">
import { ref } from "vue";
import { useSession } from "@/model/session";
import { getJournals, type Journal } from "@/model/journals";


const journals = ref<Journal[]>([]);
    getJournals().then((data) => {
    journals.value = data.data;
});

const session = useSession();

</script>

<template>
    <div class="section">
        <div class="container" v-if="session.user">
            <h1>My Journals</h1>
            <div class="journal" v-for="journal in journals" v-if="session.user" v-show="session.user.username === journal.owner">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-content">
                            <div class="owner">
                                {{ journal.owner }}
                            </div>
                            <div class="date">
                                {{ journal.date }}
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-content-info">
                            {{ journal.bodyWeight }} lbs
                            <hr>
                            {{ journal.caloriesEaten }} calories eaten today
                        </div>
                        <div class="card-content-body">
                            {{ journal.entryContent }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
    .section{
        margin-top: 5em;
    }
    .card{
        background-color: rgb(56, 56, 56);
        border-radius: 5px;
    }
    .card-header{
        display: flex;
        align-items: center;
        background-color: hsl(204, 86%, 53%);
        padding: 1em;
        margin-bottom: 1em;
    }
    .card-header-content{
        color: white;
        font-weight: bold;
        justify-content: space-between;
        display: flex;
        width: 100%;
        flex-direction: row;
    }
    .card-content{
        display: flex;
        flex-direction: column;
    }
    .card-content-info{
        padding: 1em;
        background-color: rgb(44, 44, 44);
        color: white;
        border-radius: 5px;
        margin-bottom: 1em;
    }
    .card-content-body{
        padding: 1em;
        background-color: rgb(44, 44, 44);
        color: white;
        border-radius: 5px;
    }
    .journal{
        margin-bottom: 3em;
    }
    h1{
        color: white;
        text-align: center;
        font-size: 4rem;
        font-weight: 700;
        background-color: rgb(56, 56, 56);
        border-radius: 5px;
        margin-bottom: 1em;
    }
</style>