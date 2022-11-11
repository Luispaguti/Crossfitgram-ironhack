import React, { useContext, useState, useEffect } from 'react';
import * as streamService from '../../../../services/crossfit-service';
import StreamItem from '../stream-item/streamItem';
import { AuthContext } from '../../../../contexts/AuthContext'
import'../stream-list-profile/StreamListProfile.css'


function StreamListProfile() {
  const value = useContext(AuthContext);
  const [streams, setStreams] = useState([]); 
  
  useEffect(() => {
    streamService.getProfileStreams(value.user.id) // aqui irá el get wood detail pero no me sale nada
      .then(streams => setStreams(streams))
      .catch(error => console.error(error));
  }, [value.user.id])

// cuando ponemos un array vación le estoy indicando que solo lo quiero cargarlo la primera vez que se renderiza el componente
//es decir  se renderiza el componente , me voy al backend y me traigo la información


//BORRADO DE WOOD
// para borrar una tarea, necesito que mi componente WoodItem,manipule algo que está en el padre en Woodlist, no puede a noser..
//a noser que el padre defina una función y se la pase al hijo,
//el padre va a definir la función deleteFromList que recibe un wood
//borrar una tarea pensando en estados es lo mismo que convertir el WoodList, en un WoodList sin esa tarea
//para eso recorres los woods y si esta es igual no la metes en el nuevo listado
//esa función es el filter; convierto el setWoods( el listado) en el mismo listado filtrado con aquellos que no sean la tarea
// ahora esta función se la tengo que pasar al hijo y que la llame el hijo cuando haga click

// const deleteFromList = (wood) => {
//   setWoods(woods.filter((id) => id !== wood.id))
// }

if(!streams) return <>no llegan streams</>
  return(
    <div className='streamlist'>
      {streams.slice(0).reverse().map(stream =>
        <StreamItem  {...stream} key={stream.id} />
        )}
    </div>
  )
}

export default StreamListProfile;