<script setup lang="ts">
import { useSession, login } from '@/model/session';
import SideBar from '../../components/SideBar.vue';
import NavBar from '@/components/NavBar.vue';
import MainSection from '../../components/MainSection.vue';


const session = useSession();
</script>

<template>
    <div class="container is-fluid">
            <div class="section">
            <div class="column">
                <div class="column is-full" id="middle-card">
                    <MainSection />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#middle-card, #first-card{
    margin-top: 10px;
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
