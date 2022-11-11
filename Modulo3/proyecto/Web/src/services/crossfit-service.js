import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true, // con esto axios cookie que recibe, cookie que manda xq por defecto no lo hace
});


// axios.interceptor ; me permite definir una función por la que van a pasar todas las respuestas que reciba

http.interceptors.response.use(
  function (response) {
    // que hacer con la respuesta en el caso de que haya ido bien
    return response.data;
    // con esto puedo hacer que me llegue el res.data directamente y me puedo cargar el de las peticiones de abajo
  },
  function (error) {
    if (error?.response?.status === 401) { // es lo unico que veo del backend, no autenticado
      // que hacer con el error en el caso de que haya habido
      console.error("he pasado por el interceptor");
   
      // window.location.replace("/login"); // con esto consigo el cambio de ruta
    }
    return Promise.reject(error);
  }
);


export function register(user) {
  user.image = user.image[0]
  const data = new FormData()

  Object.keys(user).forEach(key =>{
    data.append(key, user[key])
  })
  return http.post("/register",data);
}

export function authenticate(data) { // data es un objeto que tiene el email y la contraseña
  return http.post("/authenticate", data);
}

// export function getAuthenticateSlack() {
//   return http.get("/authenticate/slack");
// }

// export function getAuthenticateSlackCb() {
// //   return http.get("/authenticate/slack/cb");
// }
export function logout() {
  return http.post("/logout",{});
}


export function getProfile() {
  return http.get(`/profile`);
}


export function warning(id) {
  return http.post(`/profile/${id}/warning`);
}


export function getProfileStreams(id) {
  return http.get(`/profile/${id}/streams`);
}

export function getProfileWoods(id) {
  return http.get(`/profile/${id}/woods`);
}

// export function getProfile() {
//   return http.get("/profile");
// }


export function getStreams() {
  return http.get("/streams")
}

export function getStreamDetail(id) {
  return http.get(`/streams/${id}`);
}

export function createStream(stream) {
  stream.image = stream.image[0]
  const data = new FormData()

  Object.keys(stream).forEach(key =>{
    data.append(key, stream[key])
  })
  return http.post("/stream", data);
}
// esta funcion va a recibir un stream,
//mirar en la docu, el post a diferencia del get tiene un primer argumento el path y un segundo que es toda la info q estoy enviando

export function updateStream(id) {
  return http.patch(`/stream/${id}`);
}

export function deleteStream(id) {
  return http.delete(`/stream/${id}`);
}

export function likeStream(id) {
  return http.post(`/streams/${id}/like`);
}
export function likeuStream(id) {
  return http.post(`/streams/${id}/likeu`);
}
export function commentStream(id, text) {
  return http.post(`/streams/${id}/comments`, { text });
}


export function getWoods() {
  return http.get("/woods");
}

export function getWoodDetail(id) {
  return http.get(`/woods/${id}`);
}

export function getRanking() {
  return http.get(`/ranking`);
}

export function createWood(wood) {
  wood.image = wood.image[0]
  const data = new FormData()

  Object.keys(wood).forEach(key =>{
    data.append(key, wood[key])
  })
  return http.post("/wood", data);
}

export function updateWood(id) {
  return http.patch(`/wood/${id}`);
}

export function deleteWood(id) {
  return http.delete(`/wood/${id}`);
}

export function likeWood(id) {
  return http.post(`/woods/${id}/like`);
}

export function dislikeWood(id) {
  return http.post(`/woods/${id}/dislike`);
}

export function verifyWood(id) {
  return http.post(`/woods/${id}/verif`);
}

export function warnin(id) {
  return http.post(`/woods/${id}/warnin`);
}

export function commentWood(id, text) {
  return http.post(`/woods/${id}/comments`, { text });
}













// router.patch("/streams/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser, comments.update);
// router.delete("/streams/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser,comments.delete);


// router.patch("/woods/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser, comments.update);
// router.delete("/woods/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser,comments.delete);

