'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    unitPrice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    multiple: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
