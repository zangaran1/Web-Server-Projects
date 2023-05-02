import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

export interface Workout {
    workoutId?: number;
    workoutUser?: string;
    workoutName?: string;
    excercise?: string;
    sets?: string;
    reps?: string;
    weight?: string;
    caloriesBurned?: string;
    duration?: string;
    date?: string;
}

export function getWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('workouts')

}

export function getWorkout(id: number): Promise<DataEnvelope<Workout>> {

    return api(`workouts/${id}`)

}

export function createWorkout(workout: Workout): Promise<DataEnvelope<Workout>> {
        return api('workouts', workout)
}