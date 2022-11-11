const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    user: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    stream: {
      ref: "Stream",
      type: mongoose.Schema.Types.ObjectId,
    },
    wood: {
      ref: "Wood",
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Like = mongoose.model("Like", schema);
module.exports = Like;