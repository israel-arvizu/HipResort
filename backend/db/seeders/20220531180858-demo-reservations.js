'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reservations', [
        {
          userId: 3,
          resortId: 1,
          startDate: '2022-07-20',
          endDate: '2022-07-22',
          confirmationNumber: 202207223
        },
        {
          userId: 4,
          resortId: 3,
          startDate: '2022-06-18',
          endDate: '2022-07-24',
          confirmationNumber: 202206184
        },
        {
          userId: 1,
          resortId: 2,
          startDate: '2022-10-05',
          endDate: '2022-10-10',
          confirmationNumber: 202210051
        },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reservations', null, {});
  }
};
