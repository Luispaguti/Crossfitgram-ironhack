const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streamSchema = new Schema(
  {

    author: {
      type: mongoose.Schema.Types.ObjectId,
      //con esto le estas diciendo que el campo de un modelo es un identificador y puedo hacer relaciones de modelos
      // required: true,
      ref: 'User',// user es el nombre del modelo que quiero relacionar , gracias a esto puedo usar el populate
      //gracias a esto mongo remplaza cada id del usuario por el usuario y puedo poner stream.author.name
      required: true
    },
    image: {
      type: String,
      default: "https://images.unsplash.com/photo-1541870132-ecf16aeed15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    description: {
      type: String,
      minLength: [10, "Escribe mínimo 10 letras, no seas perezoso"]
    },
    location:String
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true, // para que el virtual populate funcione hay que poner en el toJSON que incluya los virtuals xq sino por defecto los campos virtuales no te los incluye
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);
// para poder ir al stream y darle al detail y que me apareza un campo con comments con un array con todos los comentarios
// esto lo tengo que hacer con populate, 
// el stream no tiene ningún campo comments, por lo que se lo tengo que crear con el virtual

// gracias a este virtual me puedo ir al stream controller , al detail y popular comments


// dado un stream como se cuantos likes tiene? me tengo que ir a la coleccion de like , buscar cuantos like hay con ese id de stream
// la relacion entre la tabla de like y de stream es 1 a n (xq un stream tiene muchos likes) y en una relacion 1 a n la referencia la pongo en el n (likes y en el modelo de likes tengo la refencia con el objetId) en este caso puedo hacer un populate simple.Pero en mi caso quiero poner el numero de like en el stream por lo que es en el lado dificil en el que no tengo la referencia en el modelo de stream, por lo que tengo que hacer un virtual
//Pero en mi caso quiero poner el numero de like en el stream por lo que es en el lado dificil en el que no tengo la referencia en el modelo de stream, por lo que tengo que hacer un virtual populate
// y ahora en el controlador al igual que le hacia el populte de comments le hago el populate de likes

streamSchema.virtual("comments", { // aqui va el campo que quiero crear en el modelo
  ref: "Comment", // es una referencia al modelo comment
  localField: "_id",
  foreignField: "stream",
});

streamSchema.virtual("likes", {
  ref: "Like",
  localField: "_id",
  foreignField: "stream",
  count: true, // gracias a esto en vez de obtener todos los likes y meterlos en un array me pone un número
});

streamSchema.virtual("likeus", {
  ref: "Likeu",
  localField: "_id",
  foreignField: "stream",
  count: true, // gracias a esto en vez de obtener todos los likes y meterlos en un array me pone un número
});
const Stream = mongoose.model('Stream', streamSchema);
module.exports = Stream;


