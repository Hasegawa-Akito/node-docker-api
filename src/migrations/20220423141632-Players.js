'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    //プレーヤーのtableを作成
    await queryInterface.createTable('players', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      birth_month: {
        type: Sequelize.INTEGER
      },
      birth_date: {
        type: Sequelize.INTEGER
      },
      team: {
        type: Sequelize.STRING
      }

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
