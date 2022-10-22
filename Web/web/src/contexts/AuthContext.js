import {  useState, useEffect,createContext  }  from "react" ;
import * as streamService from '../services/crossfit-service'


// los contextos es un componente tuneado de tal forma que cualquier componente que este hacia abajo, va a poder recibir como propiedad algo que este le envie
// y para crearlo creo como si fuera un componente utilizo la función de react createContext y el componente que creo es el provider del contexto
//normalmente lo voy a llamar igual que el contexto (auth mi caso) + provider (pues es un componente q te provee el contexto)´
// y este componente lo voy a enganchar en una parte del dom, del arbol de componentes
//donde lo engancho, si quiero que a él puedan acceder todos, me interesa ponerlo mientras más arriba mejor, yel más arriba q hay en el árbol es el index
// este componente en vez de devolver un html, devuelve un componente que tiene todo lo que le enganche dentro
//  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; // 
// ese children es el <Router><App/></Router> ; del index
// y las propiedades especiales que recibian todos los componentes simplemente por estar debajo de ese provider, tienen que estar en la prop value del componente value={value},
//value={value} este value es un objeto y todo lo que meta en ese value es accesible por cualquiera de su descendencia
// y que voy a hacer dentro del contexto de authenticacion, toda la logica function AuthContextProvider({ children })...
// solo que el usuario y la función setUser se la paso no al hijo por prps, sino a todo lo que haya por debajo
// ¿ Y ahora como me voy al componente de más abajo del todo y lo leo?. SIGUE EN COMPONENTE NAVBAR.JS

//AuthContextProvider es el componente no el contexto



export const AuthContext = createContext();

function AuthContextProvider({ children }) {

  const [user, setUser] = useState(undefined); // undefined means loading


  // con esto cada vez que la pagina cargue , lo primero que va a hacer es pedir el usuario
  // y cuando lo tenga continua y si no lo tiene me lleva al login

  useEffect(() => {
   
      streamService.getProfile()
        .then((user) => setUser(user))
        .catch((user) => setUser(null));


  }, []);

  const updateUser = (user) => {
    localStorage.setItem('user-loaded', 'true');
    setUser(user);
   
  }

  function logout () {
    localStorage.removeItem('user-loaded')
    setUser(null);
  }

  const value = { //lo que yo le pase en value es todo lo que todos los decendientes van a poder acceder sean hijos nietos..ect 
    user, // le voy a pasar el usuario
    setUser: updateUser,
    logout // con esta función cambio un estado que se la estoy pasando a los hijos
    // y tambien la función de setear el usuario que le hace falta al login
  };
  

  // el problema es que queremos qe no rediriga a login cuando el usuario es null
  //pero antes de que cargue el usuario es null//
  // de esta forma en ese momento intermedio entre q el usuario es null y no es null pinto nada; if (user === null) { return <></>;
   //al devolver ahi nada ; todo lo que tengo dentro del autcontext no se renderiza   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; // lo que yo le pase en value es todo lo que todos los decendientes van a poder acceder sean hijos nietos..ect 
  // y el authguard no se ejecuta
  //lo que estoy haciendo es un loading, mientras el usuario este cargando no pinto nada
  // pero con el null no se diferenciar entre usuario esta cargando con el no tengo usuario
  // para ello; undefined significa cargando, null significa no usuario, y user es usuario
  // if (user === undefined) { // esto es usuario cargando
  //   return <></>;
  // }

  if (user === undefined) {
    return <></>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; // lo que yo le pase en value es todo lo que todos los decendientes van a poder acceder sean hijos nietos..ect 
}

export default AuthContextProvider;