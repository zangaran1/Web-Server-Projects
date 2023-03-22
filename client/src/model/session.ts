/*  B"H
*/

import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
    user: null as User | null,
})

interface User {
    userId?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
}

export function useSession() {
    return session;
}

export function login() {
    session.user = {
        name: "Nicholas Zangara",
        email: "nzangara25@gmail.com",
        userId: 1,
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