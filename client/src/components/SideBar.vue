<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSession, login } from '@/model/session';


const session = useSession();

</script>

<template>
    <div class="card" id="card">
        <header class="card-header">
        <p class="card-header-title" id="card-title"> 
            Feed
        </p>
        </header>
        <div class="card-content">
            <div class="content">
                <div class="box-section">
                    <div class="box is-info" id="box-1">
                        <RouterLink to="/statistics" class="navbar-item">
                            <span class="icon" id="statistics-icon">
                                <i class="fa-solid fa-chart-line"></i>
                            </span>
                        </RouterLink>
                    </div>
                    <p>statistics</p>
                </div>
                <div class="box-section">
                    <div class="box is-info" id="box-1">
                        <RouterLink to="/workouts" class="navbar-item">
                            <span class="icon" id="workouts-icon">
                                <i class="fa-solid fa-dumbbell"></i>
                            </span>
                        </RouterLink>
                    </div>
                    <p>Workouts</p>
                </div>
                <div class="box-section">
                    <div class="box is-info" id="box-1">
                        <RouterLink to="/journal" class="navbar-item">
                            <span class="icon" id="journal-icon">
                                <i class="fa-solid fa-book"></i>
                            </span>
                        </RouterLink>
                    </div>
                    <p>Journal</p>
                </div>
                <div class="box-section">
                    <div class="box is-info" id="box-1">
                        <RouterLink to="/workouts" class="navbar-item">
                            <span class="icon" id="goals-icon">
                                <i class="fa-solid fa-arrow-trend-up"></i>
                            </span>
                        </RouterLink>
                    </div>
                    <p>Goals</p>
                </div>
                <div class="box-section">
                    <div class="box is-info" id="box-1">
                        <RouterLink to="/workouts" class="navbar-item">
                            <span class="icon" id="referal-icon">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                        </RouterLink>
                    </div>
                    <p>Referals</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-content{
    background-color: rgb(44, 44, 44);
}
#card-title{
    justify-content: center;
    background-color: hsl(204, 86%, 53%);
}
.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
}
.box{
    background-color: hsl(204, 86%, 53%);
    border-radius: 10px;
    text-align: center;
    color: white;
    padding: 5px;
    margin: 10px 10px 10px 10px;
    align-items: center;
    justify-content: center;
}


.box:hover{
    background-color: hsl(204, 86%, 63%);
}
router-link:hover{
    background-color: hsl(204, 86%, 63%);
}
a.navbar-item:hover{
    background-color: hsl(204, 86%, 63%);
}
.box-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
}
.box-section p{
    color: white;
    font-size: 1rem;
    margin-top: -15px;
}

</style>