<script setup lang="ts">
    import { useSession} from '@/model/session';

    import FriendsListView from '@/views/otherViews/FriendsListView.vue';
    import UserProfileView from '../views/otherViews/userProfileView.vue';

    const session = useSession();
</script>

<template>
    
    <div class="top-banner" v-if="session.user">
        <div class="banner">
            <div class="user-profile-picture">
                <img src="../assets/pics/picme.png" alt="" id="profile-pic">
            </div>
            <div class="welcome">
                <h1>Hello, {{ session.user.name }}!</h1>
                <p>Welcome to your home dashboard. You can access all features of the program here!</p>
            </div>
        </div>    
    </div>
    
</template>


<style scoped>
#profile-pic{
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
.top-banner{
    display: flex;
    flex-direction: row;
    padding: 10px;
}
.banner{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.welcome h1{
    padding-left: 20px;
    color: white;
    font-size: 2rem;
}
.welcome p{
    padding-left: 20px;
    color: white;
    font-size: 1rem;
}

</style>