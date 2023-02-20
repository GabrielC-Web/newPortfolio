import './App.css';
import Main from './components/layout/main/main';
import Navbar from './components/layout/navbar/navbar';
import Projects from './components/proyectos/proyectos'
import RouterRenderer from './components/layout/routerRenderer/routerRenderer';

let navbarItems = [
  {
    view: 'Inicio',
    id: '/'
  },
  {
    view: 'Sobre mi',
    id: '/about'
  },
  {
    view: 'Proyectos',
    id: '/projects'
  }
]


function App() {

  /**Detecta el evento de scroll con mouse */
  function detectScroll(event){
    var e = event
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    // changeRouterView(delta)
  }

  let spinner = false

  /**Navega hasta la ruta dependiendo del evento scroll */
  // function changeRouterView(delta){
  //   for (let i = 0; i < paths.length; i++) {
  //     const element = paths[i];
  //     if(window.location.pathname != element){
  //       if(delta == -1){
  //         window.location.href = paths[paths.indexOf(element) + 1] || paths[0] 
  //       } else if(delta == 1){
  //         window.location.href = paths[paths.indexOf(element) - 1] || paths[paths.length - 1]
  //       }
  //     }
      
  //   }
  // }

  // function handleSpinner(){
  //   console.log('change!');
    
  // }

  // let paths = ['/', 'about', 'projects']

  // window.addEventListener('mousewheel', detectScroll);

  // window.addEventListener('locationchange', handleSpinner)

  return (
    <div className='container'>
      {/* <RouterRenderer></RouterRenderer> */}
      <Navbar key={navbarItems} items={navbarItems}></Navbar>
      <Main></Main>
      <Projects></Projects>
    </div>
  );
}

export default App;
