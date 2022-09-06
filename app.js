const express = require('express');
const { json } = require('body-parser');
const createMail = require('./routes/new');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.use(json());
app.use(createMail);

module.exports = app;
