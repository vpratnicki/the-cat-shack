const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedCats = require('./cat-seeds');

const { User } = require('../models');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedCats();
  console.log('\n----- CATS SEEDED -----\n');
  
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();