// connection to banco de base
const knex = require("knex");
const configuration = require("../../knexfile");
const connection = knex(configuration.development);

module.exports = connection;
