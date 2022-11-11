
import '../navbar/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import Button from '../button/Button';
import { useParams } from 'react-router-dom';
import * as streamService from '../../../services/crossfit-service'
import { useNavigate } from "react-router";


// CONTINUANCION CONTEXT de AUTHCONTEX.JS
//¿ Y ahora como me voy al componente de más abajo del todo y lo leo?
//para ello tengo que usar el hook useContext( import { useContext } from 'react')
// y al hook useContext le paso el contexto(authcontext) y me devuelve el value  =>  const value = useContext(AuthContext);

function Navbar() {
  const navigate = useNavigate();
  const { id } = useParams()

  const value = useContext(AuthContext);


  const handleClickLogout = () => {
    streamService.logout()
      .then((data) => {
        value.logout(data);
        navigate("/login");
      })
  };

  return (

    <nav className='navmy'>
      <div className="navmy-cont">
        {/* <img src={value.user.image} alt="imgmy" className="imgmy" /> */}
        <div className='cont-input'>
          <span>


          <NavLink to="/" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
             <img id="header_CtlLogo" src="BS.png" alt="BLACK"/>
          </NavLink>

            <NavLink to="/" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
              <div className="logomy-section hoverable">Crossfitgram </div>
            </NavLink>
          </span>



        </div>
        <div className="iconosmy">


          {/* <NavLink to="/create-stream" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
            <i class="fas fa-plus"><i class="fas fa-camera-retro"></i></i>
          </NavLink> */}

          <NavLink to="/create-wood" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
            <i class="fas fa-plus"><span className='wodnav'>Wod</span></i>
          </NavLink>

          <NavLink to="/streams" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
            <i class="fas fa-camera-retro"></i>
          </NavLink>

          

          <NavLink to="/woods" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
            <i class="fas fa-skull-crossbones"><span className='wodnav'>Wod</span></i>
          </NavLink>
          {/* <NavLink to="/" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
            <i class="fa fa-home fa-lg"></i>
          </NavLink> */}
          <NavLink to="/ranking" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
            <i class="fa fa-crown fa-lg"></i>
          </NavLink>
          
          <NavLink to="/profile" className={({ isActive }) => isActive ? "navmy-link active" : 'navmy-link'}>
            <p class="fa-solid"><span className='wodnav me-2'>{value.user.name}</span></p>
    
          </NavLink>
          <NavLink to={`/profile`} >
  
            <button className='storynav me-4'>
              <span className="profilestorynav">
                <img src={value.user.image} alt="small-logo" className="imagmy" />
                </span>
              </button> 
                
          </NavLink>

         <button className='logout' onClick={handleClickLogout}>
       
          <i class="fas fa-sign-out-alt"></i>
         
        </button> 

          

        </div>
        
      </div>

    </nav>




























    // <div className="navbar-container">
    //   <div className="navbar">
    //     <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
    //       <div className="logo-section hoverable">Crossfitgram </div>
    //     </NavLink>

    //     <div class="col-md-2">
    //       <form class="d-flex input-group w-auto">
    //         <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
    //       </form>
    //     </div>


    //     <NavLink to="/create-stream" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
    //       <i class="fas fa-camera-retro"></i>
    //     </NavLink>

    //     <NavLink to="/create-wood" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
    //       <i class="fas fa-skull-crossbones">Wood</i>
    //     </NavLink>

    //     <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
    //       <i class="fa fa-home fa-lg text-dark"></i>
    //     </NavLink>

    //     <NavLink to="/create-stream" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
    //       <i class="fa fa-paper-plane fa-lg text-dark"></i>
    //     </NavLink>

    //     <NavLink to="/create-stream" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
    //       <i class="fa fa-compass fa-lg text-dark"></i>
    //     </NavLink>

    //     <NavLink to="/create-stream" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
    //       <i class="fa fa-heart fa-lg text-dark"></i>
    //     </NavLink>



    //     <Link to={`/profile/${id}`} class="d-flex align-items-center">
    //     <div className="nickname">{value.user.nickname}</div>
    //       <img src={value.user.image} class="rounded-circle" height="92" alt="title" loading="lazy" />

    //     </Link>


    //   </div>
    //   <div className="content-container"></div>
    // </div>


  )
}
export default Navbar



// con las <a> no se cambian las rutas de nuestra aplicación de react, tendremos que utlizar un componente expecífico de react que es react roter dom,
// con una <a>  nos salimos de nuestra app, sería para un link q me lleve a fb x ejemplo
// conviene cambiar los identificadores

// El componente de link esta pensado para ser un a normal
// el componente navlink me permite decidir cuando queremos que se aplique una clase de css específica

//          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : 'nav-link'}>Home</NavLink>
// si me encuentro en la home me devolverá como activo y sino me encuentro en la home como inactivo