import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as streamService from '../../../../services/crossfit-service';
import StreamItem from '../stream-item/streamItem';



function StreamDetail({ title, image, views ,author, description}) {
  const [ stream, setStream ] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    streamService.getStreamDetail(id)
      .then(stream => setStream(stream))
      .catch(error => console.error(error))
  }, [id])

  if(!stream) return <></>

  return (
    <section className="main">
        <div className="wrapper">
          <div className="left-col">
            
              <div className="post">
                  <div className="user">
                    <div className="info">
                      <div class="profile-pic"><img src="img/cover 1.png" alt=""/></div>
                        <p className="username">{stream.author.name}</p>
                    </div>
                    <img src="img/option.PNG" class="options" alt=""></img>
                  </div>

                  <img className="post-image" src={stream.image} alt={stream.title} />

                  <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="img/like.PNG" class="icon" alt=""/>
                        <img src="img/comment.PNG" class="icon" alt=""/>
                        <img src="img/send.PNG" class="icon" alt=""/>
                        <img src="img/save.PNG" class="save icon" alt=""/>
                    </div>
                    <p class="likes">1,022 likes</p>
                    <p class="description"><span>{stream.author.name}</span>{stream.description}</p>
                    <Link to={`/`}><p class="post-time">Back</p></Link>
                </div>
                <div class="comment-wrapper">
                    <img src="img/smile.PNG" class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                </div>
              </div>
          </div>
        </div>
      </section>
  )
}

export default StreamDetail