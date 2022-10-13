import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import * as streamService from '../../services/crossfit-service'

function LoginScreen() {
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
    streamService.authenticate(data)
    // si hago un console.log de data me llega el email y el password del usuario
      .then((response) => {
        value.setUser(response.data);
        //response.data= datos del usuario, esto lo guardo en el estado del contexto gracias al value
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
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-user fa-fw"></i>
          </span>
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

        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-key fa-fw"></i>
          </span>
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

        <div className="d-grid mt-2">
          <button className="btn btn-primary" type="submit" disabled={!isValid}>
            Login
          </button>

          {/* <a
            className="btn btn-danger mt-2"
            href="http://localhost:3001/api/v1/authenticate/slack"
          >
            <i className="fa fa-slack me-2"></i>
            Login with Slack
          </a> */}
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;