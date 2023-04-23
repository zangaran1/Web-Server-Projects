<script setup lang="ts">
    import { useSession} from '@/model/session';

    import FriendsListView from '@/views/otherViews/FriendsListView.vue';
    import UserProfileView from '../views/otherViews/userProfileView.vue';


const session = useSession();
</script>

<template>
  <div class="card" id="card">

    <div class="card-content">

    </div>
</div>
</template>

<style scoped>
    #card-title{
        justify-content: center;
        background-color: hsl(348, 100%, 61%);
    }
    #card{
    background-color: rgb(44, 44, 44);
    }
    

</style>



