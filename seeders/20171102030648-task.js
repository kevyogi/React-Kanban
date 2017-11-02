'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('tasks', [{
      title: 'Learn React',
      createdAt: new Date(),
      updatedAt: new Date(),
      priority_id: 1,
      status_id: 1,
      createdBy_id: 1,
      assignedTo_id: 1
    }, {
      title: 'Learn Redux',
      createdAt: new Date(),
      updatedAt: new Date(),
      priority_id: 2,
      status_id: 2,
      createdBy_id: 2,
      assignedTo_id: 2
    }, {
      title: 'Learn Thunk',
      createdAt: new Date(),
      updatedAt: new Date(),
      priority_id: 3,
      status_id: 3,
      createdBy_id: 1,
      assignedTo_id: 1
    }], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
