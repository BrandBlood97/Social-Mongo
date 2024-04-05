const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

router.get('/api/thoughts', thoughtController.getAllThoughts);
router.get('/api/thoughts/:id', thoughtController.getSingleThought);
router.post('/api/thoughts', thoughtController.createThought);
router.put('/api/thoughts/:id', thoughtController.updateThought);
router.delete('/api/thoughts/:id', thoughtController.deleteThought);
router.post('/api/thoughts/:thoughtId/reactions', thoughtController.createReaction);
router.delete('/api/thoughts/:thoughtId/reactions/:reactionId', thoughtController.deleteReaction);

module.exports = router;
