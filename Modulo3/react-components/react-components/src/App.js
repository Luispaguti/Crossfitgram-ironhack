import StepBox from './components/step-box/StepBox'
import BtnIcon from './components/btn-icon/BtnIcons'
import IconBox from './components/icon-box/IconBox'
import Counter from './components/Counter/Counter'

function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <div className='d-flex'>
        <StepBox img="https://cdn4.buysellads.net/uu/1/81016/1609783186-authentic-260x200-variation-2.jpg" title="Holi" text="Adios" className="text-info"/>
        <StepBox img="https://cdn4.buysellads.net/uu/1/81016/1609783186-authentic-260x200-variation-2.jpg" title="luis" text="Adios"/>
        <StepBox />
        </div>
        <BtnIcon mode="primary" >@prado</BtnIcon>
        <BtnIcon icon="alert" mode="danger">prubea</BtnIcon>
        <BtnIcon mode="warning" icon="user" small={true}>react</BtnIcon>

        <div className="d-flex">
         <IconBox title="Ironhack" image="https://cdn4.buysellads.net/uu/1/81016/1609783206-authentic-260x200-variation-4.jpg" className="me-1"/>
         <IconBox title="Surf" image="https://s1.eestatic.com/2019/07/10/como/agua-como_hacer_412719155_127734818_1706x960.jpg"/>

        </div>

        <div className="d-flex">
         <Counter className="my-3" max={10} min={0}/>
    
        </div>

      </div>

    </div>
  );
}

export default App;
