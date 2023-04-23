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
                                <div class="progress">
                                    <span>
                                        <progress class="progress is-primary" value="15" max="100"></progress>
                                    </span>
                                </div>
                            </div>
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
    .progress{
        width: 150px;
        height: 150px;
        line-height: 150px;
        background: none;
        margin: 0 auto;
        box-shadow: none;
        position: relative;
    }
   


    

    

</style>



