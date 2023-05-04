<script setup lang="ts">
import { useSession, useLogin } from '@/model/session';
import SideBar from '../../components/SideBar.vue';
import NavBar from '@/components/NavBar.vue';
import MainSection from '../../components/MainSection.vue';
import UserWelcomeBanner from '../../components/UserWelcomeBanner.vue';


const session = useSession();
</script>

<template>
    <div class="section" v-if="session.user">
        <div class="card">
            <div class="card-top">
            </div>
            <div class="card-content">
                <div class="columns">
                    <div class="column is-two-thirds">
                        <MainSection/>
                    </div>
                    <div class="column">
                        <SideBar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section-2" v-else>
        <div class="container">
            <h1>Welcome to Code Fitness</h1>
            <h1>Please Log in</h1>
        </div>
    </div>
    <footer>Work Done by Nicholas Zangara</footer>
</template>

<style scoped>
    .card{
        background-color: rgb(44, 44, 44);
    }
    .card-top{
        background-color: hsl(204, 86%, 53%);
        width: 100%;
        height: 50px;
        border-radius: 16px 16px 0px 0px;
    }
    .section-2{
        margin-top: 50px;
        align-items: center;
        justify-content: center;
    }
    .container{
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    h1{
        color: white;
        font-size: 5rem;
    }
    footer{
        text-align: center;
        color: white;
        font-size: 1.5rem;
    }
    
</style>
