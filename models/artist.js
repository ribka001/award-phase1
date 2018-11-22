'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    Artist.belongsTo(models.ArtistCategory)
  };
  return Artist;
}