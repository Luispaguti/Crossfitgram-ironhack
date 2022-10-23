import { useContext } from "react"
import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as Services from "../../../../services/crossfit-service";
import { AuthContext } from "../../../../contexts/AuthContext";
import '../register/Register.css'


function Register() {
  const navigation = useNavigate()
  const value = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleRegisterSubmit = (data) => {
    console.log(data);
    // const user = {
    //   image:data.image,
    //   email: data.email,
    //   bio:data.bio,
    //   password: data.password,
    //   nickname: data.nickname,
    //   name: data.name,
    //   surname: data.surname,
    //   phone: data.phone,
    //   box:data.box,
    //   locality: data.locality,
    //   snatch: data.snatch,
    //   clean: data.clean,
    //   jerk: data.jerk,
    //   backsquat: data.backsquat,
    //   benchpress: data.benchpress,
    //   deadlift: data.deadlift,
    // }

    Services.register(data)
      .then(user => 
        navigation('/login'))
      .catch(error => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { message: errors[error].message });
          });
        }
      });
  }


  return (




    //   <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="text"
    //         className={`form-control ${errors.image ? "is-invalid" : ""}`}
    //         placeholder="imagen..."
    //         {...register("image", {
    //           required: "image is required",
    //         })}
    //       />
    //       {errors.image && (
    //         <div className="invalid-feedback">{errors.image.message}</div>
    //       )}
    //     </div>






    <body className="registerbody">

      <form class="loginform" onSubmit={handleSubmit(handleRegisterSubmit)}>

        <div className="registerformmy">

          <h1 className="titlelogin">Croosfitgram</h1>
          <p className="des-regist">Registrate para ver las fotos y los woods de tus amigos</p>

          <div className="logingroup">

            <input
              type="file"
              id="loginemail"
              className={`form-control ${errors.image ? "is-invalid" : ""}`}
              placeholder="image..."
              {...register("image", {
                required: "image is required",
              })}
            />
            {errors.image && (
              <div className="invalid-feedback">{errors.image.message}</div>
            )}

          </div>


          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="name..."
              {...register("name", {
                required: "name is required",
              })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.surname ? "is-invalid" : ""}`}
              placeholder="surname..."
              {...register("surname", {
                required: "surname is required",
              })}
            />
            {errors.surname && (
              <div className="invalid-feedback">{errors.surname.message}</div>
            )}

          </div>


          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.nickname ? "is-invalid" : ""}`}
              placeholder="nickname..."
              {...register("nickname", {
                required: "nickname is required",
              })}
            />
            {errors.nickname && (
              <div className="invalid-feedback">{errors.nickname.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="phone..."
              {...register("phone", {
                required: "phone is required",
              })}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}

          </div>


          

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.bio ? "is-invalid" : ""}`}
              placeholder="Cuenta algo sobre ti..."
              {...register("bio", {
                required: "bio is required",
              })}
            />
            {errors.bio && (
              <div className="invalid-feedback">{errors.bio.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.snatch ? "is-invalid" : ""}`}
              placeholder="Cual es tu repetición máxima en Snatch..."
              {...register("snatch", {
                required: "snatch is required",
              })}
            />
            {errors.snatch && (
              <div className="invalid-feedback">{errors.snatch.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.clean ? "is-invalid" : ""}`}
              placeholder="Cual es tu repetición máxima en Clean..."
              {...register("clean", {
                required: "clean is required",
              })}
            />
            {errors.clean && (
              <div className="invalid-feedback">{errors.clean.message}</div>
            )}

          </div>


          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.jerk ? "is-invalid" : ""}`}
              placeholder="Cual es tu repetición máxima en Jerk..."
              {...register("jerk", {
                required: "jerk is required",
              })}
            />
            {errors.jerk && (
              <div className="invalid-feedback">{errors.jerk.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.backsquat ? "is-invalid" : ""}`}
              placeholder="Cual es tu repetición máxima en Backsquat..."
              {...register("backsquat", {
                required: "backsquat is required",
              })}
            />
            {errors.backsquat && (
              <div className="invalid-feedback">{errors.backsquat.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.benchpress ? "is-invalid" : ""}`}
              placeholder="Cual es tu repetición máxima en Benchpress..."
              {...register("benchpress", {
                required: "benchpress is required",
              })}
            />
            {errors.benchpress && (
              <div className="invalid-feedback">{errors.benchpress.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.deadlift ? "is-invalid" : ""}`}
              placeholder="Cual es tu repetición máxima en Deadlift..."
              {...register("deadlift", {
                required: "deadlift is required",
              })}
            />
            {errors.deadlift && (
              <div className="invalid-feedback">{errors.deadlift.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.box ? "is-invalid" : ""}`}
              placeholder="Cual es tu Box..."
              {...register("box", {
                required: "box is required",
              })}
            />
            {errors.deadlift && (
              <div className="invalid-feedback">{errors.box.message}</div>
            )}

          </div>














          <div className="logingroup">

            <input
              type="email"
              id="loginemail"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email..."
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}

          </div>




          <div className="logingroup">

            <input
              type="password"
              id="loginemail"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="password..."
              {...register("password", {
                required: "password is required",
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}

          </div>



          <button className="mybtnregis" type="submit" disabled={!isValid}>
            Registro
          </button>






        </div>
      </form>


    </body>











    // <div>
    //   <form onSubmit={handleSubmit(handleRegister)}>


    //   <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="text"
    //         className={`form-control ${errors.image ? "is-invalid" : ""}`}
    //         placeholder="imagen..."
    //         {...register("image", {
    //           required: "image is required",
    //         })}
    //       />
    //       {errors.image && (
    //         <div className="invalid-feedback">{errors.image.message}</div>
    //       )}
    //     </div>

    //   <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="name"
    //         className={`form-control ${errors.name ? "is-invalid" : ""}`}
    //         placeholder="Nombre..."
    //         {...register("name", {
    //           required: "name is required",
    //         })}
    //       />
    //       {errors.name && (
    //         <div className="invalid-feedback">{errors.name.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="surname"
    //         className={`form-control ${errors.surname ? "is-invalid" : ""}`}
    //         placeholder="Apellido..."
    //         {...register("surname", {
    //           required: "surname is required",
    //         })}
    //       />
    //       {errors.surname && (
    //         <div className="invalid-feedback">{errors.surname.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="phone "
    //         className={`form-control ${errors.phone ? "is-invalid" : ""}`}
    //         placeholder="phone ..."
    //         {...register("phone ", {
    //           required: "phone is required",
    //         })}
    //       />
    //       {errors.phone && (
    //         <div className="invalid-feedback">{errors.phone.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="locality"
    //         className={`form-control ${errors.locality ? "is-invalid" : ""}`}
    //         placeholder="locality..."
    //         {...register("locality ",{
    //           required: "locality is required",
    //         })}
    //       />
    //       {errors.locality && (
    //         <div className="invalid-feedback">{errors.locality.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="nickname"
    //         className={`form-control ${errors.nickname ? "is-invalid" : ""}`}
    //         placeholder="nickname..."
    //         {...register("nickname", {
    //           required: "nickname is required",
    //         })}
    //       />
    //       {errors.nickname && (
    //         <div className="invalid-feedback">{errors.nickname.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-user fa-fw"></i>
    //       </span>
    //       <input
    //         type="email"
    //         className={`form-control ${errors.email ? "is-invalid" : ""}`}
    //         placeholder="Email..."
    //         {...register("email", {
    //           required: "Email is required",
    //         })}
    //       />
    //       {errors.email && (
    //         <div className="invalid-feedback">{errors.email.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="password"
    //         className={`form-control ${errors.password ? "is-invalid" : ""}`}
    //         placeholder="Password..."
    //         {...register("password", {
    //           required: "Password is required",
    //         })}
    //       />
    //       {errors.password && (
    //         <div className="invalid-feedback">{errors.password.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="bio"
    //         className={`form-control ${errors.bio ? "is-invalid" : ""}`}
    //         placeholder="Talk about you..."
    //         {...register("bio", {
    //           required: "bio is required",
    //         })}
    //       />
    //       {errors.bio && (
    //         <div className="invalid-feedback">{errors.bio.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="snatch"
    //         className={`form-control ${errors.snatch ? "is-invalid" : ""}`}
    //         placeholder="Tu RM es snatch..."
    //         {...register("snatch", {
    //           required: "snatch is required",
    //         })}
    //       />
    //       {errors.snatch && (
    //         <div className="invalid-feedback">{errors.snatch.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="clean"
    //         className={`form-control ${errors.clean ? "is-invalid" : ""}`}
    //         placeholder="Tu RM en clean..."
    //         {...register("clean", {
    //           required: "clean is required",
    //         })}
    //       />
    //       {errors.clean && (
    //         <div className="invalid-feedback">{errors.clean.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="jerk"
    //         className={`form-control ${errors.jerk ? "is-invalid" : ""}`}
    //         placeholder="Tu RM en jerk..."
    //         {...register("jerk", {
    //           required: "jerk is required",
    //         })}
    //       />
    //       {errors.jerk && (
    //         <div className="invalid-feedback">{errors.jerk.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="backsquat"
    //         className={`form-control ${errors.backsquat ? "is-invalid" : ""}`}
    //         placeholder="Tu RM en backsquat..."
    //         {...register("backsquat", {
    //           required: "backsquat is required",
    //         })}
    //       />
    //       {errors.backsquat && (
    //         <div className="invalid-feedback">{errors.backsquat.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="benchpress"
    //         className={`form-control ${errors.benchpress ? "is-invalid" : ""}`}
    //         placeholder="Tu RM en benchpress..."
    //         {...register("benchpress", {
    //           required: "benchpress is required",
    //         })}
    //       />
    //       {errors.benchpress && (
    //         <div className="invalid-feedback">{errors.benchpress.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="deadlift"
    //         className={`form-control ${errors.deadlift ? "is-invalid" : ""}`}
    //         placeholder="Tu RM en deadlift..."
    //         {...register("deadlift", {
    //           required: "deadlift is required",
    //         })}
    //       />
    //       {errors.deadlift && (
    //         <div className="invalid-feedback">{errors.deadlift.message}</div>
    //       )}
    //     </div>

    //     <div className="input-group mb-1">
    //       <span className="input-group-text">
    //         <i className="fa fa-key fa-fw"></i>
    //       </span>
    //       <input
    //         type="box"
    //         className={`form-control ${errors.box ? "is-invalid" : ""}`}
    //         placeholder="box..."
    //         {...register("box", {
    //           required: "box is required",
    //         })}
    //       />
    //       {errors.box && (
    //         <div className="invalid-feedback">{errors.box.message}</div>
    //       )}
    //     </div>



    //     <div className="d-grid mt-2">
    //       <button className="btn btn-primary" type="submit" disabled={!isValid}>
    //         Register
    //       </button>

    //       {/* <a
    //         className="btn btn-danger mt-2"
    //         href="http://localhost:3001/api/v1/authenticate/slack"
    //       >
    //         <i className="fa fa-slack me-2"></i>
    //         Login with Slack
    //       </a> */}
    //     </div>
    //   </form>
    // </div>
  );
}

export default Register



// import { useContext } from "react";// para que cualquier hijo o nieto pueda acceder al value de alguno de sus contextos ascendientes utilizo el hook useContext
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
// import { AuthContext } from "../../contexts/AuthContext";
// import { authenticate } from '../../services/crossfit-service'

// function LoginScreen() {
//   const navigation = useNavigate(); // para poder redirigir al usuario sin refrescar la página
//   const value = useContext(AuthContext); // si soy un componente tataranieto gracias  a esto accedo al value
//   //utilizando el hook de react useContext, pasandole el contexto que quiero utilizar

//   const {
//     register,
//     handleSubmit,
//     setError,
//     control,
//     formState: { errors, isValid },
//   } = useForm({ mode: "onTouched" });

//   const handleLogin = (data) => {
//     authenticate(data)
//       .then((data) => { // si hago un console.log de data me llega el email y el password del usuario
//         value.setUser(data);
//         //data= datos del usuario, esto lo guardo en el estado del contexto gracias al value
//         navigation("/");
//       })
//       .catch((error) => {
//         if (error.response?.data?.errors) {
//           const { errors } = error.response.data;
//           console.log(errors);
//           Object.keys(error.response.data.errors).forEach((error) => {
//             setError(error, { message: errors[error].message });
//           });
//         }
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(handleLogin)}>
//         <div className="input-group mb-1">
//           <span className="input-group-text">
//             <i className="fa fa-user fa-fw"></i>
//           </span>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? "is-invalid" : ""}`}
//             placeholder="Email..."
//             {...register("email", {
//               required: "Email is required",
//             })}
//           />
//           {errors.email && (
//             <div className="invalid-feedback">{errors.email.message}</div>
//           )}
//         </div>

//         <div className="input-group mb-1">
//           <span className="input-group-text">
//             <i className="fa fa-key fa-fw"></i>
//           </span>
//           <input
//             type="password"
//             className={`form-control ${errors.password ? "is-invalid" : ""}`}
//             placeholder="Password..."
//             {...register("password", {
//               required: "Password is required",
//             })}
//           />
//           {errors.password && (
//             <div className="invalid-feedback">{errors.password.message}</div>
//           )}
//         </div>

//         <div className="d-grid mt-2">
//           <button className="btn btn-primary" type="submit" disabled={!isValid}>
//             Login
//           </button>

//           {/* <a
//             className="btn btn-danger mt-2"
//             href="http://localhost:3001/api/v1/authenticate/slack"
//           >
//             <i className="fa fa-slack me-2"></i>
//             Login with Slack
//           </a> */}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginScreen;