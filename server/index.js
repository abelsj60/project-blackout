'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const volleyball = require('volleyball');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 1337;

// app.use(morgan('dev'));
app.use(volleyball);
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(PORT, () => {
  console.log('hey...');
  console.log('yeah?');
  console.log('i\'m listening on port', PORT);
});
