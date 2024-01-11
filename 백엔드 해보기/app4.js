const express = require('express');
const app = express();

const checkAuth = (req,res,next)=>{
    console.log("she has admin permission");
    next();
};

const checkToken =(req,res,next)=>{
    console.log("you have token")
    next();
};

// app.get("/about",(req,res) => {
    // res.send("This is all about hello noona world");
// }); 

const getUser = (req,res)=>{
    console.log("here is user info");
    res.send("here is user info");
}

app.get("/users",checkAuth,checkToken,getUser);

app.listen(4557,()=>{
    console.log("server is on 5000");
});