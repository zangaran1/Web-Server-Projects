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
    
    
</style>
