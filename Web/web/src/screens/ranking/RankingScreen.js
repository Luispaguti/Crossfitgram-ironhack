import React, { useEffect, useState } from 'react'
import WoodItem from '../../components/ui/woods/wood-item/WoodItem';
import * as streamService from '../../services/crossfit-service'
import "../ranking/RankingScreen.css"

function Ranking() {

  const [woods, setWoods] = useState([]);

  useEffect(() => {
    streamService.getRanking()
      .then(woods => setWoods(woods))
      .catch(error => console.error(error));
  }, [])




  return (
   
    <div>
       <>
       <div className='rankingbody'>
         <h1 className="rankinglist">Ranking List</h1>
         <div className="contentList">

         {woods.map(wood =>
         <div>
      
       
        
        
          <div className="layerList">
             <h2 className="rankingposition">{woods.length}</h2>
               <div className="woodsDetail">
            
             
                
                  <h3 className="woodsauthor">{wood.author}</h3>
                  <h4 className="woodsscore">{wood.score}</h4>
                  <img src={wood.image} />
                  <p>{wood.scaled}</p>
                  <p>{wood.category}</p>
                  <p>{wood.exercise}</p>
                  <p>{wood.reps}</p>
                  <p>{wood.weight}</p>
                  <p>{wood.time}</p>
                  <p>{wood.kcal}</p>

                  <div>



                  </div>
                  </div>
                  
                </div>
             
            </div>
             )}
          </div>
          
        </div>

</>
      </div>
     







  )
}

export default Ranking