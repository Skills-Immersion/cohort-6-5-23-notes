const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;
console.log(DATABASE_URL);
/** 
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: DATABASE_URL,
    //tellink knex where to put migration files
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    //telling knex where to put seed files
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
  }
};
