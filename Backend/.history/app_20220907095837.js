const express = require('express');
const mongoose = require('mongoose');


const app = express();

//middleware
app.use("/", (req, res, next) => {
    res.send("This is our starting app");
});

mongoose.connect("mongodb+srv://bmmv:bmmv@cluster0bookshop.ieqjzjo.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log('DB connected'))
.then(() =>{
    app.listen(5000);
 }).catch((err) => console.log(err));

