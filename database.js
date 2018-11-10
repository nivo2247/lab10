var pgp = require('pg-promise')();
var dbConfig = process.env.DATABASE_URL;

/*const dbConfig = {
   host: 'localhost',
   port: 5432,
   database: 'lab6',
   user: 'postgres',
   password: 'postgres' // TODO: Fill in your PostgreSQL password here.
                // Use empty string if you did not set a password
};*/

var db = pgp(dbConfig);

module.exports = db;