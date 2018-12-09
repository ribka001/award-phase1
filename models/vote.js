'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    UserId: DataTypes.INTEGER,
    ArtistcategoryId: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    Vote.belongsTo(models.ArtistCategory, {foreignKey: 'ArtistcategoryId'})
  };
  
  return Vote;
};