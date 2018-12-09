'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists', [
      {
        name: 'BTS'
      },
      {
        name: 'Big Bang'
      },
      {
        name: 'EXO'
      },
      {
        name: 'Blackpink'
      },
      {
        name: 'Girls\' Generation'
      },
      {
        name: 'Jay Park'
      },
      {
        name: 'IU'
      },
      {
        name: 'Sunmi'
      },
      {
        name: 'BoA'
      },
      {
        name: 'Eric Nam'
      },
      {
        name: 'JBJ'
      },
      {
        name: 'Wannaone'
      },
      {
        name: 'Stray Kids'
      },
      {
        name: 'Loona'
      },
      {
        name: 'NATURE'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {});
  }
};
