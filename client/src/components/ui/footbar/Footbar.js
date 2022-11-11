// import '../footbar/Footbar.css'
// import { Link, NavLink } from 'react-router-dom'
// import React, { useContext } from 'react'
// import { AuthContext } from '../../../contexts/AuthContext'
// import Button from '../button/Button';

// function Footbar() {

//   const value = useContext(AuthContext);

//   return (
//     <div><div className="navbar-container">
//     <div className="navbar">
//       <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
//         <div className="logo-section hoverable">Crossfitgram </div>
//       </NavLink>

//       <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
//         <div className="logo-section hoverable">{value.user.name}</div>
//       </NavLink>

//       <NavLink to="/create-stream" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
//         <i class="fa fa-plus">Post Picture</i>
//       </NavLink>

//       <NavLink to="/create-wood" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
//         <i class="fa fa-heart">Post Wood</i>
//       </NavLink>


//       <div className="actions-section">
//       <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}>
//         <Button label="Login In" primary />
//       </NavLink>
//         <Button label="Sign Up" />
//       </div>
//     </div>
//     <div className="content-container"></div>
//   </div></div>
//   )
// }

// export default Footbar