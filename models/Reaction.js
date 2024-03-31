// Reaction.js - Defines the Reaction schema for subdocument.
const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Getter method to format the timestamp
    get: (timestamp) => {
      // Format timestamp here
      return timestamp;
    },
  },
}, {
  toJSON: {
    getters: true,
  },
  id: false,
});

module.exports = reactionSchema;
