// Test suite configuration

require('dotenv').config({path: '.env.test'});

let chai = require('chai');
global.expect = chai.expect;

const knexCleaner = require('knex-cleaner');
const knex = require('knex')(require('../knexfile'));

knexCleaner.clean(knex).then(function() {
  knex.migrate.latest();
  knex.seed.run();
});
