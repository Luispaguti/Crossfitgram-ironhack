import { useContext } from "react";// para que cualquier hijo o nieto pueda acceder al value de alguno de sus contextos ascendientes utilizo el hook useContext 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
    <body>
      <span id="root">
        <section class="section-all">


          <main class="main" role="main">
            <div class="wrapper">
              <article class="article">
                <div class="content">
                  <div class="login-box">
                    <div class="header">
                      <div className="logo-section hoverable">Crossfitgram </div>
                    </div>



                    <div class="form-wrap">
                      <form class="form" onSubmit={handleSubmit(handleLogin)}>

                        <div className="input-box">
                          <input
                            type="email"
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

                        <div className="input-box">
                          <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Password..."
                            {...register("password", {
                              required: "Password is required",
                            })}
                          />
                          {errors.password && (
                            <div className="invalid-feedback">{errors.password.message}</div>
                          )}
                        </div>

                        <span className="button-box">
                          <button className="btn" type="submit" disabled={!isValid}>
                            Login
                          </button>

                          {/* <a
            className="btn btn-danger mt-2"
            href="http://localhost:3001/api/v1/authenticate/slack"
          >
            <i className="fa fa-slack me-2"></i>
            Login with Slack
          </a> */}
                        </span>

                        <Link to="/login" class="forgot"></Link>
                      </form>
                    </div>
                  </div>

                </div>
              </article>
            </div>
          </main>







        </section>
      </span>
    </body>
  );
}

export default Login;