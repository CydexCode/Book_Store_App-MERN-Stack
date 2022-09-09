const express = require('express');
const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://bmmv:bmmv@cluster0bookshop.ieqjzjo.mongodb.net/modi?retryWrites=true&w=majority")


const app = express();
