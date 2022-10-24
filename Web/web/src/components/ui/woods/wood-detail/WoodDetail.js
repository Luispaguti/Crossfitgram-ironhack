import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as streamService from '../../../../services/crossfit-service';
import WoodItem from '../wood-item/WoodItem';
import '../wood-detail/WoodDetail.css'
 import { HeartIcon, FilledHeartIcon ,FilledBookmarkIcon, BookmarkIcon, CheckIcon   } from '../../icons/Icon'
import DetailButton from '../../button/DetailButton';


function WoodDetail(title) {
  const [wood, setWood] = useState(null);
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

  const handleVerify = () => {
    
    streamService.verifyWood(id)
    .then((data) => {
      setWood({
        ...wood, 
        verif: data.verif ? wood.verif + 1 && wood.verif==false : wood.verif==false && - 1
      })
      console.log(wood.verif)
    });
  }; 
  


  const handleNewComment = (e) => {
    e.preventDefault();
    const form = e.target;

    streamService.commentWood(id, form.text.value).then((comment) => {
      setWood({
        ...wood,
        comments: [...wood.comments, comment],
      });
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


    <section className="mainmi">
      <div className="wrapper">
        <div className="left-col">

          <div className="post">
            <div className="user">
              <div className="info">
                <div class="profile-pic"><img className='imgdetail' src={wood.author?.image} alt={title} /></div>
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
              

              <button className="btn btn-warning " onClick={handleVerify}>
               <i class="fa-solid fa-medal"></i>
              </button>

                <div>
                  {wood.verif ? (
                    <CheckIcon onClick={handleVerify} />
                    && <i class="dumbel fa-solid fa-dumbbell">verificado</i>
                  ) : ( 
                    <CheckIcon onClick={handleVerify} />
                    && <i class="dumb fa-solid fa-dumbbell"> no verificado</i>
                  )

                  }
                  
                </div>
                <div  className="mb-3 mt-3">
              <p class="description"><span>{wood.author?.name}</span>{wood.description}</p>
              <p class="description"><span>Modalidad</span>{wood.scaled}</p>
              <p class="description"><span>Categoría</span>{wood.category}</p>
              <p class="description"><span>Movimientos</span>{wood.exercise}</p>
              <p class="description"><span>Repeticiones</span>{wood.reps}</p>
              <p class="description"><span> Peso</span>{wood.weight} kg</p>
              <p class="description"><span>En un tiempo de</span>{wood.time} minutos</p>
              <p class="description"><span>Calorías quemadas</span>{wood.kcal} kcal</p>
  
              <p class="description"><span>Puntuacion del Wood</span>{wood.score} puntos</p>
              <p class="post-time">{wood.location}</p>
              <p class="description"><span></span>{wood.effort}</p>


              {/* <li onClick={handleClick} class="post-time">Delete</li> */}

              </div>

              <form onSubmit={handleNewComment} className="mb-3 mt-3">
              <textarea
                name="text"
                className="form-control mb-2"
                placeholder="Add Comment..."
              />
              <button type="submit" className="btn btn-sm btn-warning">
                Comment
              </button>
            </form>

            {wood.comments.map((comment) => (
              <div className="mb-3 py-1">
                <p class="descriptions"><span>{comment.user.name}</span> <br />{comment.text}</p>
            
            </div>
            ))}

            <DetailButton title="Back ..." path="/"/>

            </div>
            
          

           
          </div>
        </div>
      </div>
    </section>

  )

}






export default WoodDetail