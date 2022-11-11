import { useContext } from "react";// para que cualquier hijo o nieto pueda acceder al value de alguno de sus contextos ascendientes utilizo el hook useContext 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from "../../../../contexts/AuthContext";
import { authenticate } from '../../../../services/crossfit-service'
import '../login/Login.css'

function Login() {
  const navigation = useNavigate(); // para poder redirigir al usuario sin refrescar la página
  const value = useContext(AuthContext); // si soy un componente tataranieto gracias  a esto accedo al value
  //utilizando el hook de react useContext, pasandole el contexto que quiero utilizar 

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleLogin = (data) => {
    authenticate(data)
      .then((data) => { // si hago un console.log de data me llega el email y el password del usuario
        value.setUser(data);
        //data= datos del usuario, esto lo guardo en el estado del contexto gracias al value
        navigation("/");
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { message: errors[error].message });
          });
        }
      });
  };

  return (
    <body className="loginbody">

      <form class="loginform" onSubmit={handleSubmit(handleLogin)}>

        <div className="formmy">

          <h1 className="titlelogin">Crossfitgram</h1>
          <p className="des-regist">Inicia sesión para poder subir tus Fotos y tus Woods</p>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Name..."
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
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

          <button className="mybtn" type="submit" disabled={!isValid}>
            Login
          </button>

          <NavLink to={"/register"} className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
          <button className="mybtn" type="submit" >
            Register
          </button>
          </NavLink>

          {/* <a
            className="btn btn-danger mt-2" href='http://localhost:3001/api/v1/authenticate/slack'>
            <i className="fa fa-slack me-2"></i>
            Login with Slack
          </a> */}






        </div>
      </form>


    </body>

  )
}

export default Login;