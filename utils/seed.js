const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts, reactions} = require('./data');

connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected to database');
//     // Delete the collections if they exist
//     let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
//     if (userCheck.length) {
//       await connection.dropCollection('users');
//     }

//     let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
//     if (thoughtCheck.length) {
//       await connection.dropCollection('thought');
//     }
    
//   await User.insertMany(users);
//   await Thought.insertMany(thoughts);

//   console.table(users);
//   console.table(thoughts);
//   console.table(reactions);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });

connection.once('open', async () => {
  console.log('Connected to MongoDB!');

  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  await Thought.collection.insertMany(reactions);

  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  
  console.log('User data seeded!');
  console.log('Seeding complete!');
  process.exit(0);
});
