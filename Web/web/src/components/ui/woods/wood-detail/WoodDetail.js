import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as streamService from '../../../../services/crossfit-service';
import WoodItem from '../wood-item/WoodItem';
import '../wood-detail/WoodDetail.css'
 import { HeartIcon, FilledHeartIcon ,FilledBookmarkIcon, BookmarkIcon   } from '../../icons/Icon'


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
              

                <div>
                  {wood.verif ? (
                    <FilledBookmarkIcon onClick={handleVerify} />
                  ) : ( 
                    <BookmarkIcon onClick={handleVerify} />
                  )

                  }
                  <p>Coach Check</p>
                </div>
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
            
            <hr />

            <h5>Comments</h5>

            <form onSubmit={handleNewComment} className="mb-3">
              <textarea
                name="text"
                className="form-control mb-2"
                placeholder="Add Comment..."
              />
              <button type="submit" className="btn btn-sm btn-primary">
                Comment
              </button>
            </form>

            {wood.comments.map((comment) => (
              <div className="mb-4 border-bottom py-2">
                <p>{comment.text}</p>
                <p>Por {comment.user.name}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>

  )

}






export default WoodDetail