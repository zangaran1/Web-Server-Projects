const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'journals';

const data = [
    {
        "id": 1,
        "owner": "nzangara",
        "bodyWeight": 195,
        "caloriesEaten": 2253,
        "date": 2023-03-05,
        "entryContent": " Today's workout felt pretty good overall. My squats and bench press were stronger than last week, and I was able to increase the weight on my bent-over rows as well. Shoulder press was a bit of a challenge, but I managed to get through it. My bicep curls and tricep extensions were pretty standard, but I think I could push myself to increase the weight next time. Looking forward to seeing more progress in the coming weeks."
    },
    {
        "id": 2,
        "owner": "nzangara",
        "bodyWeight": 193,
        "caloriesEaten": 2578,
        "date": 2023-04-05,
        "entryContent": " Today's workout was focused on chest and back exercises. Started off with chest press, which felt pretty good. Was able to maintain good form throughout all four sets and increase the weight a little from last week. Moved on to cable flys next, which I haven't done in a while. Took some time to get the hang of it again, but was able to complete all three sets with good form. Incline press was a bit of a challenge, especially on the third set. Had to drop the weight a little to maintain good form, but still felt like I got a good burn in my upper chest. For back exercises, did dumbbell rows and lat pulldowns. Felt like my form was a little off on the first set of dumbbell rows, but was able to correct it and complete all four sets with good form. Lat pulldowns felt pretty good overall, but could have pushed myself a little harder on the last set. Finished off the workout with some bicep curls. Used the barbell instead of dumbbells for a change of pace. Felt pretty good, but could have probably gone a little heavier. Overall, felt like I got a good workout in and am looking forward to seeing progress in the coming weeks."
    },
    {
        "id": 3,
        "owner": "jewpaltz",
        "bodyWeight": 185,
        "caloriesEaten": 1754,
        "date": 2023-02-05,
        "entryContent": "Focused on helping a ton of the kids in office hours today. Im happy that I got to the gym around 5pm and was able to get a good deadlift session in!"
    },
    {
        "id": 4,
        "owner": "p_alonso",
        "bodyWeight": 255,
        "caloriesEaten": 3549,
        "date": 2023-02-05,
        "entryContent": "Today's workout was focused on maintaining my skills and strength as a professional baseball player. Started with batting practice, which felt pretty good. Worked on my timing and approach to the plate, making sure to stay balanced and focused."
    },
    {
        "id": 5,
        "owner": "mtrout27",
        "bodyWeight": 255,
        "caloriesEaten": 3549,
        "date": 2023-02-05,
        "entryContent": "Today's workout was focused on maintaining my skills and strength as a professional baseball player. Started with batting practice, which felt pretty good. Worked on my timing and approach to the plate, making sure to stay balanced and focused."
    },
    {
        "id": 6,
        "owner": "tatiana2117",
        "bodyWeight": 135,
        "caloriesEaten": 1548,
        "date": 2023-02-05,
        "entryContent": "Today was a good day. I went to the gym early in the morning because I had 3 classes in the afternoon. I ate very clean today also. I had 2 salads and a bunch of grilled chicken."
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

async function getJournal(id) {
    const col = await collection();
    const item = await col.findOne({ _id: new ObjectId(id) });
    return item;
}

async function addJournal(item) {
    const col = await collection();

    const result = await col.insertOne(item);

    item._id = result.insertedId;
    return item;
}

async function updateJournal(item) {

    console.log(item);
    const col = await collection();
    const result = await col.findOneAndUpdate(
        { _id: new ObjectId(item.id) },
        { $set: item },
        { returnDocument: 'after' }
    );

    return result.value;
}

async function deleteJournal(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}


async function seed() {
    const col = await collection();
    col.insertMany(data.journals);
    return 'success';
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getAll,
    getJournal,
    addJournal,
    updateJournal,
    deleteJournal,
    seed
};