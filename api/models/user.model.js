const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    image:{
        type: String,
        default: "https://www.todofondos.net/wp-content/uploads/todofondos-simpson8.jpg",
    },
    name:{
        type: String,
        required: "Dinos tu nombre",
        maxLength: [30, "Nombre demasiado largo"],
        minLength: [2, "Nombre demasiado corto"],
    },
    bio: {
        type: String,
        maxLength: [100, "Describete en par de líneas"],
    },
    email: {
        type: String,
        required: "Vaaale... prometemos no enviarte SPAM",
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type: String,
        required: "Por tu seguridad es necesario una contraseña",
    },
    box:{
      type: String,
      required: "Indícanos a que box perteneces",
  },
    phone:{
        type: String,
        required: "Número de teléfono es necesario",
    },
    admin:{
        type: Boolean,
    },
})


const User = mongoose.model ("User", userSchema)
module.exports = User;
