const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect("mongodb+srv://bmmv:bmmv@cluster0bookshop.ieqjzjo.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log('DB connected'))
.then(() =>{
    app.listen(5000);
 }).catch((err) => console.log(err));

