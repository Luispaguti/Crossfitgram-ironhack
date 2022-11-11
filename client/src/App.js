import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/ui/navbar/Navbar"
import { HomeScreen, CreateStreamScreen,CreateWoodScreen, StreamScreen, StreamDetailScreen, WoodScreen, LoginScreen, UserProfileScreen, WoodDetailScreen, RegisterScreen, RankingScreen  } from "./screens"
import AboutScreen from './screens/about/Aboutscreen'
import { useContext } from "react";
import { AuthContext } from './contexts/AuthContext';
import UserAccountSAcreen from './screens/user/user-account/UserAccountSAcreen';
import UserWoods from './components/ui/user/user-woods/UserWoods';
import StreamListProfileScreen from './screens/streams/stream-list-profile/StreamListProfileScreen';


function AuthGuard({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}



function App() {

  const value =useContext(AuthContext);

  return (
    <>
   
    {value.user &&  <Navbar />} 
      

      <div className='container py-2'>

        <Routes> 
          <Route path='/login' element={<UserAccountSAcreen/>} />
          <Route path='/register' element={<RegisterScreen/>} />

          <Route path='/' element={
            <AuthGuard>
          <HomeScreen/>
          </AuthGuard>
          } />

          <Route 
            path='/create-stream' 
            element={<CreateStreamScreen/>} 
            />
          <Route path='/stream/:id' element={<StreamDetailScreen/>} />
          <Route path='/profile/:id/woods' element={<UserWoods/>} />
          <Route path='/profile/:id/streams' element={<StreamListProfileScreen/>} />
          <Route path='/wood/:id' element={<WoodDetailScreen/>} />
          <Route 
            path='/create-wood' 
            element={<CreateWoodScreen/>} 
            />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path='/streams' element={<StreamScreen/>} />
          <Route path='/woods' element={<WoodScreen/>} />
          <Route path='/ranking' element={<RankingScreen/>} />
          <Route path='/profile' element={<UserProfileScreen/>} />
        </Routes>
      
      </div>
    </>
  );
}

export default App;

// <Routes>  es te componente define un subconjunto de rutas que pueden cambiar en base a un path, y cada una de las rutas las defino con el otro componente
//<Route path='' element />con este componente defino cada una de las rutas, el path nos dice a que path tiene que corresponder el renderizado de ese componente y el element hace refencia al componente que deberia ser renderizado en ese path   