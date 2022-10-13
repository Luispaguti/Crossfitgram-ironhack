const User = require('../models/user.model');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

module.exports.session = expressSession({
  secret: process.env.SESSION_SECRET || 'super secret',
  // el secreto para saber si esa cookie ha sido modificada o no
  // asi se protege una cookie a través de una firma
  resave: false,// es siquieres que en cada petición http quieres que se vuelva a actualizar aunque no haya cambiado su información
  saveUninitialized: false,//saveUninitialized lo que nos hace es que si en toda petición se haya autenticado o no el usuario si queremos crearle una cookie de sesion, la respuesta es no xq yo solo voy a generar una cookie de sesión como llave de entrada a nuestra aplicación, es decir es una forma de autenticación
  store: MongoStore.create({
    mongoUrl: mongoose.connection._connectionString, // el conect mongo es para que estas cookies de sesión se guarden en el mongo
    ttl: 24 * 3600 * 1000,// es el tiempo de duración de ese documento en el mongo
  }),
  cookie: {// los flags de seguridad de la cookie
    secure: process.env.SESSION_SECURE === 'true', // el secure me daba protección frente a un ataque de man in the middle, es decir la cookie solo la va a enviar en el navegador en el caso de que vayamos por https. En desarrollo tiene que estar a false xq no levantamos un servidor que tienda trafico https.En producción la pondremos a true.  
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,//cuando va caducar esa cookie
  },
});




//cada vez que me hacen una petición http me interesa cargar al usuario , 
//en el momento que nos hemos autenticado a partir de esa cookie de sesion a mi me interesa saber quien es el usuario 
//por lo que en la cookie de sesion se guarda el id del usuario 
// este pluggin, este midelware(sesion de la linea 6) lo que está añadiendo es la request un req.sesion y 
//este req.sesion tendrá la informacion que yo le haya querido ir cargando a medida que han ido llegando las peticiones http
// lo primero que voy a guardar en esta req.session, es el identificador del usuario (const { userId } = req.session)

module.exports.loadUser = (req, res, next)  => {
  const { userId } = req.session;
  if (userId) {
    User.findById(userId)
      .then(user => {
        req.user = user;// aqui sobre el req. al igual que los que hicieron el midelware de express sesion nos dejaron en req.session esa info,
        // yo aquí en req.user dejo mi usuario
        //para que el resto de los midelware pueda hacer un req.user y acceder a la info del usuario en concreto
        next();
      })
      .catch(next)
  } else {// si no hay userId no estás autenticado, pero no es el punto para decirte que no puedes entras, por lo q next
    next();
  }
}