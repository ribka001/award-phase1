'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn(
        'Categories',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Categories',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Artists',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Artists',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'ArtistCategories',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'ArtistCategories',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Votes',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Votes',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Users',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Users',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn(
        'Categories',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Categories',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Artists',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Artists',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'ArtistCategories',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'ArtistCategories',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      ),
      queryInterface.changeColumn(
        'Votes',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Votes',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Users',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Users',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      )
    ]
  }
};
