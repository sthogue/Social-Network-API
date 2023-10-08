const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      validate: {
        validator: function (value) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value);
        },
        message: 'Invalid email address format',
      },
    },
    thoughts:
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    friends:
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
