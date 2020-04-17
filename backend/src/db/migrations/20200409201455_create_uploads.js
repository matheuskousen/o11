exports.up = function (knex) {
  return knex.schema.createTable("urls", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.integer("size").notNullable();
    table.string("key").notNullable();
    table.string("url").notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable();
};
