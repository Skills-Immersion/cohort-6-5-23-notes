/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("product_id").primary(); // sets product_id as the primary key
    table.string("product_sku");
    table.string("product_title");
    table.text("product_description");
    table.decimal("product_price");
    table.integer("product_quantity_in_stock");
    table.decimal("product_weight_in_lbs");

    // in our products table
    // we're making a column called supplier_id
    table.integer("supplier_id").unsigned().notNullable();
    // supplier_id is a foreign key referencing the suppliers table
    table
      // supplier_id in this table
      .foreign("supplier_id")
      // is referencing supplier_id in another table
      .references("supplier_id")
      // specifically, in the suppliers table
      .inTable("suppliers")
      // if a supplier gets deleted, its products will also be deleted
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
