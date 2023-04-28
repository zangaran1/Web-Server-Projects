<script setup lang="ts">
    import { useSession} from '@/model/session';

    import FriendsListView from '@/views/otherViews/FriendsListView.vue';
    import UserProfileView from '../views/otherViews/userProfileView.vue';
    import UserWelcomeBanner from './UserWelcomeBanner.vue';
    import DailyWeightTracker from './DailyWeightTracker.vue';


const session = useSession();
</script>

<template>
    <div class="section" v-if="session.user">
        <div class="user-profile-banner">
            <UserWelcomeBanner/>
        </div>
        <div class="weight-tracker-chart">
            <DailyWeightTracker/>
        </div>
    </div>
    
</template>

<style scoped>
    
    .section{
        margin: 0px;
        padding: 0px;
    }

</style>



