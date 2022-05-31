'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    resortId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    confirmationNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, {foreignKey: 'userId'})
    Reservation.belongsTo(models.Resort, {foreignKey: 'resortId'})
  };
  return Reservation;
};
