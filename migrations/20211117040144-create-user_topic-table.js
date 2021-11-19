'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     
     await queryInterface.createTable('users', { 
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       username:{
         type: Sequelize.STRING,
         allowNull: true
       }      
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('users');
     
  }
};
