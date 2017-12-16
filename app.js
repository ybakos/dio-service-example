const express = require('express');
const app = express();

app.get('/', (req, res) => res.status(200).send());

app.get('/readings', (req, res) => {
  res.status(200).send();
});

app.post('/readings', (req, res) => {
  res.status(200).send();
});

let server = app.listen(process.env.PORT);

module.exports = server;
