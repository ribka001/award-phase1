'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtistCategory = sequelize.define('ArtistCategory', {
    CategoryId: DataTypes.INTEGER,
    ArtistId: DataTypes.INTEGER
  }, {});
  ArtistCategory.associate = function(models) {
    ArtistCategory.hasMany(models.Artist)

    // ArtistCategory.hasMany(models.Category)
    // ArtistCategory.hasMany(models.Vote)
  };
  return ArtistCategory;
};