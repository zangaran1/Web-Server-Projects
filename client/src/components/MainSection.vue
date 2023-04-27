<script setup lang="ts">
    import { useSession} from '@/model/session';

    import FriendsListView from '@/views/otherViews/FriendsListView.vue';
    import UserProfileView from '../views/otherViews/userProfileView.vue';


const session = useSession();
</script>

<template>
    <div class="section">
        <div class="columns">
            <div class="column is-half">
                <div class="column">
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title">
                                Weekly Progress
                            </p>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <div class="progress-section" style="width: 100%;">
                                    <progress class="progress" value="560" max="750"></progress> 
                                    <p style="text-align: right;">
                                        <strong>560</strong> / 750
                                    </p> 
                                </div>
                                
                            </div>
                            
                            <div class="content">
                                <progress class="progress is-success" value="4" max="6"></progress>  
                            </div>
                            <p style="text-align: right;">
                                <strong>4</strong> / 6
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="columns">
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-header">
                                <p class="card-header-title">
                                    Weekly Progress
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-header">
                                <p class="card-header-title">
                                    Weekly Progress
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #card-title{
        justify-content: center;
        background-color: hsl(348, 100%, 61%);
    }
    .card{
        background-color: rgb(44, 44, 44);
    }
    .card-header-title{
        color: white;
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-wrap: wrap;
        gap: 40px;
    }
    progress{
        
    }
    
  

   


    

    

</style>



