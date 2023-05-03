import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

export interface AppUser {
    userId: number;
    name: string;
    username: string;
    email: string;
    password?: string;
    age: number;
    image?: string;
    bio?: string;
    friends?: string[];
}

export function getUsers(): Promise<DataListEnvelope<AppUser>> {

    return api('users')

}

export function getUser(id: number): Promise<DataEnvelope<AppUser>> {

    return api(`users/${id}`)

}

export function createWorkout(user: AppUser): Promise<DataEnvelope<AppUser>> {
        return api('users', user)
}