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
                    <div class="reaction-wrapper">
                        <img src="img/like.PNG" class="icon" alt=""/>
                        <img src="img/comment.PNG" class="icon" alt=""/>
                        <img src="img/send.PNG" class="icon" alt=""/>
                        <img src="img/save.PNG" class="save icon" alt=""/>
                    </div>
                    <p class="likes">1,022 likes</p>
                    <p class="description"><span>{author.name}</span>{description}</p>
                    <Link to={`/stream/${id}`}><p class="post-time">Detail</p></Link>
                </div>
                
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StreamItem;