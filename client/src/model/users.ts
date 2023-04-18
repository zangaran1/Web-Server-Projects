import data from '../data/users.json'

export interface User {
    userID: number;
    name: string;
    username: string;
    email: string;
    password: string;
    age: number;
}

export function getUsers(): User[] {
    return data.users;
}