
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('readings').del()
    .then(function () {
      // Inserts seed entries
      return knex('readings').insert([
        {id: 1, sensorId: 42, attribute: 'SEED', value: 42.0},
        {id: 2, sensorId: 142, attribute: 'SEED', value: 142.0},
        {id: 3, sensorId: 242, attribute: 'SEED', value: 242.0}
      ]);
    });
};
