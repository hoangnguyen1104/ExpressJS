// Update with your config settings.

module.exports = {


  development: {
    client: 'postgresql',
    connection: {
      database: 'knexjs_turorial',
      user:     'odoo',
      password: 'pass',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
