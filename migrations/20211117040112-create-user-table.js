'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_topic', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       user_id:{
         type: Sequelize.INTEGER,
         allowNull: true
       },
       topic_id:{
        type: Sequelize.INTEGER,
        allowNull: true
      }       
    });
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('user_topic');
    
  }
};
