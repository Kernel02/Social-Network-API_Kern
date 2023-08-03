const mongoose = require("mongoose");

// Schema to create a course model
const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Reaction = mongoose.model("reaction", reactionSchema);

module.exports = { Reaction, reactionSchema };
