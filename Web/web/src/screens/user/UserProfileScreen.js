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

    <header className='header-profile'>

      <div class="container-profile">

        <div class="myprofile-image">

          <img className='myimg'src={user.image} alt="" />

        </div>

        <div class="myprofile-user-settings">

          <h1 class="myprofile-user-name">{user.name}</h1>

          <button class="mybtn myprofile-edit-btn">Edit Profile</button>

          <button class="mybtn myprofile-settings-btn" aria-label="myprofile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

        </div>



        <div class="myprofile-stats">

				<ul>
					<li><span class="myprofile-stat-count">164</span> Woods</li>
					<li><span class="myprofile-stat-count">188</span> Pics</li>
				</ul>

			</div>





      <div class="myprofile-bio">

				<p><span class="myprofile-real-name">{user.nickname}</span> {user.bio}</p>
        <p><span class="myprofile-real-name">{user.box}</span> {user.bio}</p>
        <p><span class="myprofile-real-name">{user.box}</span> {user.bio}</p>
        

			</div>



      </div>

  


    </header>





  <main>
      <div class="mycontainer">

      <div class="mygallery">
      <div class="mygallery-item" >

      <div class="mygallery-item">

     <div class="mygallery-image">
     <UserWoods/>
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