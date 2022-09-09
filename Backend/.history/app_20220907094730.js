const express = require('express');
const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://bmmv:bmmv@cluster0bookshop.ieqjzjo.mongodb.net/bookStore?retryWrites=true&w=majority")


const app = express();
