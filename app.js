const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(200).send());

app.get('/readings', (req, res) => {
  res.status(200).send();
});

let server = app.listen(3000);

module.exports = server;
