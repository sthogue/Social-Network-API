const { User, Thought } = require('../models');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            .select('-__v')
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.id })
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try{
            console.log('You are adding a thought');
            console.log(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: req.body } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res
                .status(404)
                .json({ message: 'No user with this id!' });
            }
        
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async updateThought(req, res) {
        try{
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!course) {
            return res.status(404).json({ message: 'No course with this id!' });
        }

            res.json(course);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try{
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async postReaction (req, res){
        try {
            console.log('You are adding an reaction');
            console.log(req.body);
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res
                    .status(404)
                    .json({ message: 'No Thought found with that ID :(' })
            }

            res.json(student);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction (req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res
                    .status(404)
                    .json({ message: 'No Thought found with that ID :(' })
            }

            res.json(student);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
