<script setup lang="ts">
    import { useSession} from '@/model/session';
    import data from '@/data/users.json';

    import FriendsListView from '@/views/otherViews/FriendsListView.vue';
    import UserProfileView from '../views/otherViews/userProfileView.vue';

    const session = useSession();
    const users = data.users;
</script>

<template>
    
    <div class="top-banner" v-if="session.user">
        <div class="banner">
            <div class="user-profile-picture">
                <img id="profile-pic" :src="session.user.image" alt="Profile Picture">
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
    justify-content: center;
    
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
.user-profile-picture{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgb(44, 44, 44);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 1px solid hsl(204, 86%, 53%);
}

</style>