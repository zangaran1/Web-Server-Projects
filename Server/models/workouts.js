const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'workouts';

const data = [
    {
        "workoutId": 1,
        "workoutUser": "Nicholas Zangara",
        "workoutName": "Push",
        "excercise": "Bench Press",
        "sets": "4",
        "reps": "10",
        "weight": "225",
        "caloriesBurned": "560",
        "duration": "60",
        "date": "2020-03-01"
    },
    {
        "workoutId": 2,
        "workoutUser": "Moshe Plotkin",
        "workoutName": "Pull",
        "excercise": "Deadlift",
        "sets": "4",
        "reps": "10",
        "weight": "585",
        "caloriesBurned": "790",
        "duration": "45",
        "date": "2020-03-05"
    },
    {
        "workoutId": 3,
        "workoutUser": "Mike Trout",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 4,
        "workoutUser": "Pete Alonso",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 5,
        "workoutUser": "Mike Trout",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 6,
        "workoutUser": "Nicholas Zangara",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 7,
        "workoutUser": "Nicholas Zangara",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 8,
        "workoutUser": "Mike Trout",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 9,
        "workoutUser": "Moshe Plotkin",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 10,
        "workoutUser": "Pete Alonso",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    },
    {
        "workoutId": 11,
        "workoutUser": "Nicholas Zangara",
        "workoutName": "Legs",
        "excercise": "Barbell Back Squat",
        "sets": "4",
        "reps": "5",
        "weight": "405",
        "caloriesBurned": "921",
        "duration": "53",
        "date": "2020-03-10"
    }
]
    
async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll(page = 1, pageSize = 30) {
    const col = await collection();
    const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return { items, total };
}

async function getWorkout(id) {
    const col = await collection();
    const item = await col.findOne({ _id: new ObjectId(id) });
    return item;
}

async function addWorkout(item) {
    const col = await collection();

    const result = await col.insertOne(item);

    item._id = result.insertedId;
    return item;
}

async function updateWorkout(item) {

    console.log(item);
    const col = await collection();
    const result = await col.findOneAndUpdate(
        { _id: new ObjectId(item.id) },
        { $set: item },
        { returnDocument: 'after' }
    );

    return result.value;
}

async function deleteWorkout(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}


async function seed() {
    const col = await collection();
    col.insertMany(data.workouts);
    return 'success';
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getAll,
    getWorkout,
    addWorkout,
    updateWorkout,
    deleteWorkout,
    seed
};