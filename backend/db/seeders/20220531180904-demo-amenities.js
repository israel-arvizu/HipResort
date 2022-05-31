'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Amenities', [
        {
          resortId: '2',
          name: 'Cycling',
          pictureUrl: 'https://cdn.shopify.com/s/files/1/2992/7324/products/CC0734_469a45b1-c0a3-43c8-8024-91a42d5036e0_350x350.jpg?v=1535479698'
        },
        {
          resortId: '2',
          name: 'Hiking',
          pictureUrl: 'https://t3.ftcdn.net/jpg/01/36/16/84/360_F_136168442_FqmOZ1T7PGQzyNe8t260dzazcre2QKQV.jpg'
        },
        {
          resortId: '2',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
        {
          resortId: '1',
          name: 'Cycling',
          pictureUrl: 'https://cdn.shopify.com/s/files/1/2992/7324/products/CC0734_469a45b1-c0a3-43c8-8024-91a42d5036e0_350x350.jpg?v=1535479698'
        },
        {
          resortId: '1',
          name: 'Hiking',
          pictureUrl: 'https://t3.ftcdn.net/jpg/01/36/16/84/360_F_136168442_FqmOZ1T7PGQzyNe8t260dzazcre2QKQV.jpg'
        },
        {
          resortId: '3',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Amenities', null, {});
  }
};
