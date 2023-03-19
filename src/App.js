import './App.css';
import Main from './components/layout/main/main';
import Navbar from './components/layout/navbar/navbar';
import Projects from './components/proyectos/proyectos'
import Skills from './components/skills/skills';

let navbarItems = [
  {
    view: 'Inicio',
    id: '#main'
  },
  {
    view: 'Proyectos',
    id: '#projects'
  },
  {
    view: 'Tecnologías',
    id: '#skills'
  },
  // {
  //   view: 'Sobre mi',
  //   id: '#about'
  // },
]


function App() {
  // const [amountofMovement, setAmountofMovement] = useState(0);
  // const [count, setCount] = useState(0);
  // /**Detecta el evento de scroll con mouse */
  // function detectScroll(event){
  //   if(event.wheelDeltaY == 0){
  //     return
  //   }
  //   console.log(event);
  //   if(event.wheelDeltaY < 0 ){
  //     setCount( count + 0.5)
  //   } else{
  //     setCount( count - 0.5)
  //   }

  //   if(count <= 100 && count >= 0){
  //     setAmountofMovement(String((-count)) + 'vw') 
  //   }
    
  // }
  
  // window.addEventListener('wheel', detectScroll);

  return (
    <div className='' >
      {/* <RouterRenderer></RouterRenderer> */}
      <Navbar key={navbarItems} items={navbarItems}></Navbar>
      <div className='lateralLayout'>
        <Main></Main>
        <Projects></Projects>
        <Skills></Skills>
      </div>
    </div>
  );
}

export default App;
