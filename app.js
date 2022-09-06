const express = require('express');
const { json } = require('body-parser');
const createMail = require('./routes/new');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
  next();
});

app.use(json());
app.use(createMail);

module.exports = app;
