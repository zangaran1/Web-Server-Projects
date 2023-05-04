//const data = require('../data/workouts.json');
const jwt = require('jsonwebtoken');
const { connect, ObjectId } = require('./mongo');


const COLLECTION_NAME = 'users';

const data = [
    {
        "name": "Nicholas Zangara",
        "username": "nzangara",
        "email": "nzangara25@gmail.com",
        "password": "password",
        "age": 21,
        "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
        "bio": "I am a senior at SUNY New Paltz majoring in Computer Science. I am a huge Mets fan and I love to play video games. I am also a huge fan of the New York Jets and New York Knicks.",
        "friends": ["jewpaltz", "p_alonso", "mtrout27"],
        "isAdmin": true
    },
    {
        "name": "Moshe Plotkin",
        "username": "jewpaltz",
        "email": "jewpaltz@newpaltz.edu",
        "password": "password",
        "age": 35,
        "image": "https://robohash.org/autemquasiqui.png?size=50x50&set=set1",
        "bio": "",
        "friends": ["nzangara", "p_alonso", "mtrout27"],
        "isAdmin": true
    },
    {
        "name": "Pete Alonso",
        "username": "p_alonso",
        "email": "alonsop@gmail.com",
        "password": "password",
        "age": 27,
        "image": "https://robohash.org/autemquasiqui.png?size=50x50&set=set1",
        "bio": "I am a professional baseball player for the New York Mets. I am a huge fan of the New York Jets and New York Knicks.",
        "friends": ["nzangara", "jewpaltz", "mtrout27"],
        "isAdmin": false
    },
    {
        "name": "Mike Trout",
        "username": "mtrout27",
        "email": "trouty27@gmail.com",
        "password": "password",
        "age": 30,
        "image": "https://robohash.org/autemquasiqui.png?size=50x50&set=set1",
        "bio": "I am a professional baseball player for the Los Angeles Angels. I am a huge fan of the New York Jets and New York Knicks.",
        "friends": ["nzangara", "jewpaltz", "p_alonso"],
        "isAdmin": false
    },
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

async function getById(id) {
    const col = await collection();
    const item = await col.findOne({ _id: new ObjectId(id) });
    return item;
}

async function add(item) {
    const col = await collection();

    const result = await col.insertOne(item);

    item._id = result.insertedId;
    return item;
}

async function update(item) {

    console.log(item);
    const col = await collection();
    const result = await col.findOneAndUpdate(
        { _id: new ObjectId(item.id) },
        { $set: item },
        { returnDocument: 'after' }
    );

    return result.value;
}

async function deleteItem(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}

async function search(searchTerm, page = 1, pageSize = 30) {
    const col = await collection();
    const query = {
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { email: { $regex: searchTerm, $options: 'i' } },
        ]
    };

    const items = await col.find(query).skip((page - 1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { items, total };
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data);
    return result.insertedCount;
}

async function login(email, password) {
    const col = await collection();
    const user = await col.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    if (user.password !== password) {
        throw new Error('Invalid password');
    }

    const cleanUser = { ...user, password: undefined };
    const token = await generateTokenAsync(cleanUser, '1d');

    return { user: cleanUser, token };
}

async function oAuthLogin(provider, accessToken) {
    // validate the access token
    // if valid, return the user 
    // if not, create a new user
    // return the user
}

function generateTokenAsync(user, expiresIn) {
    return new Promise( (resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET ?? "", { expiresIn }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function verifyTokenAsync(token) {
    return new Promise( (resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}



module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteItem,
    search,
    seed,
    login,
    oAuthLogin,
    generateTokenAsync,
    verifyTokenAsync,
};