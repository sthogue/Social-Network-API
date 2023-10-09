const users = [
  {
    username: 'username1',
    email: 'test@gmail.com',
  },
  {
    username: 'username2',
    email: 'test2@gmail.com',
  },
  {
    username: 'username3',
    email: 'test3@gmail.com',
  },
  {
    username: 'username4',
    email: 'test4@gmail.com',
  }
];

const thoughts = [
  {
    thoughtText: 'Thought 1',
    username: 'username1',
  },
  {
    thoughtText: 'reaction2',
    username: 'username2',
  },
  {
    thoughtText: 'reaction3',
    username: 'username3',
  },
  {
    thoughtText: 'reaction4',
    username: 'username4',
  }
];

const reactions = [
  {
    reactionBody: 'reaction1',
    username: 'username1',
  },
  {
    reactionBody: 'reaction2',
    username: 'username2',
  },
  {
    reactionBody: 'reaction3',
    username: 'username3',
  },
  {
    reactionBody: 'reaction4',
    username: 'username4',
  },
  {
    reactionBody: 'reaction5',
    username: 'username1',
  }
];
// Export the functions for use in seed.js
module.exports = { users, thoughts, reactions };
