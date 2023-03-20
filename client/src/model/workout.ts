import { reactive, computed, ref } from "vue";
import { useRouter } from "vue-router";

const userWorkouts = ref([] as WorkoutItem[]);

export function useWorkouts(){
    return userWorkouts;
}

export interface WorkoutItem{
    workoutID: string
    workoutName: string
    workoutType: string
    excercise: string
    sets: number
    reps: number
    weight: number
    caloriesBurned: number
    duration: number
    distance: number
    pace: number
    description: string
}

export function addWorkout(workoutName: string){
    
}