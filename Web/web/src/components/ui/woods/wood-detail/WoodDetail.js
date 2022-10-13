import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as streamService from '../../../../services/crossfit-service';
import WoodItem from '../wood-item/WoodItem';


function WoodDetail() {
  const { id } = useParams()
  const [ wood, setWood] = useState();

  useEffect(() => {
    streamService.getWoodDetail(id)
      .then(wood => setWood(wood[id]))
      .catch(error => console.error(error))
  }, [id])

  return (
    <>
      { stream 
        ? 
          <ul>
            <li>{wood.description}</li>
            <li>{wood.image}</li>
            <li>{wood.author.name}</li>
          </ul>
        : 
          <p>Caargando...</p>
      }
</>
  )
}

export default WoodDetail