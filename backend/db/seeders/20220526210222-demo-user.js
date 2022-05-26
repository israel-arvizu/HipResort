'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password', 10)
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2', 10)
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3', 10)
      },
      {
        email: 'user3@user.io',
        username: 'MrBrightSide',
        hashedPassword: bcrypt.hashSync('password4', 10)
      },
      {
        email: 'user4@user.io',
        username: 'JohnAdam',
        hashedPassword: bcrypt.hashSync('password5', 10)
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'MrBrightSide', 'JohnAdam'] }
    }, {});
  }
};
