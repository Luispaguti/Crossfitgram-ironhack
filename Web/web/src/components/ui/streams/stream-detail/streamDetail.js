import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as streamService from '../../../../services/crossfit-service';
import StreamItem from '../stream-item/stream-item';


function StreamDetail() {
  const { id } = useParams()
  const [ stream, setStream] = useState();

  useEffect(() => {
    streamService.getStreamDetail(id)
      .then(stream => setStream(stream[id]))
      .catch(error => console.error(error))
  }, [id])

  return (
    <>
      { stream 
        ? 
          <ul>
            <li>{stream.description}</li>
            <li>{stream.image}</li>
            <li>{stream.author.name}</li>
          </ul>
        : 
          <p>Caargando...</p>
      }
</>
  )
}

export default StreamDetail