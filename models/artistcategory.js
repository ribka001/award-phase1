'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtistCategory = sequelize.define('ArtistCategory', {
    CategoryId: DataTypes.INTEGER,
    ArtistId: DataTypes.INTEGER
  }, {});
  ArtistCategory.associate = function(models) {
    // associations can be defined here
    ArtistCategory.hasMany(models.Category)
    ArtistCategory.hasMany(models.Artist)
  };
  return ArtistCategory;
};