// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
  },

  test: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
  },

  staging: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
