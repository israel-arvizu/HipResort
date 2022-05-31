'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenities = sequelize.define('Amenities', {
    resortId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    pictureUrl: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Amenities.associate = function(models) {
    Amenities.belongsTo(models.Resort, {foreignKey: 'resortId'})
  };
  return Amenities;
};
