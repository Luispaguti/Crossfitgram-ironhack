import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as streamService from '../../../../services/crossfit-service'
import WoodList from '../../woods/wood-list/WoodList';

function UserWoods() {
  const [ wood, setWood] = useState();
  const { id } = useParams()

  useEffect(() => {
         streamService.getProfileWoods(id)
          .then(wood => setWood(wood))
          .catch(error => console.error(error))
       }, [id])
  return (
    <div>
      <WoodList/>
    </div>
  )
}

export default UserWoods

