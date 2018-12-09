'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        category_name: 'Artist of the Year'
      },
      {
        category_name: 'Best Solo Singer'
      },
      {
        category_name: 'Best Group'
      },
      {
        category_name: 'Best Dance Performance'
      },
      {
        category_name: 'Best New Artist'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
