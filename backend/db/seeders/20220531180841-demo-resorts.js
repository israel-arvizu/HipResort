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
      },
      {
        name: 'Dreams Las Mareas Costa Rica',
        price: 274,
        capacity: 6,
        details: 'In a tropical jungle alongside El Jobo Beach, this luxe, all-inclusive resort is 17 km from Parque Nacional Guanacaste and 20 km from the city of La Cruz. Upscale suites provide free Wi-Fi, flat-screens, iPod/iPhone docks and coffeemakers, plus terraces or balconies with hot tubs. Some have ocean views, direct pool access, living rooms and/or dining areas; club-level suites offer club lounge access. Room service is available 24/7. Complimentary meals and drinks are offered in 7 stylish restaurants (including Italian and seafood options), 7 bars and a 24/7 cafe. Theres a spa, a gym and a kids club, plus outdoor pools and a private beach.',
        city: 'Playa el Jobo',
        state: 'Costa Rica',
        host_id: 1,
        longitude: -120.6730930631397,
        latitude: 47.58918922164116,
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOjmiYuGED5Jid46eg_BkPJz04yuI5IUhtFLnpa=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'Occidental Tamarindo',
        price: 156,
        capacity: 2,
        details: 'Set along a tranquil beach on the Pacific Ocean, this laid-back all-inclusive resort overlooking Parque Nacional Marino Las Baulas is 2 km from shops and restaurants in Tamarindo. Casual rooms provide flat-screen TVs, minibars and free Wi-Fi, plus terraces or balconies. Bi-level suites add living rooms with pull-out sofas, as well as ocean views and/or whirlpool tubs.',
        city: 'Santa Cruz',
        state: 'Costa Rica',
        host_id: 2,
        longitude: -121.6730930631397,
        latitude: 47.58918922164116,
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPBsu7XqZgCNF2RkAKhBdLcf1VP9Z58xdb_td-1=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'The Woodlands Resort',
        price: 174,
        capacity: 8,
        details: 'Off Route 2 and adjacent to the Icicle Junction Activities Center, this laid-back resort is an 8-minute walk from Enchantment Park and a mile from Leavenworth Golf Club. The warmly decorated rooms feature flat-screen TVs, free Wi-Fi, minifridges and microwaves. Suites add sitting areas with pull-out sofas. Some have fireplaces, Jacuzzi tubs and/or balconies. Free hot breakfast is provided. Dining options include a casual restaurant with terrace seating and a sports bar. Theres a full-service spa, an outdoor pool and a hot tub. Other features include a fitness room, a mini-golf course, tennis courts and an arcade.',
        city: 'The Woodlands',
        state: 'Texas',
        host_id: 1,
        longitude: -121.6730930631397,
        latitude: 48.58918922164116,
        imageUrl: 'https://lh3.googleusercontent.com/proxy/EnivuQqDI2P8OOEqU-yNxkc24Rk9llPYLThDWHl3lyftp9cIRTs3YyvN0gxLtw-XBsdMtoiKbo01-gCWMtLyEAhPRmkbDz04SBj3T3fpexD67UDgvSeQdj7gLQQMW_he5lyf8V0QPos5_4SwpX-wcwDqIrPw9Vw=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'Hilton Garden Inn Kauai Wailua Bay',
        price: 557,
        capacity: 6,
        details: 'Adjacent to Lydgate Beach Park on the Pacific Ocean, this chic beachfront resort is 3 miles from Fern Grotto and 8 miles from Wailua Falls. The stylish rooms with warm wood furnishings have free Wi-Fi and flat-screens, as well as minifridges, microwaves and Keurig coffeemakers. Upgraded rooms add ocean views. Some come with terraces. Suites and cottages add separate living areas with pull-out sofas. Limited room service is provided.',
        city: "Kapa'a",
        state: 'Hawaii',
        host_id: 3,
        longitude: -123.6730930631397,
        latitude: 46.58918922164116,
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNvFFOVDOUo16Y89Sc3e3USLs67HIDf8MOKz5XX=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'Village Waikiki Beach Resort',
        price: 281,
        capacity: 6,
        details: 'Occupying 5 high-rise towers on a 22-acre property along Waikiki Beach, this lively hotel is a 13-minute walk from the Hawaii Convention Center and 3 miles from downtown Honolulu. Upscale rooms offer custom-designed beds and Wi-Fi, plus minifridges, 37-inch flat-screen TVs and balconies; some provide panoramic ocean views. Suites add pull-out sofas.',
        city: 'Honolulu',
        state: 'Hawaii',
        host_id: 1,
        longitude: -125.6730930631397,
        latitude: 49.58918922164116,
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPf_PIEokWS1sd2qAP8o3HafSgHveJDK4OJiPVF=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'Marriott Cancun Resort',
        price: 124,
        capacity: 4,
        details: 'On a Caribbean Sea beach, this upscale resort is 2 km from Museo Maya de Cancún and 17 km from Cancun International Airport. Elegant rooms and suites offer Wi-Fi (fee), safes, minibars and flat-screens, as well as desks and balconies. Upgraded room add sea views. Suites have living rooms, and upgraded suites add dining areas.',
        city: 'Zona Hotelera',
        state: 'Cancun',
        host_id: 2,
        longitude: -125.6730930631397,
        latitude: 41.58918922164116,
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPe-8iKjdJLTWUuBGobbpBc9Jo7GCA-IBzjy_MW=w296-h202-n-k-rw-no-v1'
      },
      {
        name: 'Paséa Hotel & Spa',
        price: 551,
        capacity: 2,
        details: 'Set along a tranquil beach on the Pacific Ocean, this laid-back all-inclusive resort overlooking Parque Nacional Marino Las Baulas is 2 km from shops and restaurants in Tamarindo. Casual rooms provide flat-screen TVs, minibars and free Wi-Fi, plus terraces or balconies. Bi-level suites add living rooms with pull-out sofas, as well as ocean views and/or whirlpool tubs.',
        city: 'Huntigton Beach',
        state: 'California',
        host_id: 1,
        longitude: -121.6730930631397,
        latitude: 48.58918922164116,
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPqa5tTSM0dJemuwlE6ZrtxpxAdBouV5_CGnWeO=w253-h168-k-no'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Resorts', null, {});
  }
};
