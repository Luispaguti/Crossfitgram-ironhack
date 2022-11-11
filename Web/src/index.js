import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import AuthContextProvider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <AuthContextProvider> 
      <Router>
       <App />
      </Router>
    </AuthContextProvider> 
  </React.StrictMode>
);

// abrazando la app con ese router lo que estoy diciendo es que toda mi app va a ser susceptible de que a aprtir de un path el contenido de mi app pueda cambiar, estoy preparando mi app para que monte y desmonte un componente en base a las rutas
//<AuthContextProvider>  todo lo que esté debajo de authcontext va a poder acceder al usuario y a setuser, es decir al value

