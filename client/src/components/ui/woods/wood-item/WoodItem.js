import { Link } from "react-router-dom";
import '../wood-item/WoodItem.css'
import WoodLike from '../../like/like-wood/LikeWood'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import streamService from "../../../../services/crossfit-service";
import '../wood-detail/WoodDetail.css'


function WoodItem({ title, scaled, image, category, id, author, description, exercise, location, reps, weight, time, kcal, score, effort, classType }) {

  // const { woodId } = useParams()





  // const handleClick = () => {
  //   deleteFromList(id)
  // }

  //LIKE
  // voy a crear una función en el padre (WoodItem) y se la paso al hijo (WoodLike)


  // const [likes, setLikes] = useState(0);
  
  // // const [likes, setLikes] = useState(wood.likes);

  // const incLikes = () => setLikes(likes + 1);
  // const decLikes = () => setLikes(likes - 1);

  // console.log(likes)
  console.log(author?.image)

  return (
    <>
      <section className="main">
        <div className="wrapper">
          <div className="left-col">

            <div className="posts">
              <div className="user">
                <div className="info">
                  <div class="profile-pic"><img  src={author?.image} class="rounded-circle-img" height="92" alt={title} loading="lazy"/></div>
                  <p className="username">{author?.name}</p>
                </div>
              </div>

              <img className="post-image" src={image} alt={image} />

              <div class="post-content">
                <div class="reaction-wrapper">
                  <img src="img/like.PNG" class="icon" alt="" />
                  <img src="img/comment.PNG" class="icon" alt="" />
                  <img src="img/send.PNG" class="icon" alt="" />
                  <img src="img/save.PNG" class="save icon" alt="" />
                </div>
                
                <div class="mb-3 mt-4">
                <p class="description"><span> {author?.name} ha completado el siguiente entrenamiento :</span></p>
                <p class="description"><span>En modalidad</span>{scaled}</p>
                <p class="description"><span>Un Wod de : </span>{category}</p>
                <p class="description"><span>Con los movimientos :</span>{exercise}</p>
                <p class="description"><span>El número de repeticiones ha sido de :</span>{reps}</p>
                <p class="description"><span> Con un peso de </span>{weight} kg</p>
                <p class="description"><span>En un tiempo de </span>{time} minutos</p>
                <p class="description"><span>Quemando </span>{kcal} calorías</p>
                {/* <p class="description"><span>El esfuerzo perdibido por {author?.name} ha sido :</span>{effort}</p> */}
                <p class="description"><span>Anotaciones</span>{description}</p>
                <p class="description"><span>Puntuacion del Wood</span>{score} puntos</p>
                </div>


                <div className="detailback">
                <Link to={`/wood/${id}`} className="linkdetail"><p class="descriptiondetail">Detail ...</p>
                </Link><Link to={`/`} className="linkdetail"><p class="descriptiondetail">Back ...</p></Link>
    
                </div>
                

                

                
              

                  {/* <li onClick={handleClick} class="post-time">Delete</li> */}

                  
                </div>
                
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default WoodItem;