// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getUsers  (req, res) {
        try{
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get user by id
    async getUserById (req, res){
        try{
            const user = await User.findOne({ _id: req.params.id });
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // create user
    async createUser (req, res){
        try{
            const user = await User.create(req.body);
            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // update user by id
    async updateUser (req, res){
        try{
            const user = await User.findOneAndUpdate(req.body);
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // delete user by id
    async deleteUser (req, res){
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userID });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and thoughts deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // add friend
    async addFriend (req, res){
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $addToSet: { friends: req.params.friendId} },
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteFriend (req, res){
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: { friends: req.params.friendId} },
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
