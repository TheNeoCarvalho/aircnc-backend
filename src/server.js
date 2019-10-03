const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const router = require('./router');

mongoose.connect(
  'mongodb+srv://week6:week6@cluster0-pvlax.mongodb.net/aircnc?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(router);

app.listen(3003);
