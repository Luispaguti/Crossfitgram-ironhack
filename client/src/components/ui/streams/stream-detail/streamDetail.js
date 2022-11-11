import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as streamService from '../../../../services/crossfit-service';
import DetailButton from '../../button/DetailButton';
import StreamItem from '../stream-item/streamItem';
import"../stream-detail/streamDetail.css"



function StreamDetail({ title, image, views, author, description }) {
  const [stream, setStream] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    streamService.getStreamDetail(id)
      .then(stream => setStream(stream))
      .catch(error => console.error(error))
  }, [id])

  const handleLike = () => {
    streamService.likeStream(id).then((data) => {
      setStream({
        ...stream,
        likes: data.likes ? stream.likes + 1 : stream.likes - 1
      })
    });
  };

  const handleLikeu = () => {
    streamService.likeuStream(id).then((data) => {
      setStream({
        ...stream,
        likeus: data.likeus ? stream.likeus + 1 : stream.likeus - 1
      })
    });
  };

  const handleNewComment = (e) => {
    e.preventDefault();
    const form = e.target;

    streamService.commentStream(id, form.text.value).then((comment) => {
      setStream({
        ...stream,
        comments: [...stream.comments, comment],
      });
    });
  };

  if (!stream) return <></>

  return (
    <section className="mainmi">
      <div className="wrapper">
        <div className="left-col">

          <div className="post">
            <div className="user">
              <div className="info">
              <div class="profile-pic"><img className='imgdetail' src={stream.author?.image} alt={title} /></div>
                <p className="username">{stream.author.name}</p>
              </div>
              <img src="img/option.PNG" class="options" alt=""></img>
            </div>

            <img className="post-image" src={stream.image} alt={stream.title} />

            <div class="post-content">
              <div class="reaction-wrapper">
                <img src="img/like.PNG" class="icon" alt="" />
                <img src="img/comment.PNG" class="icon" alt="" />
                <img src="img/send.PNG" class="icon" alt="" />
                <img src="img/save.PNG" class="save icon" alt="" />
              </div>
              <button className="btn btn-danger me-2" onClick={handleLike}>
                <i className="fa fa-heart me-2"></i>
                {stream.likes}
              </button>

              <button className="botonlikeu" onClick={handleLikeu}>
              <i class="fa-solid fa-mask me-1"> </i>
                {stream.likeus} Crush 
              </button>


              


              <div className="mb-5 mt-4">
              <p class="description"><span>{stream.author.name}</span>{stream.description}</p>
              </div>
           

            <form onSubmit={handleNewComment} className="mb-3">
              <textarea
                name="text"
                className="form-control mb-2"
                placeholder="Add Comment..."
              />
              <button type="submit" className="btn btn-sm btn-warning">
                Comment
              </button>
            </form>

            {stream.comments.slice(0).reverse().map((comment) => (
              <div className="mb-3  py-1">
                <p class="descriptions"><span className='usernames'>{comment.user.name}</span> : {comment.text}</p>

              </div>
            ))}

          <div><DetailButton title="Back..." path={`/`}/></div>

          </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default StreamDetail