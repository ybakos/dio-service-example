const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const knex = require('knex')(require('./knexfile'));

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send());

app.get('/readings', (req, res) => {
  knex.select().from('readings').then(function(result) {
    res.json(result);
  });
});

app.post('/readings', (req, res) => {
  const body = req.body;
  res.status(200).send(body);
});

let server = app.listen(process.env.PORT);

module.exports = server;
