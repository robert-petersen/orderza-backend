
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {
          roleId: 1, 
          role: 'admin'
        },
        {
          roleId: 2, 
          role: 'customer'
        },
      ]);
    });
};
