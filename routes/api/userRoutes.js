const router = require('express').Router();
const userController = require('../../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUserById);
// BONUS: Remove a user's associated thoughts when deleted
router.delete('/:id', userController.deleteUserById);
router.post('/:userId/friends/:friendId', userController.addFriend);
router.delete('/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;
