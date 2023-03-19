import Main from '../main/main';
import Proyectos from '../../proyectos/proyectos';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from '../navbar/navbar';

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

//   const router = createBrowserRouter(
//     [
//       {
//         path: '/',
//         element: <Main/>
//       },
//       {
//         path: '/projects',
//         element: <Proyectos/>
//       }
//     ]
//   )

// function RouterRenderer() {

//   return (
//     <BrowserRouter>
//         <Navbar key={navbarItems} items={navbarItems}></Navbar>
//         <Routes>
//             <Route exact path='/' element={<Main/>}>
//             </Route>
//             <Route path='/projects' element={<Proyectos/>}>
//             </Route>
//         </Routes>
//     </BrowserRouter>
//   );
// }

// export default RouterRenderer;