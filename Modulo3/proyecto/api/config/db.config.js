const mongoose = require('mongoose');

//la cadena de conexión
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crossfit'

mongoose.connect(MONGODB_URI)
  .then(() => console.log(`Successfully connected to the database ${MONGODB_URI}`))
  .catch(error => console.error(`An error ocurred trying to connect to ${MONGODB_URI}`, error))

