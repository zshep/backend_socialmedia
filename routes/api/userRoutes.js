const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/usersControllers');

// /api/users - get all users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId get user by id
router.route('/:userId').get(getSingleUser);

// /api/users/ - put (update route)
router.route('/:userId').put(updateUser);

// /api/users/ - delete (delete user)
router.route('/:userId').delete(deleteUser)


module.exports = router;
