<script setup lang="ts">
import { ref } from "vue";
import { useSession, useLogin } from "@/model/session";
import { type User, getUsers} from "@/model/appUsers";

const session = useSession();

    const users = ref<User[]>([]);
        getUsers().then((data) => {
        users.value = data.data;
    });
</script>

<template>
    <div class="section">
        <div class="column is-half" v-if="session.user?.isAdmin === true">
            <table class="table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>username</th>
                        <th>password</th>
                        <th>isAdmin</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" v-if="session.user" >
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.password }}</td>
                        <td>{{ user.isAdmin }}</td>
                        <td><button class="button is-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container" id="accessD" v-else>
            <h1>Access Denied</h1>
        </div>
    </div>
    
</template>

<style scoped>  
    .section{
        align-items: center;
        justify-content: center;
        display: flex;
    }
    #accessD{
        margin-top: 5em;
        color: white;
    }
    #accessD h1{
        font-size: 3em;
        text-align: center;
    }
    .container{
        
    }
    .table{
        color: white;
    }
    .table thead{
        background-color: rgb(56, 56, 56);
    }
    .table th{
        color: hsl(204, 86%, 53%);
    }
    .table tbody{
        background-color: rgb(56, 56, 56);
    }
    .table td{
        color: hsl(204, 86%, 53%);
    }

</style>
