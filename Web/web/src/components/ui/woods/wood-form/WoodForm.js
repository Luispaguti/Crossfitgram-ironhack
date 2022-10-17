import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // el useNavigate lo que me devuelve es un hook que me va a permitir obtener un objeto por el cual me voy a poder mover por el react router 
import * as woodsService from '../../../../services/crossfit-service'
import Select from 'react-select';
import excercises from '../../../../data/excercises'
import categories from '../../../../data/categories'
import efforts from '../../../../data/efforts'
import scaleds from '../../../../data/scaleds'
import'../wood-form/WoodForm.css'

// esta función de register esta devolviendo un JSON, y ese JSON va a devolver el onchange, el onblur..
//formState ; sirve para meter las validaciones
// isValid; con esto puedo hacer que no puedas pinchar en el formulario  hasta q no sea valido
//ahora voy a conectarlo al backend woodsService.createWood
// setError, me está dando una función para que yo pueda actualizar cada uno de esos errores

//para hacer un select, necesito instalarme la libreria react select
// controller linea 2
//el control de function WoodForm me está dando un acceso directo al estado de todo este formulario

function WoodForm() {
  const navigation = useNavigate();
  const { register, handleSubmit, setError, control, watch, formState: { errors, isValid } } = useForm({ mode: 'onTouched' });
  console.log('exercise', watch('exercise')); // con watch veo el valor de excercises
  // y lo que pasa es que coge el objeto entero tanto el value como el label
  //eso a nosotros no nos interesa nos interesa tener exclusivamente el valor 
  //para ello nos vamos al onChange de abajo

  // EL HANDEL SUBMIT ME OBLIGA A TENER UNA FUNCION MIA
  const handleCreateStreamSubmit = (data) => {
    console.log(data);
    woodsService.createWood(data) // lo conecto con el backend
      .then(wood => // una vez creado el wood lo voy a enviar a la list de woods
        navigation('/')) // aqui una vez creado puedes poner lo que quieras
      .catch(error => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          // en el caso en que tenga algunos de esos errores , por cada una de las claves actualiza un mensaje de error
          Object.keys(error.response.data.errors)//Object.keys, para sacar todas las claves de un objeto
            // este Object.keys me devuelve un array con cada una de las claves
            // pues si yo por cada una de las claves yo quiero hacer un set error, 
            //le meto un foreach (no utilizo el map, xq con el map tambien recorro pero además transformo)
            .forEach((error) => setError(error, { type: 'custom', message: errors[error].message }))
        }
        //hay una relacion directa con el backend
      });
  }


  return (



    <body className="createwoodbody">

      <form class="loginform" onSubmit={handleSubmit(handleCreateStreamSubmit)}>

        <div className="formmy">

          <h1 className="titlelogin">Crear mi Wood</h1>
          <p className="des-regist">Sube aquí tus mejores fotos y videos</p>

          <div className="logingroup">

            <input
              type="text"
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


          <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            name="scaled" // el name del input
            control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
              <div className="logingroup">
                <Select className="form-control p-0"
                  //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
                  value={scaleds.find((scaled) => scaled.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
                  //para que no coja 
                  onChange={(scaled) => onChange(scaled.map(scaled => scaled.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
                  onBlur={onBlur}
                  isMulti
                  options={scaleds}
                  styles={{ // control se refiere a la caja
                    control: (base) => ({
                      ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
                      border: 0
                    })
                  }}
                />

                {errors.scaled && (<div className="invalid-feedback">{errors.scaled.message}</div>)}
              </div>
            )}
          />






          <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            name="category" // el name del input
            control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
              <div className="logingroup">
                <Select className="form-control p-0"
                  //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
                  value={categories.find((category) => category.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
                  //para que no coja 
                  onChange={(category) => onChange(category.map(category => category.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
                  onBlur={onBlur}
                  isMulti
                  options={categories}
                  styles={{ // control se refiere a la caja
                    control: (base) => ({
                      ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
                      border: 0
                    })
                  }}
                />
                {errors.category && (<div className="invalid-feedback">{errors.category.message}</div>)}
              </div>
            )}
          />


          <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            name="exercise" // el name del input
            control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
              <div className="logingroup">
                <Select className="form-control p-0"
                  //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
                  value={excercises.find((excercise) => excercise.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
                  //para que no coja 
                  onChange={(exercise) => onChange(exercise.map(exercise => exercise.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
                  onBlur={onBlur}
                  isMulti
                  options={excercises}
                  styles={{ // control se refiere a la caja
                    control: (base) => ({
                      ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
                      border: 0
                    })
                  }}
                />
                {errors.exercise && (<div className="invalid-feedback">{errors.exercise.message}</div>)}
              </div>
            )}
          />




          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.reps ? "is-invalid" : ""}`}
              placeholder="reps..."
              {...register("reps", {
                required: "reps is required",
              })}
            />
            {errors.reps && (
              <div className="invalid-feedback">{errors.reps.message}</div>
            )}

          </div>

          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.weight ? "is-invalid" : ""}`}
              placeholder="weight..."
              {...register("weight", {
                required: "weight is required",
              })}
            />
            {errors.weight && (
              <div className="invalid-feedback">{errors.weight.message}</div>
            )}

          </div>


          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.time ? "is-invalid" : ""}`}
              placeholder="time..."
              {...register("time", {
                required: "time is required",
              })}
            />
            {errors.time && (
              <div className="invalid-feedback">{errors.time.message}</div>
            )}

          </div>


          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.kcal ? "is-invalid" : ""}`}
              placeholder="kcal..."
              {...register("kcal", {
                required: "kcal is required",
              })}
            />
            {errors.kcal && (
              <div className="invalid-feedback">{errors.kcal.message}</div>
            )}

          </div>


          <div className="logingroup">

            <input
              type="text"
              id="loginemail"
              className={`form-control ${errors.description ? "is-invalid" : ""}`}
              placeholder="description..."
              {...register("description", {
                required: "description is required",
                minLength: { value: 5, message: "Escribe mínimo 5 letras" }
              })}
            />
            {errors.description && (
              <div className="invalid-feedback">{errors.description.message}</div>
            )}

          </div>




            


        
          

          {/* <div className="input-group mb-3">
            <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
            <input type="text" className={`form-control ${errors.score ? 'is-invalid' : ''}`} placeholder="Puntuación..."
              {...register('kcal', {
              })} />
            {errors.score && (<div className="invalid-feedback">{errors.score.message}</div>)}
          </div> */}

          




          {/* <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-edit fa-fw'></i></span>
        <input type="text"  className={`form-control ${errors.thumbnail ? 'is-invalid' : ''}`} placeholder="Stream thumbnail..." 
        {...register('thumbnail', {
            required: 'thumbnail is required',
          // la libreria de react form con la función validate, me permite validar lo que yo quiera
              validate: (value) => {
                // este value nos tiene que devolver si esta bien o si está mal
                try {
                  new URL(value)
                  return true;
                  //en Javascript yo tengo la posibilidad de crear urls, si fallo en la creacion de la url es xq no es una url valida 
                } catch (error) {
                  return 'URL is not valid';
                }// lo metemos bajo una instrucción de try catch para que no reviente todo el programa
              }
          })} />
      </div> */}
          {/* 
      <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-edit fa-fw'></i></span>
        <textarea className="form-control" 
        {...register('location', {
            required: 'location is required',
          })} 
          />
      </div> */
            //<Select value={value} onChange={onChange} onBlur={onBlur}/>  salen de ahi abajo//
            // este select tiene que tener la clase form-control para que se ajuste al formulario, 
          }





          <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            name="effort" // el name del input
            control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
            render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
              <div className="logingroup">
                <Select className="form-control p-0"
                  //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
                  value={efforts.find((effort) => effort.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
                  //para que no coja 
                  onChange={(effort) => onChange(effort.map(effort => effort.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
                  onBlur={onBlur}
                  isMulti
                  options={efforts}
                  styles={{ // control se refiere a la caja
                    control: (base) => ({
                      ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
                      border: 0
                    })
                  }}
                />


                {errors.effort && (<div className="invalid-feedback">{errors.effort.message}</div>)}
              </div>
            )}
          />




          <button className="mybtn" type="submit" disabled={!isValid}>
            Publicar
          </button>








        </div>
      </form>


    </body>










    //   <div className="input-group mb-3">
    //     <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
    //     <input type="text" className={`form-control ${errors.image ? 'is-invalid' : ''}`} placeholder="Sube tu foto..."
    //       {...register('image', {
    //         // esta función de register esta devolviendo un JSON, y ese JSON va a devolver el onchange, el onblur..
    //         //luego le pongo el nombre del input en este caso description

    //       })} />
    //     {errors.image && (<div className="invalid-feedback">{errors.image.message}</div>)}
    //   </div>


    //   <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     name="scaled" // el name del input
    //     control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
    //       <div className="input-group mb-3">
    //         <span className="input-group-text"><i className='fa fa-list fa-fw'></i></span>
    //         <Select className="form-control p-0"
    //           //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
    //           value={scaleds.find((scaled) => scaled.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
    //           //para que no coja 
    //           onChange={(scaled) => onChange(scaled.map(scaled => scaled.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
    //           onBlur={onBlur}
    //           isMulti
    //           options={scaleds}
    //           styles={{ // control se refiere a la caja
    //             control: (base) => ({
    //               ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
    //               border: 0
    //             })
    //           }}
    //         />


    //         {errors.scaled && (<div className="invalid-feedback">{errors.scaled.message}</div>)}
    //       </div>
    //     )}
    //   />



    //   <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     name="category" // el name del input
    //     control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
    //       <div className="input-group mb-3">
    //         <span className="input-group-text"><i className='fa fa-list fa-fw'></i></span>
    //         <Select className="form-control p-0"
    //           //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
    //           value={categories.find((category) => category.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
    //           //para que no coja 
    //           onChange={(category) => onChange(category.map(category => category.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
    //           onBlur={onBlur}
    //           isMulti
    //           options={categories}
    //           styles={{ // control se refiere a la caja
    //             control: (base) => ({
    //               ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
    //               border: 0
    //             })
    //           }}
    //         />
    //         {errors.category && (<div className="invalid-feedback">{errors.category.message}</div>)}
    //       </div>
    //     )}
    //   />


    //   <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     name="exercise" // el name del input
    //     control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
    //       <div className="input-group mb-3">
    //         <span className="input-group-text"><i className='fa fa-list fa-fw'></i></span>
    //         <Select className="form-control p-0"
    //           //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
    //           value={excercises.find((excercise) => excercise.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
    //           //para que no coja 
    //           onChange={(exercise) => onChange(exercise.map(exercise => exercise.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
    //           onBlur={onBlur}
    //           isMulti
    //           options={excercises}
    //           styles={{ // control se refiere a la caja
    //             control: (base) => ({
    //               ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
    //               border: 0
    //             })
    //           }}
    //         />
    //         {errors.exercise && (<div className="invalid-feedback">{errors.exercise.message}</div>)}
    //       </div>
    //     )}
    //   />



    //   <div className="input-group mb-3">
    //     <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
    //     <input type="text" className={`form-control ${errors.reps ? 'is-invalid' : ''}`} placeholder="Cuantas repes..."
    //       {...register('reps', {
    //       })} />
    //     {errors.reps && (<div className="invalid-feedback">{errors.reps.message}</div>)}
    //   </div>

    //   <div className="input-group mb-3">
    //     <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
    //     <input type="text" className={`form-control ${errors.weight ? 'is-invalid' : ''}`} placeholder="Cuantos kilos le has metido..."
    //       {...register('weight', {
    //       })} />
    //     {errors.weight && (<div className="invalid-feedback">{errors.weight.message}</div>)}
    //   </div>


    //   <div className="input-group mb-3">
    //     <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
    //     <input type="text" className={`form-control ${errors.time ? 'is-invalid' : ''}`} placeholder="Cuanto has tardado..."
    //       {...register('time', {
    //       })} />
    //     {errors.time && (<div className="invalid-feedback">{errors.time.message}</div>)}
    //   </div>

    //   <div className="input-group mb-3">
    //     <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
    //     <input type="text" className={`form-control ${errors.kcal ? 'is-invalid' : ''}`} placeholder="Cuantas calorias has quemado..."
    //       {...register('kcal', {
    //       })} />
    //     {errors.kcal && (<div className="invalid-feedback">{errors.kcal.message}</div>)}
    //   </div>

    //   <div className="input-group mb-3">
    //     <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
    //     <input type="text" className={`form-control ${errors.score ? 'is-invalid' : ''}`} placeholder="Puntuación..."
    //       {...register('kcal', {
    //       })} />
    //     {errors.score && (<div className="invalid-feedback">{errors.score.message}</div>)}
    //   </div>

    //   <div className="input-group mb-3">
    //     <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
    //     <textarea className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder="Describe tu Wood..."
    //       {...register('description', {
    //         // esta función de register esta devolviendo un JSON, y ese JSON va a devolver el onchange, el onblur..
    //         //luego le pongo el nombre del input en este caso description
    //         required: 'description is required', // se le puede dar directamente la frase del fallo
    //         minLength: { value: 5, message: "Escribe mínimo 5 letras" }
    //       })} />
    //     {errors.description && (<div className="invalid-feedback">{errors.description.message}</div>)}
    //   </div>




    //   {/* <div className="input-group mb-1">
    //     <span className="input-group-text"><i className='fa fa-edit fa-fw'></i></span>
    //     <input type="text"  className={`form-control ${errors.thumbnail ? 'is-invalid' : ''}`} placeholder="Stream thumbnail..." 
    //     {...register('thumbnail', {
    //         required: 'thumbnail is required',
    //       // la libreria de react form con la función validate, me permite validar lo que yo quiera
    //           validate: (value) => {
    //             // este value nos tiene que devolver si esta bien o si está mal
    //             try {
    //               new URL(value)
    //               return true;
    //               //en Javascript yo tengo la posibilidad de crear urls, si fallo en la creacion de la url es xq no es una url valida 
    //             } catch (error) {
    //               return 'URL is not valid';
    //             }// lo metemos bajo una instrucción de try catch para que no reviente todo el programa
    //           }
    //       })} />
    //   </div> */}
    //   {/* 
    //   <div className="input-group mb-1">
    //     <span className="input-group-text"><i className='fa fa-edit fa-fw'></i></span>
    //     <textarea className="form-control" 
    //     {...register('location', {
    //         required: 'location is required',
    //       })} 
    //       />
    //   </div> */
    //     //<Select value={value} onChange={onChange} onBlur={onBlur}/>  salen de ahi abajo//
    //     // este select tiene que tener la clase form-control para que se ajuste al formulario, 
    //   }





    //   <Controller // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     name="effort" // el name del input
    //     control={control} // este controler necesita saber a que formulario me estoy refiriendo, eso de donde me lo saco del useform me saco el control
    //     render={({ field: { onBlur, onChange, value } }) => ( // render es una funcion q recibe como primer argumento un objeto y accedo a las cosas que me interesan del objeto, y lo que me interesa esta en field y es onblur, onchange y value  
    //       <div className="input-group mb-3">
    //         <span className="input-group-text"><i className='fa fa-list fa-fw'></i></span>
    //         <Select className="form-control p-0"
    //           //la libreria necesita que el value sea tanto el objeto de value como el de label, necesita esos dos atributos , para ello podemos ir a buscarlo al data
    //           value={efforts.find((effort) => effort.value === value)} // el criterio de busqueda que utilizo es que el value que me viene de la libreria de react hook form sea igual a alguno de los values de data, el primero que lo cumpla el find me devuelve el objeto  
    //           //para que no coja 
    //           onChange={(effort) => onChange(effort.map(effort => effort.value))} // gracias a esto de un array de objetos que tiene label y value paso a un array de strings simplemente con los values
    //           onBlur={onBlur}
    //           isMulti
    //           options={efforts}
    //           styles={{ // control se refiere a la caja
    //             control: (base) => ({
    //               ...base, // esa base pisada, es decir lo que ya venia en los estilos y ahora lo que quiero tocar yo
    //               border: 0
    //             })
    //           }}
    //         />


    //         {errors.effort && (<div className="invalid-feedback">{errors.effort.message}</div>)}
    //       </div>
    //     )}
    //   />



    //   <div className="d-grip mt-2">
    //     <button className="btn btn-primary" type='submit' disabled={!isValid}>Create Stream</button>
    //   </div>
    // </form>
  )
}

export default WoodForm

//<button className="btn btn-primary" type='submit' disabled={!isValid}>Create Stream</button> solo se puede pinchar en el caso de que el formualrio sea valido
//setError;por cada error que ha aparecido en el back end tengo que plasmarlo en el front. me está dando una función para q yo pueda actualizar cada uno de esos errores
// si esto estaba mal en la clase  className={`form-control ${errors.description ? 'is-invalid': ''}`} le añado la clase is invalid
// para evitar que me haga el submit del formulario(me lo mande a la URl) utilizo el handelsubmit