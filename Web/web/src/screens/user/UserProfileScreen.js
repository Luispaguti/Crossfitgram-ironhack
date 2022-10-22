
import { useContext, useEffect, useState  } from 'react';
import {  FilledBookmarkIcon, BookmarkIcon  } from '../../components/ui/icons/Icon'
import * as streamService from '../../services/crossfit-service'
import '../user/UserProfileScreen.css'
import { AuthContext } from '../../contexts/AuthContext'
import { WoodListProfile } from '../../components/ui';


function UserProfileScreen() {

  const value = useContext(AuthContext);



  const handlewarning = () => {

    streamService.warning()
      .then((data) => {
        value.setUser({
          ...value.user,
          warnin: data.warnin ? value.user.warnin + 1 && value.user.warnin === false : value.user.warnin === false && - 1
        })
        console.log(value.user.warnin)
      });
  };




  if (!value.user) return <></>




  return (
    <>

      <header className="myheader">

        <div class="myperfil-container">

          <img className='img-myperfil' src={value.user.image} alt="" />
          <div class="contenedor-cabecera">
            <div className="cabecera1">
              <h1>{value.user.name}</h1>

            </div>
            <div className="cabecera2">
              <p><b>16</b> publicaciones</p>
              <p><b>167</b> woods</p>
              <p><b>16</b> publicaciones</p>

            </div>

            <div className="cabecera3">
              <h2 className="myname">Me llaman {value.user.name}, pero puedes llamarme {value.user.nickname}</h2>
              <p className="mybio">Un poco sobre mi...{value.user.bio}</p>
              <p className="mybox">El box al que pertenezco es {value.user.box} , y mi email es {value.user.email}</p>
              <p className="mysnatch">Mis Repeteciones máximas son:</p>
              <p className="mysnatch">En Snatch {value.user.snatch} kg</p>
              <p className="myclean">En Clean {value.user.clean} kg</p>
              <p className="myjerk">En Jerk {value.user.jerk} kg</p>
              <p className="mybacksquat">En Backsquat {value.user.backsquat} kg</p>
              <p className="mybenchpress">En Benchpress {value.user.benchpress} kg</p>
              <p className="mydeadlift">En Deadlift {value.user.deadlift} kg</p>
              <p className="mywarnings">Warnings {value.user.warnin ? (
                <FilledBookmarkIcon onClick={handlewarning} />
              ) : (
                <BookmarkIcon onClick={handlewarning} />
              )
              }</p>
            </div>

          </div>

        </div>


      </header>

      <>

     <WoodListProfile/>

    </>

      
                


            
           


















    </>

  )
}

export default UserProfileScreen