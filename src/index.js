import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './view/home/home';
import Contact from './view/contact/contact';
import About from './view/about/about';
import Signin from './view/Signin/Signin';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '/Contact',
    element: <Contact/>
  },
  {
    path: '/Signin',
    element: <Signin/>
  }
])
root.render(
<RouterProvider router={router}/>
);

