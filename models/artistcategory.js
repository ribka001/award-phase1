'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtistCategory = sequelize.define('ArtistCategory', {
    CategoryId: DataTypes.INTEGER,
    ArtistId: DataTypes.INTEGER
  }, {});
  ArtistCategory.associate = function(models) {
    ArtistCategory.belongsTo(models.Artist)
    ArtistCategory.hasMany(models.Vote, {foreignKey: 'ArtistcategoryId'})
  };
  return ArtistCategory;
};