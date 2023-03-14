<script setup lang="ts">
import { useSession, login } from '@/model/session';

const session = useSession();
</script>

<template>
    <div class="section">
        <div class="columns">
        <div class="column is-one-quarter" id="first-card">
            <div class="card">
                <header class="card-header">
                <p class="card-header-title" id="card-title">
                    User Section 
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <aside class="menu">
                        <div class="menu-list">
                            <a>User Profile</a>
                            <a>Friends</a>
                            <a>Settings</a>
                            <a>Messages</a>
                            <a>Refer A Friend</a>
                            <a></a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
            
        </div>
        <div class="column is-half" id="middle-card">
            <header class="card-header">
                <p class="card-header-title">
                    Component
                </p>
            </header>
        </div>
        <div class="column is-one-quarter" id="third-card">
            <header class="card-header">
                <p class="card-header-title">
                    Component
                </p>
            </header>
        </div>
    </div>
</div>
    
</template>

<style scoped>
#middle-card, #first-card, #third-card{
    margin-top: 10px;
}
.columns{
    margin-top: 10px;
}

#card-title{
    background-color: teal;
    justify-content: center;
}
</style>
