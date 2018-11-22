'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ArtistCategories', [
      {
        CategoryId: 1,
        ArtistId: 1
      },
      {
        CategoryId: 1,
        ArtistId: 3
      },
      {
        CategoryId: 1,
        ArtistId: 7
      },
      {
        CategoryId: 1,
        ArtistId: 9
      },
      {
        CategoryId: 1,
        ArtistId: 12
      },
      {
        CategoryId: 2,
        ArtistId: 6
      },
      {
        CategoryId: 2,
        ArtistId: 7
      },
      {
        CategoryId: 2,
        ArtistId: 8
      },
      {
        CategoryId: 2,
        ArtistId: 9
      },
      {
        CategoryId: 2,
        ArtistId: 10
      },
      {
        CategoryId: 3,
        ArtistId: 1
      },
      {
        CategoryId: 3,
        ArtistId: 2
      },
      {
        CategoryId: 3,
        ArtistId: 3
      },
      {
        CategoryId: 3,
        ArtistId: 4
      },
      {
        CategoryId: 3,
        ArtistId: 5
      },
      {
        CategoryId: 4,
        ArtistId: 1
      },
      {
        CategoryId: 4,
        ArtistId: 3
      },
      {
        CategoryId: 4,
        ArtistId: 4
      },
      {
        CategoryId: 4,
        ArtistId: 8
      },
      {
        CategoryId: 4,
        ArtistId: 12
      },
      {
        CategoryId: 5,
        ArtistId: 11
      },
      {
        CategoryId: 5,
        ArtistId: 12
      },
      {
        CategoryId: 5,
        ArtistId: 13
      },
      {
        CategoryId: 5,
        ArtistId: 14
      },
      {
        CategoryId: 5,
        ArtistId: 15
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ArtistCategories', null, {});
  }
};
