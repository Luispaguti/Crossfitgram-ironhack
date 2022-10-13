import React from "react";
import { Link } from "react-router-dom";
import '../wood-item/WoodItem.css'


function WoodItem({ title, scaled, image, categories, id, author, description, exercise, location, reps, weight, time, kcal, score, effort, classType }) {


  return (
    <>
      <section className="main">
        <div className="wrapper">
          <div className="left-col">
            
              <div className="post">
                  <div className="user">
                    <div className="info">
                      <div class="profile-pic"><img src="img/cover 1.png" alt=""/></div>
                        <p className="username">{author.name}</p>
                    </div>
                    <img src="img/option.PNG" class="options" alt=""></img>
                  </div>

                  <img className="post-image" src={image} alt={title} />

                  <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="img/like.PNG" class="icon" alt=""/>
                        <img src="img/comment.PNG" class="icon" alt=""/>
                        <img src="img/send.PNG" class="icon" alt=""/>
                        <img src="img/save.PNG" class="save icon" alt=""/>
                    </div>
                    <p class="likes">1,012 likes</p>
                    <p class="description"><span>{author.name}</span>{description}</p>
                    <p class="description"><span>{scaled}</span></p>
                    <p class="description"><span>Category</span>{categories}</p>
                    <p class="description"><span>Movements</span>{exercise}</p>
                    <p class="description"><span>Repeticiones</span>{reps}</p>
                    <p class="description"><span> Peso</span>{weight}</p>
                    <p class="description"><span>Time</span>{time}</p>
                    <p class="description"><span>Calorías quemadas</span>{kcal}</p>
                    <p class="description"><span>Esfuerzo percibido</span>{effort}</p>
                    <p class="post-time">{location}</p>
                    <Link to={`/wood/${id}`}><p class="post-time">Detail</p></Link>
                </div>
                <div class="comment-wrapper">
                    <img src="img/smile.PNG" class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                    <button class="comment-btn">post</button>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WoodItem;