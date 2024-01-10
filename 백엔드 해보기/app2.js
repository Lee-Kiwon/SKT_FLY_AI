const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Connected to the database');

        const database = client.db('firstDB');
        const users = database.collection('students');
        // const userlist = [
        //     { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("2020-01-05") },
        //     { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("2020-01-05") },
        //     { _id: 3, test1: 95, test2: 110, modified: new Date("2020-01-04") }        ];
        // const userListResult = await users.insertMany(userlist)
        // const userData = await users.insertOne({ item: 'canvas', qty:100, tags: ['cotton'], size: {h:28,w:35.5,uom:'cm'} });
        // console.log('Result', userData);
        //   const userlist= [{ item: 'journal', qty:25, tags:['blacnk','red'],size: {h:14,w:21,uom:'cm'},},
        //                    { item: 'mat', qty:85, tags:['gray'], size: {h:27.9,w:25.5,uom:'cm'} },
        //                    { item: 'mousepad',tags:['gel','blue'], qty:25, size: {h:19,w:22.85,uom:'cm'}}]
        //   const userListResult = await users.insertMany(userlist)
        //  console.log('result',userListResult);
         
        // const userlist= [{ item: 'journal', qty:25, size: {h:14,w:21,uom:'cm'},status:'A'},
        //                  { item: 'notebook', qty:50,size: {h:8.5,w:11,uom:'in'},status:'A' },
        //                  { item: 'paper', qty:25, size: {h:8.5,w:11,uom:'in'},status:'D'},
        //                  { item: 'planner', qty:75, size: {h:22.85,w:30,uom:'cm'},status:'D'},
        //                  { item: 'postcard', qty:45, size: {h:10,w:15.25,uom:'cm'},status:'A'}]
        // const userListResult = await users.insertMany(userlist)
        // console.log('result',userListResult);         
        //  const userdata = await database.collection('inventory').find({ status: 'A'}, {qty: { $lt: 30 }}).toArray();
        //  console.log("result", userdata);
        // const userdata = await database.collection('inventory').find({'size.h': {$gt:10}}).toArray();
        // console.log("result", userdata);
    // const updateUser = await users.updateMany({},[{$set:{status:'Modified',test1:0}}]);
    // console.log("update1",updateUser)
    // const deleteUsers=await users.deleteMany({age:{$gt:20}})
    // console.log("dddd",deleteUsers);
    // const userData = await users.find({name:'noona'}).project({_id:0}).toArray();
    // console.log("userdata",userData);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

run();
