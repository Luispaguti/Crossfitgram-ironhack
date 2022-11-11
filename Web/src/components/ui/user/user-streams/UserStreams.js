import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as streamService from '../../../../services/crossfit-service'
import StreamList from '../../streams/stream-list/StreamList';

function UserStreams() {
  const [ stream, setStream] = useState();
  const { id } = useParams()

  useEffect(() => {
         streamService.getProfileStreams(id)
          .then(stream => setStream(stream))
          .catch(error => console.error(error))
       }, [id])
  return (
    <div>
      <StreamList/>
    </div>
  )
}

export default UserStreams