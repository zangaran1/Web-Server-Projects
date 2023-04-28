/*  B"H
*/

import { reactive } from "vue";
import { useRouter } from "vue-router";
import data from '../data/users.json';

const session = reactive({
    user: null as User | null,
})

export interface User {
    userID: number;
    name: string;
    username: string;
    email: string;
    password: string;
    age: number;
    image: string;
}

export function useSession() {
    return session;
}

export function login() {
    const router = useRouter();
    const user = data.users.find(user => user.username === "admin" && user.password === "admin");
    if (user) {
        session.user = user;
        router.push("/users");
    } else {
        alert("Invalid username or password");
    }
}

export function useLogout() {
    const router = useRouter();
    
    return function(){
        console.log({router});
        session.user = null;

        router.push("/login");
    }
}