if (process.env.NODE_ENV == 'development') {
  require('dotenv').config({path: '.env'});
} else if (process.env.NODE_ENV == 'test') {
  require('dotenv').config({path: '.env.test'});
}

module.exports = {
  client: 'mysql',
  connection: process.env.DATABASE_URL,
};
