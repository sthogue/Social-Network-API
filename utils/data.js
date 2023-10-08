const users = [
  {
    username: 'username1',
    email: 'test@gmail.com',
    friends: [
      'username2', 
      'username3'
    ],
    thoughts: [],
  },
  {
    username: 'username2',
    email: 'test2@gmail.com',
    friends: [
      'username1', 
      'username3'
    ],
    thoughts: [],
  },
  {
    username: 'username3',
    email: 'test3@gmail.com',
    friends: [
      'username1', 
      'username2'
    ],
    thoughts: [],
  },
  {
    username: 'username4',
    email: 'test4@gmail.com',
    friends: [
      'username1', 
      'username2'
    ],
    thoughts: [],
  }
];

const thoughts = [
  {
    username: 'username1',
    thoughtText: 'Thought 1',
  },
  {
    username: 'username2',
    thoughtText: 'reaction2',
  },
  {
    username: 'username3',
    thoughtText: 'reaction3',
  },
  {
    username: 'username4',
    thoughtText: 'reaction4',
  }
];


// Export the functions for use in seed.js
module.exports = { users, reactions };
