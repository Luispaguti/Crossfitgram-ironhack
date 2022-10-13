import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/ui/navbar/Navbar"
import { HomeScreen, CreateStreamScreen,CreateWoodScreen, StreamScreen, StreamDetailScreen, WoodScreen, LoginScreen, UserProfileScreen  } from "./screens"
import AboutScreen from './screens/about/Aboutscreen'
import { useContext} from 'react'
import { AuthContext } from './contexts/AuthContext'


// le paso este AuthGuard a todas las rutas que sean privadas
function AuthGuard({ children }){
  const { user } = useContext( AuthContext);

  if(!user) {
    return <Navigate to="/login"/>
  }

  return children;
  // esto es dejar pasar, pintar lo que hay dentro

}


function App() {

  const value = useContext(AuthContext);
  // este auth tiene el usuario y la contraseña

  return (
    <>
      {/* {value.user && <Navbar/>} */}
      <Navbar Icon1="Crosfitgram" Icon4="Foto del usuario"/>

      <div className='container py-2'>
        <Routes> 
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/' element={<HomeScreen/>} />
          <Route 
            path='/create-stream' 
            element={
              <AuthGuard>
                <CreateStreamScreen/>
              </AuthGuard>
            } 
            />
          <Route path='/stream/:id' element={<StreamDetailScreen/>} />
          <Route 
            path='/create-wood' 
            element={
            <AuthGuard>
              <CreateWoodScreen/>
            </AuthGuard>
            } 
            />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path='/streams' element={<StreamScreen/>} />
          <Route path='/woods' element={<WoodScreen/>} />
          <Route path='/streams/:id' element={<StreamDetailScreen/>} />
          <Route path='/profile' element={<UserProfileScreen/>} />
        </Routes>
        
        {/* <Navbar Icon2="home" Icon3={<i className='fa fa-plus' />} icon0={<i className='fa fa-plus' />}/> */}

      </div>
    </>
  );
}

export default App;

// <Routes>  es te componente define un subconjunto de rutas que pueden cambiar en base a un path, y cada una de las rutas las defino con el otro componente
//<Route path='' element />con este componente defino cada una de las rutas, el path nos dice a que path tiene que corresponder el renderizado de ese componente y el element hace refencia al componente que deberia ser renderizado en ese path   