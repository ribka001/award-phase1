'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email:{type:DataTypes.STRING,
    validate:{
      isEmail:{
        args:true,
        msg:"input must be an email"
      }
    }
    },
    password:{type:DataTypes.STRING,
      validate:{
        len:{
          args:[4,10],
          msg:"length beetween 4 and 10"
        }
      }
    },
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
    User.hasMany(models.Vote)
  };

  User.isUniqueEmail = function(input) {
    return new Promise(function(resolve,reject) {
      User.findOne({where:{
        email:input
      }})
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  User.prototype.codeName = function() {
    return `${this.username} ${this.email}`
  }
  // User.readEncrypt = function(input,password) {
    // return bcrypt.compareSync(input,password)
  // }
  return User;
};