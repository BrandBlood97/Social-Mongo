const router = require('express').Router();
const User = require('../models/userModel');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('thoughts').populate('friends');
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET a single user by its _id and populated thought and friend data
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
    if (!user) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// PUT to update a user by its _id
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// DELETE to remove user by its _id
// BONUS: Remove a user's associated thoughts when deleted!!!!!!!!
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        // Remove the user's associated thoughts
        await Thought.deleteMany({ _id: { $in: user.thoughts } });

        await User.findByIdAndRemove(req.params.id);
        res.json({ message: 'User and associated thoughts successfully deleted!' });
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        user.friends.push(req.params.friendId);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        user.friends.pull(req.params.friendId);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});