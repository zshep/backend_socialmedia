const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/usersControllers');

// /api/users - get all users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId get user by id
router.route('/:userId').get(getSingleUser);

// /api/users/ - put (update route)
router.route('/:userId').put(updateUser);

// /api/users/ - delete (delete user)
router.route('/:userId').delete(deleteUser)

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend)

router.route('/:userId/friends/:friendId').delete(deleteFriend)

module.exports = router;
