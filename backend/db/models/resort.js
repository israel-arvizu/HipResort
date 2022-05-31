'use strict';

module.exports = (sequelize, DataTypes) => {
  const Resort = sequelize.define('Resort', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    details: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        len: [3, 25]
      }
    },
    state: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        len: [3, 25]
      }
    },
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    imageUrl:{
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {});
  Resort.associate = function(models) {
    Resort.belongsTo(models.User, {foreignKey: 'host_id'})
    Resort.hasMany(models.Reservation, {foreignKey: 'resortId'})
    Resort.hasMany(models.Amenities, {foreignKey: 'resortId'})
  };
  return Resort;
};
