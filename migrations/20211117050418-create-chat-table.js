'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chat', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       message:{
        type: Sequelize.TEXT,
        allowNull: true
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
    
     await queryInterface.dropTable('chat');
    
  }
};
