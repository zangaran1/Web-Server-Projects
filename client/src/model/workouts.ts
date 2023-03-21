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
    date: string;
}

export function getWorkouts(): Workout[] {
    return data.myworkouts;
}

export function addWorkout(workout: Workout): void {
    data.myworkouts.push(workout);
}
export function deleteWorkout(workoutId: number): void {
    data.myworkouts = data.myworkouts.filter(w => w.workoutId !== workoutId);
}

