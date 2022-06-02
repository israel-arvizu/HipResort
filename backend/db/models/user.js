'use strict';
'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name:
    {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nationality:
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'name', 'bio', 'natioality', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
      attributes: { exclude: ['hashedPassword'] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });

  User.prototype.toSafeObject = function() {
    const { id, username, name, email, bio, nationality } = this; // context will be the User instance
    return { id, username, name, email, bio, nationality };
  }

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  }

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  }

  User.signup = async function ({ email, username, name, bio, nationality, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      name,
      bio,
      nationality,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  }

  User.associate = function(models) {
    User.hasMany(models.Resort, {foreignKey: 'host_id'})
    User.hasMany(models.Reservation, {foreignKey: 'userId'})
  };
  return User;
};
