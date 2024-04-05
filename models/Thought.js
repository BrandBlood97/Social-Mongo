// Thought.js - Defines the Thought schema and model.
const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const formatDate = require('../utils/formatDate');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Getter method to format the timestamp
    get: (date) => formatDate(date),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
}, {
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

// Virtual to get reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
