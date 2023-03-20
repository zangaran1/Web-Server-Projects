import data from '../data/myworkouts.json'

export interface Workout {
    workoutId: number;
    workoutName: string;
    excercise: string;
    sets: number;
    reps: number;
    weight: number;
    caloriesBurned: number;
    duration: number;
    distance: number;
    pace: number;
    description: string;
}

export function getWorkouts(): Workout[] {
    return data.myworkouts;
}