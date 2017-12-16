// Test suite configuration
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

let chai = require('chai');
global.expect = chai.expect;
