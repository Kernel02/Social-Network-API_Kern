const { Schema, model } = require("mongoose");
const { reactionSchema } = require("./Reaction");

const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = { Thought, thoughtSchema };
