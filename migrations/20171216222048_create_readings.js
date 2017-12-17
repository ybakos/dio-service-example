
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('readings', function(t) {
    t.increments();
    t.integer('sensorId').notNullable();
    t.string('attribute').notNullable();
    t.float('value').notNullable();
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('readings');
};
