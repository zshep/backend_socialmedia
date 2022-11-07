const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/usersControllers');

// /api/users - get all users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId get user by id
router.route('/:userId').get(getSingleUser);

// /api/users/ - put (update route)


// /api/users/ - delete (delete user)



module.exports = router;
