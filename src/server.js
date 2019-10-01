const express = require('express');
const mongoose = require('mongoose');

const router = require('./router');

mongoose.connect('mongodb+srv://week6:week6@cluster0-pvlax.mongodb.net/aircnc?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();

app.use(express.json());
app.use(router);

app.listen(3003);
