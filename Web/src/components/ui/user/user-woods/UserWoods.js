import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as streamService from '../../../../services/crossfit-service'
import WoodListProfile from '../../woods/wood-list-profile/WoodListProfile';
import WoodList from '../../woods/wood-list/WoodList';
import WoodItem from '../../woods/wood-item/WoodItem'

function UserWoods() {
  const [ wood, setWood] = useState();
  const { id } = useParams()

  useEffect(() => {
         streamService.getProfileWoods(id)
          .then(wood => setWood(wood))
          .catch(error => console.error(error))
       }, [id])

    if (!wood) return <></>
  return (
    <body >
      {wood.slice(0).reverse().map(wood =>
        <WoodItem {...wood} key={wood.id} />
        )}
      
    </body>
  )
}

export default UserWoods

