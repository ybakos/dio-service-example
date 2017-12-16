const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send());

app.get('/readings', (req, res) => {
  res.status(200).send();
});

app.post('/readings', (req, res) => {
  const body = req.body;
  res.status(200).send(body);
});

let server = app.listen(process.env.PORT);

module.exports = server;
