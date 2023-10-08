const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction,
} = require('../../controllers/thoughts-controller.js');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtID
router
    .route('/:thoughtID')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtID/reactions')
    .post(postReaction)
    .delete(deleteReaction);
module.exports = router;