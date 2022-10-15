import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/ui/navbar/Navbar"
import { HomeScreen, CreateStreamScreen,CreateWoodScreen, StreamScreen, StreamDetailScreen, WoodScreen, LoginScreen, UserProfileScreen, WoodDetailScreen  } from "./screens"
import AboutScreen from './screens/about/Aboutscreen'
import { useContext } from "react";
import { AuthContext } from './contexts/AuthContext';
import UserAccountSAcreen from './screens/user/user-account/UserAccountSAcreen';






function App() {

  const value =useContext(AuthContext);

  return (
    <>
    {value.user && <Navbar />} 
      

      <div className='container py-2'>

        <Routes> 
          <Route path='/login' element={<UserAccountSAcreen/>} />
          <Route path='/' element={<HomeScreen/>} />
          <Route 
            path='/create-stream' 
            element={<CreateStreamScreen/>} 
            />
          <Route path='/stream/:id' element={<StreamDetailScreen/>} />
          <Route path='/wood/:id' element={<WoodDetailScreen/>} />
          <Route 
            path='/create-wood' 
            element={<CreateWoodScreen/>} 
            />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path='/streams' element={<StreamScreen/>} />
          <Route path='/woods' element={<WoodScreen/>} />
          <Route path='/profile/:id' element={<UserProfileScreen/>} />
        </Routes>
      
      </div>
    </>
  );
}

export default App;

// <Routes>  es te componente define un subconjunto de rutas que pueden cambiar en base a un path, y cada una de las rutas las defino con el otro componente
//<Route path='' element />con este componente defino cada una de las rutas, el path nos dice a que path tiene que corresponder el renderizado de ese componente y el element hace refencia al componente que deberia ser renderizado en ese path   