'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    UserId: DataTypes.INTEGER,
    ArtistcategoryId: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
    // Vote.hasMany(models.User)
    Vote.hasMany(models.ArtistCategory)
  };
  return Vote;
};