const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/books');
const port = process.env.port || 3000;
const Book = require('./models/bookModel.js');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my nodemon API');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
