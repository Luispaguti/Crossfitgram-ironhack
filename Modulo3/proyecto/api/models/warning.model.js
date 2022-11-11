const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    user: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
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

const Warning = mongoose.model("Warning", schema);
module.exports = Warning;