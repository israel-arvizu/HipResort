'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Resorts', [
      {
        name: 'South Coast Winery Resort & Spa',
        price: 189.99,
        capacity: 4,
        details: 'This secluded upscale hotel set in a vineyard is 6.3 miles from the Temecula Valley Highway, and 18.4 miles from the Santa Margarita Ecological Reserve. Plush suites feature fireplaces, minifridges and private patios with sitting areas. Standalone villas add Jacuzzis, balconies (some with vineyard views) and wet bars. A resort fee covers in-room Wi-Fi, turndown service and hot drinks.',
        city: 'Temecula',
        state: 'California',
        host_id: 1,
        longitude: -117.05385076356228,
        latitude: 33.53412369965727,
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMf7OknQPC2N_u8QFhcgZUST_ArPWwdKO18Bbtm=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'Bahia Resort Hotel',
        price: 241,
        capacity: 6,
        details: 'Set on Mission Bay, this relaxed resort is a 12-minute walk from Belmont Park and 2.2 miles from SeaWorld San Diego. The simple, traditional rooms offer flat-screen TVs and free Wi-Fi, along with coffeemakers and minifridges. Some have beach or garden views. Suites add kitchenettes and dining tables, as well as sitting areas and bay views. Room service is available.',
        city: 'San Diego',
        state: 'California',
        host_id: 4,
        longitude: -117.24671535425585,
        latitude: 32.772335824409815,
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPtez71VKilzhucZUzDSgFk3AEY2z8ZWq5ufc1s=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'Icicle Village Resort',
        price: 131.95,
        capacity: 4,
        details: 'Off Route 2 and adjacent to the Icicle Junction Activities Center, this laid-back resort is an 8-minute walk from Enchantment Park and a mile from Leavenworth Golf Club. The warmly decorated rooms feature flat-screen TVs, free Wi-Fi, minifridges and microwaves. Suites add sitting areas with pull-out sofas. Some have fireplaces, Jacuzzi tubs and/or balconies. Free hot breakfast is provided. Dining options include a casual restaurant with terrace seating and a sports bar. Theres a full-service spa, an outdoor pool and a hot tub. Other features include a fitness room, a mini-golf course, tennis courts and an arcade.',
        city: 'Leavenworth',
        state: 'Washington',
        host_id: 3,
        longitude: -120.6730930631397,
        latitude: 47.58918922164116,
        imageUrl: 'https://lh3.googleusercontent.com/proxy/tGWgr2mgC-y_Y3POm9cXfyNOYBPvth9FhDN1bPY899JH4xFdeTNRFnGkXJabTMGZM4l-0yz6SOc1yvK0RrHYU6VGqsdujv3szq-JwEMb2Qsi4c2f9KD8RHkvJvU5hRx2TzjthhKpxDD4rvlLualmk0H2kVEU3Q=w296-h202-n-k-rw-no-v1'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Resorts', null, {});
  }
};
