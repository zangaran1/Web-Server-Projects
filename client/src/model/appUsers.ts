import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api, useSession } from "./session";

export interface User {
    name: string;
    username: string;
    email: string;
    password?: string;
    age: number;
    image?: string;
    bio?: string;
    friends?: string[];
    token?: string;
    isAdmin?: boolean;
}

export function getUsers(): Promise<DataListEnvelope<User>> {

    return api('users')

}

export function getUser(id: number): Promise<DataEnvelope<User>> {

    return api(`users/${id}`)

}

export function createUser(user: User): Promise<DataEnvelope<User>> {
    return api('users', user)
}
export function deleteItem(id: string): Promise<DataEnvelope<User>> {
    return api(`users/${id}`, {method: 'DELETE'})
}
export async function search(query: string) {
    const session = useSession();
    const results = await api(`users/search/${query}`)
    return results.data
}

