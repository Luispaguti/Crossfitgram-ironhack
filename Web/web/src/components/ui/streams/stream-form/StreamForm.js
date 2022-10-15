import React from 'react'
import { useForm } from 'react-hook-form';
import * as streamsService from '../../../../services/crossfit-service';
import { useNavigate } from 'react-router-dom'; // el useNavigate lo que me devuelve es un hook que me va a permitir obtener un objeto por el cual me voy a poder mover por el react router 

function StreamForm() {
  const navigation = useNavigate();
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({ mode: 'onBlur' });

  const handleCreateStreamSubmit = (data) => {
    console.log(data);
    streamsService.createStream(data)
      .then(stream => 
        navigation('/'))
      .catch(error => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          // en el caso en que tenga algunos de esos errores , por cada una de las claves actualiza un mensaje de error
          //Object.keys, para sacar todas las claves de un objeto
          Object.keys(error.response.data.errors)
            // este Object.keys me devuelve un array con cada una de las claves
            // pues si yo por cada una de las claves yo quiero hacer un set error, 
            //le meto un foreach (no utilizo el map, xq con el map tambien recorro pero además transformo)
            .forEach((error) => setError(error, { type: 'custom', message: errors[error].message }))
        }
        //hay una relacion directa con el backend
      });
  }


  return (
    <form onSubmit={handleSubmit(handleCreateStreamSubmit)}>

      <div className="input-group mb-3">
        <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
        <input type="text" className={`form-control ${errors.image ? 'is-invalid' : ''}`} placeholder="image description..."
          {...register('image', {
            // react-hook-dom me va a dar el objeto como yo lo haya formado en el register en mi casa description
            required: 'image is required',
            // maxLength: { value: 5, message:"Escribe mínimo 10 letras, no seas perezoso"}
          })} />
        {errors.image && (<div className="invalid-feedback">{errors.image.message}</div>)}
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
        <input type="text" className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder="Stream description..."
          {...register('description', {
            // react-hook-dom me va a dar el objeto como yo lo haya formado en el register en mi casa description
            required: 'description is required',
            // maxLength: { value: 5, message:"Escribe mínimo 10 letras, no seas perezoso"}
          })} />
        {errors.description && (<div className="invalid-feedback">{errors.description.message}</div>)}
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-edit fa-fw'></i></span>
        <input type="text" className="form-control"
          {...register('location', {
            required: 'location is required',
          })}
        />
      </div>

      <div className="d-grip mt-2">
        <button className="btn btn-primary" type='submit' disabled={!isValid}>Create Stream</button>
      </div>
    </form>
  )
}

export default StreamForm

//<button className="btn btn-primary" type='submit' disabled={!isValid}>Create Stream</button> solo se puede pinchar en el caso de que el formualrio sea valido
//setError;por cada error que ha aparecido en el back end tengo que plasmarlo en el front. me está dando una función para q yo pueda actualizar cada uno de esos errores
// si esto estaba mal en la clase  className={`form-control ${errors.description ? 'is-invalid': ''}`} le añado la clase is invalid
// para evitar que me haga el submit del formulario(me lo mande a la URl) utilizo el handelsubmit