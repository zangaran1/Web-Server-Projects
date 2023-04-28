<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSession, login } from '@/model/session';


const session = useSession();

</script>

<template>
    <div class="container" v-if="session.user">
        <div class="widget-bar">
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
        </div>
        <div class="widget-bar">
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
            <div class="box-section">
                <div class="box is-info" id="box-1">
                    <RouterLink to="/workouts" class="navbar-item">
                        <span class="icon" id="friends-icon">
                            <i class="fa-solid fa-user-friends"></i>
                        </span>
                    </RouterLink>
                </div>
                <p>Friends</p>
            </div>
        </div> 
        <div class="widget-bar-progress">
            <div class="progress-bar-1">
                <p>Weekly Lift Goal:</p>
                <progress class="progress is-primary" value="4" max="7">15%</progress>
                <p style="text-align: right;">4 / 7</p>
            </div>
            <div class="progress-bar-2">
                <p>Caloric Intake Today:</p>
                <progress class="progress is-danger" value="2257" max="3500">15%</progress>
                <p style="text-align: right;">2257 / 3500</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .widget-bar .box-section{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    .widget-bar{
        background-color: rgb(56, 56, 56);
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-radius: 20px;
        margin: 1rem;
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
    }
    .widget-bar-progress{
        background-color: rgb(56, 56, 56);
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 20px;
        margin: 1rem;
    }
    .widget-bar-progress p{
        color: white;
        font-size: 1rem;
        padding: .5rem;
    }
    .progress{
        margin-bottom: 0px;
    }
</style>