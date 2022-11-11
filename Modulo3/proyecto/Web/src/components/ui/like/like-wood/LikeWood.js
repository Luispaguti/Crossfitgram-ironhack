// import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
// import * as streamService from '../../../../services/crossfit-service';
// import { HeartIcon, FilledHeartIcon  } from '../../icons/Icon'


  
// function WoodLike({  decLikes, incLikes }) {
//   const [likes, setLikes] = useState();
//   const { id } = useParams()


//   const handleLike = () => {
//     if (likes) {
//       setLikes(false); // no entiendo este false
//       decLikes(); //-1
//       streamService.likeWood(id)
//       .then(console.log(likes))
//       .catch(error => console.error(error))
//     } else {
//       incLikes();//+1
//       setLikes(true);
//       streamService.likeWood(id)
//       .then(console.log (likes))
//       .catch(error => console.error(error))
//     }
//   };
 
//   if (likes) {
//     return <FilledHeartIcon onClick={handleLike} />;
//   }

//   if (!likes) {
//     return <HeartIcon onClick={handleLike} />;
//   }
 
   
// }

// export default WoodLike