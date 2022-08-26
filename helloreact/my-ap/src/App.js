import logo from './logo.svg';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';



import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container1">
            <div className="navbar">
                <img className='logo' src={icon5} alt="logo"/>
                <img className='menu' src={icon6} alt="menu"/>
            </div>

            <div className='text'>
                <h1 >Say hello to <br></br> ReactJS</h1>
                <p>You will learn how to use <br></br> the most popular frontend library,<br></br>
                 and become a super ninja developer.</p>
                 <button className="btn">Awesome!</button>
            </div>
      </div>
      <div class ='features'>

        <div class='components'>
              <img src= {icon1} alt = "feature" />
              <p class="encabezado">Declarative</p>
              <p class="explicacion">React makes it painless to create interactuve UI</p>
        </div>

        <div class='components'>
              <img src= {icon2} alt = "feature" />
              <p class="encabezado">Components</p>
              <p class="explicacion">Build encapsulated components that manage their state</p>
        </div>

        <div class='components'>
              <img src= {icon3} alt = "feature" />
              <p class="encabezado">Single-Way</p>
              <p class="explicacion">A set  of immutable values are passed to the component's</p>
        </div>

        <div class='components'>
              <img src= {icon4} alt = "feature" />
              <p class="encabezado">JSX</p>
              <p class="explicacion">Statically-typed designed to run on modern browsers</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
