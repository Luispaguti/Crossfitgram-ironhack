import UserStreams from '../../components/ui/user/user-streams/UserStreams'
import UserWoods from '../../components/ui/user/user-woods/UserWoods'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as streamService from '../../services/crossfit-service'
import { HeartIcon, FilledHeartIcon, FilledBookmarkIcon, BookmarkIcon } from '../../components/ui/icons/Icon'
import '../user/UserProfileScreen.css'

function UserProfileScreen() {

  const [user, setUser] = useState(null);
  const { id } = useParams()


  useEffect(() => {
    streamService.getProfile(id)
      .then(user => setUser(user))
      .catch(error => console.error(error))
  }, [id])
  console.log(user)

  // const handleWarning = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   streamService.commentWood(id, form.text.value).then((comment) => {
  //     setWood({
  //       ...wood,
  //       comments: [...wood.comments, comment],
  //     });
  //   });
  // };
  const handlewarning = () => {

    streamService.warning(id)
      .then((data) => {
        setUser({
          ...user,
          warnin: data.warnin ? user.warnin + 1 && user.warnin == false : user.warnin == false && - 1
        })
        console.log(user.warnin)
      });
  };


  if (!user) return <></>

  return (
    <>

      <header className="myheader">

        <div class="myperfil-container">

          <img className='img-myperfil' src={user.image} alt="" />
          <div class="contenedor-cabecera">
            <div className="cabecera1">
              <h1>{user.name}</h1>

            </div>
            <div className="cabecera2">
              <p><b>16</b> publicaciones</p>
              <p><b>167</b> woods</p>
              <p><b>16</b> publicaciones</p>

            </div>

            <div className="cabecera3">
              <h2 className="myname">Me llaman {user.name}, pero puedes llamarme {user.nickname}</h2>
              <p className="mybio">Un poco sobre mi...{user.bio}</p>
              <p className="mybox">El box al que pertenezco es {user.box} , y mi email es {user.email}</p>
              <p className="mysnatch">Mis Repeteciones máximas son:</p>
              <p className="mysnatch">En Snatch {user.snatch} kg</p>
              <p className="myclean">En Clean {user.clean} kg</p>
              <p className="myjerk">En Jerk {user.jerk} kg</p>
              <p className="mybacksquat">En Backsquat {user.backsquat} kg</p>
              <p className="mybenchpress">En Benchpress {user.benchpress} kg</p>
              <p className="mydeadlift">En Deadlift {user.deadlift} kg</p>
              <p className="mywarnings">Warnings {user.warnin ? (
                <FilledBookmarkIcon onClick={handlewarning} /> 
              ) : (
                <BookmarkIcon onClick={handlewarning} /> 
              )
              }</p>
            </div>

          </div>

        </div>



      </header>





      <main>
        <div class="mycontainer">

          <div class="mygallery">
            <div class="mygallery-item" >

              <div class="mygallery-item">

                <div class="mygallery-image">
                  <UserWoods />
                </div>


              </div>
            </div>
          </div>
        </div>

















      </main>

    </>

    //   <div>
    //     {user.warnin ? (
    //       <FilledBookmarkIcon onClick={handlewarning} />
    //     ) : (
    //       <BookmarkIcon onClick={handlewarning} />
    //     )

    //     }




    //   <UserWoods />
    //   <UserStreams />
    // </div>


  )
}

export default UserProfileScreen