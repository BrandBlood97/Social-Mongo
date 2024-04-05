const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models');
const data = require('./data.json');
const connection = require('../config/connection');

connection.on('error', (err) => err);


const seedDB = async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    const users = await User.insertMany(data.users);
    const thoughts = await Thought.insertMany(data.thoughts.map(thought => ({
      ...thought,
      createdAt: new Date(),
    })));

    // Update users to reference thoughts
    for (const thought of thoughts) {
      const user = users.find(user => user.username === thought.username);
      user.thoughts.push(thought._id);
      await user.save();
    }

    // Insert reactions and update thoughts
    for (const reactionData of data.reactions) {
      const reaction = new Reaction({
        ...reactionData,
        createdAt: new Date(),
      });
      await reaction.save();

      const thought = thoughts.find(thought => thought.username === reaction.username);
      thought.reactions.push(reaction);
      await thought.save();
    }

    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
