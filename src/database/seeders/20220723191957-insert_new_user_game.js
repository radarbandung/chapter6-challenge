'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('People', [{
       name: 'John Doe',
       isBetaMember: false
     }], {});
      await Promise.all([queryInterface.bulkInsert('user_games', 
        [{
          username: 'user1',
          password: 123,
          createdAt: new Date(),
          updatedAt: new Date(),
        }], 
      {})
    ]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
     
     await queryInterface.bulkDelete('user_games', null, {});
  }
};
