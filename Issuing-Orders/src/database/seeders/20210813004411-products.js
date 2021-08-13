'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
    [
      {
        name: 'Millenium​ ​Falcon',
        unit_price: 550000,
        multiple: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'X-Wing',
        unit_price: 60000,
        multiple: 2,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Super​ ​Star​ ​Destroyer',
        unit_price: 4570000,
        multiple: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'TIE​ ​Fighter',
        unit_price: 75000,
        multiple: 2,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Lightsaber',
        unit_price: 6000,
        multiple: 5,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'DLT-19​ ​Heavy​ ​Blaster​ ​Rifle',
        unit_price: 5800.,
        multiple: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'DL-44​ ​Heavy​ ​Blaster​ ​Pistol',
        unit_price: 1500.00,
        multiple: 10,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
