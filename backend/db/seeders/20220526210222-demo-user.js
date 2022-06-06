'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        name: 'Demo Guy',
        hashedPassword: bcrypt.hashSync('password', 10),
        bio: 'I like to demolish stuff and be a nice guy overall',
        nationality: 'American'
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        name: 'Fake Guy 1',
        hashedPassword: bcrypt.hashSync('password2', 10),
        bio: 'I am a fake user so I dont really get alot of recognition',
        nationality: 'Mexican'
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        name: 'Fake Guy 2',
        hashedPassword: bcrypt.hashSync('password3', 10),
        bio: 'I am a fake user also but I get more recognition',
        nationality: 'American'
      },
      {
        email: 'user3@user.io',
        username: 'MrBrightSide',
        name: 'Fake Guy 3',
        hashedPassword: bcrypt.hashSync('password4', 10),
        bio: 'I believe I am not a fake user but a great one!',
        nationality: 'Canadian'
      },
      {
        email: 'user4@user.io',
        username: 'JohnAdam',
        name: 'Fake Guy 4',
        hashedPassword: bcrypt.hashSync('password5', 10),
        bio: 'Hello, I want to help you be a better person',
        nationality: 'Albanian'
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
