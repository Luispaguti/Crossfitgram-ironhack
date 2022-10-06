// const transporter = require("../config/mail.config");
// module.exports.sendEmail = (user) => {
//   transporter
//     .sendMail({
//       from: "Another Life <anotherlife@hotmail.com>",
//       to: `${user.email}`,
//       subject: `Welcome ${user.name}`,
//       html: `<h1>¡Viva la (revi)vida!</h1>
//         <h3>"Bienvenido a Another Life"</h3>
//         <br>
//         <p>Hola ${user.name}, 
//         <br>
//         Nos complace tener a otro activista en nuestro equipo que apoya nuestra causa, espero que tu estancia sea productiva 
//         y duradera y por supuesto satisfactoria.
//         <br>
//         Te toca  ponerte manos a la obra: Compra,  Cambia, Vive.
//         <br>
//         Si tienes alguna duda o sugerencia no dudes en responder a este email, ¡estaremos encantados de leerte!
//         <br>
//         <img src="https://i1.wp.com/procrastinafacil.com/wp-content/uploads/2022/04/firmas-andrea-3.jpg?ssl=1" border="0">
//         <img src="https://luisdrai.es/wp-content/uploads/2022/02/firmaluisnegro-2-1.png">
//         <br>
//         <br>
//         </p>`
//     ,
//     })
//     .then(() => console.log("email sent!"))
//     .catch((error) => {
//       console.log("error sending mail", error);
//     });
// };