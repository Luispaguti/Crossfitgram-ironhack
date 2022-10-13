import React, { useState, useEffect } from 'react';
import * as streamService from '../../../../services/crossfit-service';
import WoodItem from '../wood-item/WoodItem';
// import '../wood-list/WoodList.css'


function WoodList() {
  const [woods, setWoods] = useState([]); 
  
  useEffect(() => {
    streamService.getWoods()
      .then(woods => setWoods(woods))
      .catch(error => console.error(error));
  }, [])
// cuando ponemos un array vación le estoy indicando que solo lo quiero cargarlo la primera vez que se renderiza el componente
//es decir  se renderiza el componente , me voy al backend y me traigo la información
  if(!woods) return <></>
  console.log(woods)
  return(
    <body>
      {woods.map(wood =>
        <WoodItem  {...wood} key={wood.id} />
        )}
    </body>
  )
}

export default WoodList;