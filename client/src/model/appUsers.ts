import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

export interface User {
    userId: number;
    name: string;
    username: string;
    email: string;
    password?: string;
    age: number;
    image?: string;
    bio?: string;
    friends?: string[];
    token?: string;
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

