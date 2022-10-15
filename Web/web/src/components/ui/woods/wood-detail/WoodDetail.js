import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as streamService from '../../../../services/crossfit-service';
import WoodItem from '../wood-item/WoodItem';
import '../wood-detail/WoodDetail.css'


function WoodDetail({ title, scaled, image, categories, author, description, exercise, location, reps, weight, time, kcal, score, effort }) {
  const [wood, setWood] = useState();
  const { id } = useParams()


  useEffect(() => {
    streamService.getWoodDetail(id)
      .then(wood => setWood(wood))
      .catch(error => console.error(error))
  }, [id])

  const handleLike = () => {
    streamService.likeWood(id).then((data) => {
      setWood({
        ...wood,
        likes: data.likes ? wood.likes + 1 : wood.likes - 1
      })
    });
  };

  // if (likes) {
  //     return <FilledHeartIcon onClick={handleLike} />;
  //   }

  //   if (!likes) {
  //     return <HeartIcon onClick={handleLike} />;
  //   }


  if (!wood) return <></>
  return (


    <section className="main">
      <div className="wrapper">
        <div className="left-col">

          <div className="post">
            <div className="user">
              <div className="info">
                <div class="profile-pic"><img src={wood.author?.image} alt="title" /></div>
                <p className="username">{wood.author?.name}</p>
              </div>
              <img src="img/option.PNG" class="options" alt=""></img>
            </div>

            <img className="post-image" src={wood.image} alt={title} />

            <div class="post-content">
              <div class="reaction-wrapper">
                <img src="img/like.PNG" class="icon" alt="" />
                <img src="img/comment.PNG" class="icon" alt="" />
                <img src="img/send.PNG" class="icon" alt="" />
                <img src="img/save.PNG" class="save icon" alt="" />
              </div>
              <button className="btn btn-danger" onClick={handleLike}>
                <i className="fa fa-heart me-2"></i>
                {wood.likes}
              </button>
              <p class="description"><span>{wood.author?.name}</span>{wood.description}</p>
              <p class="description"><span>{wood.scaled}</span></p>
              <p class="description"><span>Category</span>{wood.categories}</p>
              <p class="description"><span>Movements</span>{wood.exercise}</p>
              <p class="description"><span>Repeticiones</span>{wood.reps}</p>
              <p class="description"><span> Peso</span>{wood.weight}</p>
              <p class="description"><span>Time</span>{wood.time}</p>
              <p class="description"><span>Calorías quemadas</span>{wood.kcal}</p>
              <p class="description"><span>Esfuerzo percibido</span>{wood.effort}</p>
              <p class="post-time">{wood.location}</p>


              {/* <li onClick={handleClick} class="post-time">Delete</li> */}

              <Link to={`/`}><p class="post-time">back</p></Link>
            </div>
            <div class="comment-wrapper">
              <input type="text" class="comment-box" placeholder="Add a comment" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )

}






export default WoodDetail