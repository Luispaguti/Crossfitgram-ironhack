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

            {woods.map((wood,i) =>
              <div>




                <div className="layerList">
                  <h2 className="rankingposition">{i+1}</h2>
                  <div className="woodsDetail">






                    <h3 className="woodsauthor">{wood.author.name}</h3>
                    <h4 className="woodsscore">Score: {wood.score}</h4>
                    <img src={wood.image} />


                    {/* <p class="description"><span>{wood.scaled}</span></p> */}
                    <p class="description"><span>Category</span>{wood.category}</p>
                    <p class="description"><span>Movements</span>{wood.exercise}</p>
                    <p class="description"><span>Repeticiones</span>{wood.reps}</p>
                    <p class="description"><span> Peso</span>{wood.weight} kg</p>
                    <p class="description"><span>Time</span>{wood.time} minutos</p>
                    {/* <p class="description"><span>Calorías quemadas</span>{wood.kcal}</p> */}

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