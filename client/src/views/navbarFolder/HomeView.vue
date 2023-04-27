<script setup lang="ts">
import { useSession, login } from '@/model/session';
import SideBar from '../../components/SideBar.vue';
import NavBar from '@/components/NavBar.vue';
import MainSection from '../../components/MainSection.vue';
import UserWelcomeBanner from '../../components/UserWelcomeBanner.vue';


const session = useSession();
</script>

<template>
    <div class="container is-fluid" v-if="session.user">
        <div class="section">
            <div class="columns">
                <div class="column" id="first-card">
                    <SideBar />
                </div>
                <div class="column is-three-quarters" id="middle-card">
                    <div class="user-banner">
                        <UserWelcomeBanner />
                    </div>
                    <div class="main-section">
                        <MainSection />
                    </div>
                    
                </div>
                <div class="column" id="last-card">
                    <!--Friends List goes here-->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#middle-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blue;
}
.column{
    margin-top: 10px;
}

#card-title{
    background-color: teal;
    justify-content: center;
}
#menu-content{
    
}
.container{
    
}

</style>
