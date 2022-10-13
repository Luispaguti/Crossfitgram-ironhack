import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:3001/api/v1",
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


export function getRegister() {
  return http.get("/register");
}

export function authenticate(data) { // data es un objeto que tiene el email y la contraseña
  return http.post("/authenticate", data);
}

export function getAuthenticateSlack() {
  return http.get("/authenticate/slack");
}

export function getAuthenticateSlackCb() {
  return http.get("/authenticate/slack/cb");
}
export function logout() {
  return http.delete("/logout");
}


export function getProfile(id) {
  return http.get(`/profile/${id}`);
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
  return http.post("/streams", stream);
}
// esta funcion va a recibir un stream,
//mirar en la docu, el post a diferencia del get tiene un primer argumento el path y un segundo que es toda la info q estoy enviando

export function updateStream(id) {
  return http.patch(`/streams/${id}`);
}

export function deleteStream(id) {
  return http.delete(`/streams/${id}`);
}

export function likeStream(id) {
  return http.post(`/streams/${id}/like`);
}

export function commentStream(id, text) {
  return http.post(`/streams/${id}/comments`, { text });
}


export function getWoods() {
  return http.get("/woods");
}

export function getWood(id) {
  return http.get(`/woods/${id}`);
}

export function getRanking() {
  return http.get(`/ranking`);
}

export function createWood(wood) {
  return http.post("/woods", wood);
}

export function updateWood(id) {
  return http.patch(`/woods/${id}`);
}

export function deleteWood(id) {
  return http.delete(`/woods/${id}`);
}

export function likeWood(id) {
  return http.post(`/woods/${id}/like`);
}

export function verifyWood(id) {
  return http.post(`/woods/${id}/verif`);
}

export function commentWood(id, text) {
  return http.post(`/woods/${id}/comments`, { text });
}













// router.patch("/streams/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser, comments.update);
// router.delete("/streams/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser,comments.delete);


// router.patch("/woods/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser, comments.update);
// router.delete("/woods/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser,comments.delete);
