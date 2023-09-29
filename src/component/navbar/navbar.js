import './navbar.css';
import image from './tutorial.png'
import { Link } from 'react-router-dom';

export default function Navbar()
   { return(
     <><div className='navbar'><div><img src={image} className='img'/></div>
     <div className='text'><Link className="textinside" to="/">Home</Link>
     <Link className="textinside" to="/About">About</Link>
     <Link className="textinside" to="/Contact">Contact us</Link></div>
     <div className='signin'><Link to="/Signin"><button className='button'>Sign in</button></Link></div>
     </div></>
    )
   }

   function sign(){

   }