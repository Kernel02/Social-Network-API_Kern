const { Schema, model } = require("mongoose");
const { thoughtSchema } = require("./Thought");

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    thoughts: [thoughtSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
