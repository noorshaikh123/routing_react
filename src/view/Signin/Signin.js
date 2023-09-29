import './Signin.css';
import Navbar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';
import imageins from './instagram.png'
import imagefa from './facebook.png'
import imagegoo from './google.png'

export default function Signin(){
    return(
        <>
        <Navbar/>
        <div className='form'>
            <form>
                <div className='formtext'><p>Sign in</p></div>
                <div><img src={imagegoo} className='signima'/><img src={imageins} className='signima'/><img src={imagefa} className='signima'/></div>
                <input type='text' placeholder='Username' className='formemail'/><br/>
                <input type='email' placeholder='Enter your email' className='formemail'/><br/>
                <input type='password' placeholder='Password' className='formemail'/><br/>
                <input type='reset'  className='formsub'/>
                <input type='submit' className='formsub'/>
            </form>
        </div>
        <Footer/>
        </>
    )
}
