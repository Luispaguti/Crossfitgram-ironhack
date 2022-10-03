const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movements = require('../data/movements')

const streamSchema = new Schema(
  {
    image: {
      type: String,
      default: "https://images.unsplash.com/photo-1541870132-ecf16aeed15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    escaled: {
      type: [String],
      required: "Nivel de dificultad",
      enum: [
        "escaled",
        "RX"
      ]
    },
    escaled: Boolean,
    categories:  {
      type: [String],
      required: "Nivel de selecciona la categoria",
      enum: [
        "AMRAP",
        "For time",
        "RM"
      ]
    },
    exercise: {
      type: [
        {
          type: String,
          required: "exercise is required",
          enum: movements.map((movement) => movement.value),
          trim: true,
        },
      ],
    },
    reps: Number,
    score: Number,
    weight:Number,
    author: {
      type: Schema.Types.ObjectId,
      //con esto le estas diciendo que el campo de un modelo es un identificador y puedo hacer relaciones de modelos
      // required: true,
      ref: "User",
      // user es el nombre del modelo que quiero relacionar , gracias a esto puedo usar el populate
      //gracias a esto mongo remplaza cada id del usuario por el usuario y puedo poner stream.author.name
    },
    views: Number,
    verify:Boolean,
    status: {
      type: [String],
      required: "Nivel de dificultad",
      enum: [
        "Fácil",
        "medio",
        "Jodido",
        "Muy jodido",
        "Muerte",
      ]
    },
    description: {
      type: String,
      minLength: [10, "Escribe mínimo 20 letras, no seas perezoso"]
    },
    location:String
  },
  { timestamps: true }
  //Mongoose will add two properties createdAt and updatedAt
);
streamSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "stream",
});

streamSchema.virtual("likes", {
  ref: "Like",
  localField: "_id",
  foreignField: "stream",
  count: true,
});
const Stream = mongoose.model('Stream', streamSchema);
module.exports = Stream;