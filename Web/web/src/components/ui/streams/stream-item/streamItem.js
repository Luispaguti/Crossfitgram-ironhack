import React from "react";
import { Link } from "react-router-dom";
import '../stream-item/streamItem.css'


function StreamItem({ title, image, views, id ,author, description}) {


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
  
                    
                    <p class="description"><span>{author.name} ha subido esta foto</span></p>
                    <p class="description"><span>Descripción</span>{description}</p>
                    <p class="description"><span>En </span>{author.box}</p>
                    <p class="description"><span>Localidad</span>{author.location}</p>
      
                    <Link to={`/stream/${id}`}><p class="description">Detail</p></Link>
                    <Link to={`/`}><p class="description">Home</p></Link>
                  </div>
                
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StreamItem;