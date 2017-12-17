// Test suite configuration

require('dotenv').config({path: '.env.test'});

let chai = require('chai');
global.expect = chai.expect;

const knex = require('knex')(require('../knexfile'));
knex.migrate.latest();
knex.seed.run();