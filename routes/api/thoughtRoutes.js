const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,

} =require('../../controllers/thoughtController');

// /api/thoughts - get all thoughts AND post any new ones
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId get thought by id
router.route('/:thoughtsId').get(getSingleThought);

// /api/thoughts/ - put (update thought)
router.route('/:thoughtsId').put(updateThought);

// /api/thoughts/ - delete (delete thought)
router.route('/:thoughtsId').delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtsId/reactions').post(createReaction);

router.route('/:thoughtsId/reactions').delete(deleteReaction);


module.exports = router;