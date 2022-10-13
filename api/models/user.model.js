const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs') //para hasear la contraseña

const WORK_FACTOR= 10;//factor de trabajo
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PW_PATTERN = /^.{9,}$/;// el gorro significa empieza en, el dolar termina en , el punto cualquier valor, y dentro de los bigotes el minimo coma el máximo


const userSchema = new Schema(
  {
    image:{
        type: String,
        default: "https://www.todofondos.net/wp-content/uploads/todofondos-simpson8.jpg",
    },
    name:{
        type: String,
        required: "Dinos tu nombre",
        maxLength: [30, "Nombre demasiado largo"],
        minLength: [2, "Nombre demasiado corto"],
        trim:true
    },
    bio: {
        type: String,
        maxLength: [100, "Describete en par de líneas"],
    },
    email: {
        type: String,
        required: "prometemos no enviarte SPAM",
        trim:true,
        unique:true,
        lowercase:true,
        match:[EMAIL_PATTERN, 'Invalid email']
    },
    password:{
        type: String,
        required: "Por tu seguridad es necesario una contraseña",
        match:[PW_PATTERN, 'Password needs at least 9 chars']
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
        default: false,
    },
    snatch: Number,
    clean: Number,
    jerk: Number,
    backsquat: Number,
       single:{
      type: Boolean,
      default: false,
  },
    benchpress: Number,
    deadlift:Number,

  },
  {  timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;

        return ret;
      } }
  }
  //Mongoose will add two properties createdAt and updatedAt
);

userSchema.virtual("wood", {
  ref: "Wood",
  localField: "_id",
  foreignField: "wood",
});

//para que la contraseña acabe hasheada en base de datos tengo que ejecutar este pre,  para ello uso el metodo de save, y no se ponia nunca función flecha

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt
    // bcrypt tiene una funcion (hash) en la que le doy lo que quiero hasear y luego el factor de trabajo y me calcula el salt
      .hash(this.password, WORK_FACTOR)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch(next);
  } else {
    next();
  }
});
//necesito un método para saber si esa contraseña está bien o no, 
userSchema.methods.checkPassword = function (passwordToMatch) {
  return bcrypt.compare(passwordToMatch, this.password);
};
const User = mongoose.model ("User", userSchema)
module.exports = User;
