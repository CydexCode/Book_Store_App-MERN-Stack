const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/books", router)//localhost:5000/books


mongoose.connect("mongodb+srv://bmmv:bmmv@cluster0bookshop.ieqjzjo.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log('DB connected'))
.then(() =>{
    app.listen(5000);
 }).catch((err) => console.log(err));

