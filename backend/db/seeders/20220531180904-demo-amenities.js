'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Amenities', [
        {
          resortId: '2',
          name: 'Cycling',
          pictureUrl: 'https://toppng.com/uploads/preview/cycling-cyclist-png-clipart-cycli-11563076712v1zlvdbd0g.png'
        },
        {
          resortId: '2',
          name: 'Hiking',
          pictureUrl: 'https://www.pinclipart.com/picdir/middle/405-4056342_hike-clipart-transparent-hiking-clipart-png-download.png'
        },
        {
          resortId: '2',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
        {
          resortId: '2',
          name: 'Spa Access',
          pictureUrl: 'https://flyclipart.com/thumb2/popular-and-trending-spa-stickers-339999.png'
        },
        {
          resortId: '1',
          name: 'Cycling',
          pictureUrl: 'https://toppng.com/uploads/preview/cycling-cyclist-png-clipart-cycli-11563076712v1zlvdbd0g.png'
        },
        {
          resortId: '1',
          name: 'Hiking',
          pictureUrl: 'https://www.pinclipart.com/picdir/middle/405-4056342_hike-clipart-transparent-hiking-clipart-png-download.png'
        },
        {
          resortId: '1',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
        {
          resortId: '1',
          name: 'Spa Access',
          pictureUrl: 'https://flyclipart.com/thumb2/popular-and-trending-spa-stickers-339999.png'
        },
        {
          resortId: '3',
          name: 'Cycling',
          pictureUrl: 'https://toppng.com/uploads/preview/cycling-cyclist-png-clipart-cycli-11563076712v1zlvdbd0g.png'
        },
        {
          resortId: '3',
          name: 'Hiking',
          pictureUrl: 'https://www.pinclipart.com/picdir/middle/405-4056342_hike-clipart-transparent-hiking-clipart-png-download.png'
        },
        {
          resortId: '3',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
        {
          resortId: '3',
          name: 'Spa Access',
          pictureUrl: 'https://flyclipart.com/thumb2/popular-and-trending-spa-stickers-339999.png'
        },
        {
          resortId: '4',
          name: 'Cycling',
          pictureUrl: 'https://toppng.com/uploads/preview/cycling-cyclist-png-clipart-cycli-11563076712v1zlvdbd0g.png'
        },
        {
          resortId: '4',
          name: 'Hiking',
          pictureUrl: 'https://www.pinclipart.com/picdir/middle/405-4056342_hike-clipart-transparent-hiking-clipart-png-download.png'
        },
        {
          resortId: '5',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
        {
          resortId: '5',
          name: 'Spa Access',
          pictureUrl: 'https://flyclipart.com/thumb2/popular-and-trending-spa-stickers-339999.png'
        },
        {
          resortId: '6',
          name: 'Cycling',
          pictureUrl: 'https://toppng.com/uploads/preview/cycling-cyclist-png-clipart-cycli-11563076712v1zlvdbd0g.png'
        },
        {
          resortId: '6',
          name: 'Hiking',
          pictureUrl: 'https://www.pinclipart.com/picdir/middle/405-4056342_hike-clipart-transparent-hiking-clipart-png-download.png'
        },
        {
          resortId: '6',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
        {
          resortId: '6',
          name: 'Spa Access',
          pictureUrl: 'https://flyclipart.com/thumb2/popular-and-trending-spa-stickers-339999.png'
        },
        {
          resortId: '7',
          name: 'Cycling',
          pictureUrl: 'https://toppng.com/uploads/preview/cycling-cyclist-png-clipart-cycli-11563076712v1zlvdbd0g.png'
        },
        {
          resortId: '7',
          name: 'Hiking',
          pictureUrl: 'https://www.pinclipart.com/picdir/middle/405-4056342_hike-clipart-transparent-hiking-clipart-png-download.png'
        },
        {
          resortId: '7',
          name: 'Beach Access',
          pictureUrl: 'https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_28-512.png'
        },
        {
          resortId: '7',
          name: 'Spa Access',
          pictureUrl: 'https://flyclipart.com/thumb2/popular-and-trending-spa-stickers-339999.png'
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Amenities', null, {});
  }
};
