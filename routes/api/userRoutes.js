// Purpose: API routes for User model
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
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userID/friends/:friendId
router.route('/:userID/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);
    
module.exports = router;
