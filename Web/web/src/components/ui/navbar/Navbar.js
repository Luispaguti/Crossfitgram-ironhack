
import '../navbar/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import Button from '../button/Button';

// CONTINUANCION CONTEXT
//¿ Y ahora como me voy al componente de más abajo del todo y lo leo?
//para ello tengo que usar el hook useContext( import { useContext } from 'react')
// y al hook useContext le paso el contexto(authcontext) y me devuelve el value  =>  const value = useContext(AuthContext);

function Navbar({ label, primary, Icon3, Icon4, Icon5, Icon0  }) {

  const { user } = useContext(AuthContext);

  // if (!user){
  //   return null;
  // }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-section hoverable">Crossfitgram</div>
        <i class="fa fa-plus"></i>
        <i class="fa fa-heart"></i>

        <div className="actions-section">
          <Button label="Login In" primary/>
          <Button label="Sign Up"/>
        </div>
      </div>
      <div  className="content-container"></div>
    </div>


    // <nav className="navbar navbar-expand-lg bg-light main-nav">
    //   <div className="container">
    //     <h2 className="nav-item">
    //       <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>{Icon1}</NavLink>
    //     </h2>
    //     {/* <Link className="navbar-brand" to="/">{Icon1}</Link> */}
    //     {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button> */}
    //     <div className="collapse navbar-collapse" id="main-nav">
    //       <ul className="navbar-nav me-auto">
    //         <li className="nav-item">
    //           <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>{Icon2}</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink to="/create-stream" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}> create streams{Icon3}</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink to="/create-wood" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}> create woods{Icon0}</NavLink>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}> profile: {Icon4}</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink to="/create-wood" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}><i className='fa fa-plus' />{Icon5}</NavLink>
    //         </li>

    //       </ul>

    //       {/* <li className="nav-item">
    //           {user.name}
    //         </li> */}

    //     </div>
    //   </div>
    // </nav>
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