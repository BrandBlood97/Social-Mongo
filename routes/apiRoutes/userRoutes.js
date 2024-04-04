const router = require('express').Router();
const userController = require('./userController');

// Route to GET all users
router.get('/', userController.getAllUsers);

// Route to GET a single user by its _id
router.get('/:id', userController.getUserById);

// Route to POST a new user
router.post('/', userController.createUser);

// Route to PUT to update a user by its _id
router.put('/:id', userController.updateUserById);

// Route to DELETE to remove user by its _id
// BONUS: Remove a user's associated thoughts when deleted
router.delete('/:id', userController.deleteUserById);

// Route to POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', userController.addFriend);

// Route to DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;
