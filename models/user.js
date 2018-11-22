'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    salt: DataTypes.STRING,
  }, {
    hooks:{
      beforeCreate(User) {
        const saltRounds = 10
        User.password = bcrypt.hashSync(User.password,saltRounds)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  // User.readEncrypt = function(input,password) {
    // return bcrypt.compareSync(input,password)
  // }
  return User;
};