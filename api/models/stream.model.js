const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categories = require('../data/trainingCategory.json')

const streamSchema = new Schema({
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1541870132-ecf16aeed15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  category: {
    type: String,
    // required: "",
    enum: categories,
  },
  description:{
    type: String,
    required: "",
    minLength: [10, "Escribe mínimo 20 letras, no seas perezoso"]
},
  author: {
    type: Schema.Types.ObjectId,
    //con esto le estas diciendo que el campo de un modelo es un identificador y puedo hacer relaciones de modelos
    // required: true,
    ref: "User",
    // user es el nombre del modelo que quiero relacionar , gracias a esto puedo usar el populate
    //gracias a esto mongo remplaza cada id del usuario por el usuario y puedo poner stream.author.name
  },
  views: Number,
  status:{
    type: [String],
    required: "Nivel de dificultad",
    enum: [
        "Fácil",
        "Pica",
        "Jodido",
        "Muy jodido",
        "Muerte",
    ]
  },
},
{ timestamps:true }
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