require("dotenv").config();
const pg = require("pg");

const localPgConnection = {
  host: "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: false,
  database: "journal",
  charset: "utf8"
};

const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {

  development: {
    client: "pg",
    connection: localPgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations"
    }
  },

  production: {
    client: "pg",
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations"
    }
  }

};