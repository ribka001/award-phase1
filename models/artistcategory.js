'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtistCategory = sequelize.define('ArtistCategory', {
    CategoryId: DataTypes.INTEGER,
    ArtistId: DataTypes.INTEGER
  }, {});
  ArtistCategory.associate = function(models) {
    ArtistCategory.belongsTo(models.Artist)
    ArtistCategory.belongsTo(models.Category)

    // ArtistCategory.hasMany(models.Vote)
  };
  return ArtistCategory;
};