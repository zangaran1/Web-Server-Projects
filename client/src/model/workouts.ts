import data from '../data/myworkouts.json'

export interface Workout {
    workoutId: number;
    workoutUser: string;
    workoutName: string;
    excercise: string;
    sets: string;
    reps: string;
    weight: string;
    caloriesBurned: string;
    duration: string;
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
export function getWorkoutUsers(): string[] {
    return data.myworkouts.map(w => w.workoutUser);
}
// get most recent workout in the list

export function getMostRecentWorkout(): Workout {
    return data.myworkouts[data.myworkouts.length - 1];
}






