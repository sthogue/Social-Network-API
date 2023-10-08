const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userID
router
    .route('/:userID')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userID/friends/:friendID
router
    .route('/:userID/friends/:friendID')
    .post(addFriend)
    .delete(deleteFriend);
module.exports = router;
