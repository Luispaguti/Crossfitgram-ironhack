import React, { useState, useEffect } from 'react';
import * as streamService from '../../../../services/crossfit-service';
import StreamItem from '../stream-item/streamItem';
import { Link } from 'react-router-dom';
import'../stream-list/StreamList.css'

function StreamList() {
  const [streams, setStreams] = useState([]); // 
  
  useEffect(() => {
    streamService.getStreams()
      .then(streams => setStreams(streams))
      .catch(error => console.error(error));
  }, [])
// cuando ponemos un array vación le estoy indicando que solo lo quiero cargarlo la primera vez que se renderiza el componente
//es decir  se renderiza el componente , me voy al backend y me traigo la información
  if(!streams) return <></>

  return(
    <div className='streamlist'>
      {streams.slice(0).reverse().map(stream =>
        <StreamItem  {...stream} key={stream.id} />
        )}
    </div>
  )



}

export default StreamList