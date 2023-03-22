<script setup lang="ts">
import { ref } from "vue";
import { useSession, login } from "@/model/session";

const session = useSession();
</script>

<template>
    <div class="container">
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
                <tr v-if="session.user">
                    <td>{{ session.user.userId }}</td>
                    <td>{{ session.user.name }}</td>
                    <td>{{ session.user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
