'use strict';

const { hashPassword } = require('../helpers/bcrypt');

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
    const users = [
    {
      email: 'a@a.com',
      password: 'a',
      name: 'agif',
      role: 'admin'
    }, {
      email: 'user@mail.com',
      password: 'qwe',
      name: 'user',
      role: 'user'
    }].map(el => {
      el.createdAt = el.updatedAt = new Date();
      el.password = hashPassword(el.password);
      return el;
    })

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
