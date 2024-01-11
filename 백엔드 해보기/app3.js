// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//     },
//     password:{
//         type:String,
//     },
//     age:{
//         type: Number,
//     },
// });

// const User = mongoose.model("User",userSchema);

// const newUser = new User({name:'noona',
//                           email:'wrwqr1118@gmail.com',
//                           password:"12345",
//                           age:25});

// newUser.save().then((value)=>console.log("value is",value));

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test', { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
    name: 'noona',
    email: 'wrwqr1118@gmail.com',
    password: "12345",
    age: 25
});

newUser.save().then((value) => console.log("value is", value));
