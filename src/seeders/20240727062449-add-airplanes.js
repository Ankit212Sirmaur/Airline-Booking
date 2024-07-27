'use strict';
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('AirPlanes',[
      {
        modelNumber: 'santro895',
        capacity:90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'boeing7887',
        capacity:450,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('AirPlanes', {
      [Op.or] :[{modelNumber: 'santro895'}, {modelNumber: 'boeing7887',}]
    });
  }
};
