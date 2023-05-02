<script setup lang="ts">
import { ref } from "vue";
import { useSession, useLogin } from "@/model/session";
import data from "@/data/users.json";

const session = useSession();
const users = ref(data.users);
</script>

<template>
    <div class="container" v-if="session.user">
        <table class="table">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>total Workouts</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.userID" v-if="session.user">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
