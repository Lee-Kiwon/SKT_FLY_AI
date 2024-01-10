const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Connected to the database');

        const database = client.db('firstDB');
        const users = database.collection('users');

        //const userData = await users.insertOne({ name: 'noona', age: 17 });
        //console.log('Result', userData);
        // const userlist= [{name:'철수',age:30},{name:'jessica',age:25},{name:'세훈',age:25}]
        // const userListResult = await users.insertMany(userlist)
        // console.log('result',userListResult);

        // const findUser = await users.findOne({age:{$gt:20}});        
        // console.log("result",findUser);
    // const updateUser = await users.updateOne({name:'noona'},{$set:{age:18}});
    // console.log("fff",updateUser)
    // const deleteUsers=await users.deleteMany({age:{$gt:20}})
    // console.log("dddd",deleteUsers);
    const userData = await users.find({name:'noona'}).project({_id:0}).toArray();
    console.log("userdata",userData);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

run();

