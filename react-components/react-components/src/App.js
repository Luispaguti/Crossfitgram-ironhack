import StepBox from './components/step-box/StepBox'


function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <div className='d-flex'>
        <StepBox img="https://cdn4.buysellads.net/uu/1/81016/1609783186-authentic-260x200-variation-2.jpg" title="Holi" text="Adios" className="text-info"/>
        <StepBox img="https://cdn4.buysellads.net/uu/1/81016/1609783186-authentic-260x200-variation-2.jpg" title="luis" text="Adios"/>
        <StepBox />
        </div>
       
      </div>
    </div>
  );
}

export default App;
