const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users,} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected to database');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thought');
    }
    
  await User.insertMany(users);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
