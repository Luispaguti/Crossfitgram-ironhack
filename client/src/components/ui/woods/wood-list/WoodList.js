import React, { useState, useEffect } from 'react';
import * as streamService from '../../../../services/crossfit-service';
import WoodItem from '../wood-item/WoodItem';
import '../wood-list/WoodList.css'


function WoodList() {
  const [woods, setWoods] = useState([]); 
  
  useEffect(() => {
    streamService.getWoods()
      .then(woods => setWoods(woods))
      .catch(error => console.error(error));
  }, [])
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

  if(!woods) return <></>
  console.log(woods)
  return(
    <body className='bodywoodlist'>
      <div className='woodlist'>
      {woods.slice(0).reverse().map(wood =>
        <WoodItem {...wood} key={wood.id} />
        )}
      </div>
      
    </body>
  )
}

export default WoodList;