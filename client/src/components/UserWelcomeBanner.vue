<script setup lang="ts">
    import { useSession} from '@/model/session';
    import data from '@/data/users.json';
    import type { User } from '@/model/appUsers';
    import { ref } from 'vue';

    import FriendsListView from '@/views/otherViews/FriendsListView.vue';
    import UserProfileView from '../views/otherViews/userProfileView.vue';

    const session = useSession();
    const users = data.users;
    const friendsCount = session.user!.friends?.length;

</script>

<template>
    
    <div class="username-header" v-if="session.user">
        <h1>@{{session.user.username}}</h1>
    </div>
    <div class="top-banner" v-if="session.user">
        <div class="banner">
            <div class="user-profile-picture">
                <img id="profile-pic" :src="session.user.image" alt="Profile Picture">
            </div>
            <div class="user-credentials">
                <div class="posts-box">
                    <p>Total Posts: 3</p>
                </div>  
                <div class="total-workouts-box">
                    <p>Total Workouts: 3</p>
                </div>
            
                <div class="following-box">
                    <p>Following: {{ friendsCount }}</p>
                </div>
                <div class="followers-box">
                    <p>Followers: {{ friendsCount }}</p>
                </div>              
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
    width: 100%;
}
.banner{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    
}
.user-credentials{
    width: 100%;
    display: flex;
    flex-direction: row;

}


.user-profile-picture{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    margin: 10px;
    padding: 5px;
    width: 120px;
    height: 100px;
    border: 5px solid hsl(204, 86%, 53%);
}
.posts-box, .total-workouts-box, .following-box, .followers-box{
    background-color: rgb(56, 56, 56);
    border-radius: 20px;
    padding: 5px;
    margin: 15px;
    align-items: center;
    justify-content: center;
    color: white;
}
.posts-box p, .total-workouts-box p, .following-box p, .followers-box p{
    padding: .5rem;
}
.username-header{
    font-size: 2rem;
    text-align: center;
    color: white;
}
.username-header h1{
    background-color: rgb(56, 56, 56);
    width: 50%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    margin-top: 25px;
    font-weight: 500;
}
</style>