import { Link } from "react-router-dom";
import '../wood-item/WoodItem.css'
import WoodLike from '../../like/like-wood/LikeWood'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import streamService from "../../../../services/crossfit-service";
import '../wood-detail/WoodDetail.css'


function WoodItem({ title, scaled, image, categories, id, author, description, exercise, location, reps, weight, time, kcal, score, effort, classType }) {

  const { woodId } = useParams()





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

  return (
    <>
      <section className="main">
        <div className="wrapper">
          <div className="left-col">

            <div className="post">
              <div className="user">
                <div className="info">
                  <div class="profile-pic"><img src={author?.image} alt="title" /></div>
                  <p className="username">{author?.name}</p>
                </div>
                <img src="img/option.PNG" class="options" alt=""></img>
              </div>

              <img className="post-image" src={image} alt={title} />

              <div class="post-content">
                <div class="reaction-wrapper">
                  <img src="img/like.PNG" class="icon" alt="" />
                  <img src="img/comment.PNG" class="icon" alt="" />
                  <img src="img/send.PNG" class="icon" alt="" />
                  <img src="img/save.PNG" class="save icon" alt="" />
                </div>
                <p class="likes">Likes </p>
                <p class="description"><span>{author?.name}</span>{description}</p>
                <p class="description"><span>{scaled}</span></p>
                <p class="description"><span>Category</span>{categories}</p>
                <p class="description"><span>Movements</span>{exercise}</p>
                <p class="description"><span>Repeticiones</span>{reps}</p>
                <p class="description"><span> Peso</span>{weight}</p>
                <p class="description"><span>Time</span>{time}</p>
                <p class="description"><span>Calorías quemadas</span>{kcal}</p>
                <p class="description"><span>Esfuerzo percibido</span>{effort}</p>
                <p class="post-time">{location}</p>
              

                  {/* <li onClick={handleClick} class="post-time">Delete</li> */}

                  <Link to={`/wood/${id}`}><p class="post-time">Detail</p></Link>
                  <Link to={`/`}><p class="post-time">Home</p></Link>
                </div>
                
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default WoodItem;