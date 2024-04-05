const User = require('../../models/User');
const Thought = require('../../models/Thought');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('thoughts').populate('friends');
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
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
};

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUserById = async (req, res) => {
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
};

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        // Remove the user's associated thoughts BONUS
        await Thought.deleteMany({ _id: { $in: user.thoughts } });

        await User.findByIdAndRemove(req.params.id);
        res.json({ message: 'User and associated thoughts successfully deleted!' });
    } catch (error) {
        res.status(500).json(error);
    }
};

const addFriend = async (req, res) => {
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
};

const removeFriend = async (req, res) => {
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
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
};
