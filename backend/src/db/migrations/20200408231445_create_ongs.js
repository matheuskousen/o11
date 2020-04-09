exports.up = function (knex) {
  return knex.schema.createTable("ong", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.foreign("name").references("url").inTable("urls");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("ong");
};
