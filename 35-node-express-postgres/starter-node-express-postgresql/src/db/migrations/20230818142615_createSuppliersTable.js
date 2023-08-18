/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// up function: define what this migration is trying to do
// in this case, create the suppliers table
exports.up = function (knex) {
  // CREATE TABLE suppliers (
  return knex.schema.createTable('suppliers', table => {
    table.increments('supplier_id').primary();
    table.string('supplier_name');
    table.string("supplier_address_line_1");
    table.string("supplier_address_line_2");
    table.string("supplier_city");
    table.string("supplier_state");
    table.string("supplier_zip");
    table.string("supplier_phone");
    table.string("supplier_email");
    table.text("supplier_notes");
    table.string("supplier_type_of_goods");
    // add in our two timestamp columns
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// down function: define how to undo this migration
// in this case, drop the suppliers table
exports.down = function (knex) {
  return knex.schema.dropTable('suppliers');
};
