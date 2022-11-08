const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    //updateThought,
    //deleteThought,

} =require('../../controllers/thoughtController');

// /api/thoughts - get all thoughts AND post any new ones
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId get thought by id
router.route('/:thoughtsId').get(getSingleThought);

// /api/thoughts/ - put (update thought)
// router.route('/:userId').put(updateUser);

// /api/users/ - delete (delete user)
// router.route('/:userId').delete(deleteUser)
module.exports = router;