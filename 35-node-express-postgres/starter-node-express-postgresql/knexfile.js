// Update with your config settings.
// this file is basically the same every time, until we get more complicated with more environments
require('dotenv').config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  },
};