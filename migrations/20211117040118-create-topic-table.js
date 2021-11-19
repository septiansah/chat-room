'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('topics', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       topic_name:{
         type: Sequelize.STRING,
         allowNull: true
       }      
    });
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('topics');
     
  }
};
