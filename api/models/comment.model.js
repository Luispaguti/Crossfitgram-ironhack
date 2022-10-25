const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      //con esto le estas diciendo que el campo de un modelo es un identificador y puedo hacer relaciones de modelos
      // required: true,
      ref: 'User',// user es el nombre del modelo que quiero relacionar , gracias a esto puedo usar el populate
      //gracias a esto mongo remplaza cada id del usuario por el usuario y puedo poner stream.author.name
      required: true
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

const Comment = mongoose.model("Comment", schema);
module.exports = Comment;