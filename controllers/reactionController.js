const { User, Thought, Reaction } = require("../models");

module.exports = {
  async getReactions(req, res) {
    try {
      const reactions = await Reaction.find();

      const reactionObj = {
        reactions,
      };

      res.json(reactionObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({
        _id: req.params.reactionId,
      }).select("-__v");

      if (!reaction) {
        return res.status(404).json({ message: "No reaction with that ID" });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    try {
      const reaction = await Reaction.create(req.body);
      res.json(reaction);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndDelete({
        _id: req.params.reactionId,
      });

      if (!reaction) {
        res.status(404).json({ message: "No reaction with that ID" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        res.status(404).json({ message: "No reaction with this id!" });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
