import Navbar from '../../component/navbar/navbar';
import './contact.css';
import Footer from '../../component/footer/footer';
  

export default function Contact(){

    return(
        <>
        <Navbar/>
        <div className='contactdiv'> <p className="heading1"><h className="heading">Contact us</h></p>
         <p className='contacttext'>Hello Students!!<br/>We are happy to see you contact us. Tutorial is an educational institute helping students through their studies by proving them an online platform for courses which they can enroll for a small amount.We provide you an excellent knowledge of related subject.</p>
         <hr/><p className='contacttext'>You may contact the tutorial institute through following means</p>
         <p className='contacttext'><b>Email</b>: xyzabc123@gmail.com</p>
         <p className='contacttext'><b>Address</b>: gulmohar plaza, ghandi chauk, opp to lakshmi hospital, pune-412237</p>
         <p className='contacttext'><b>Phone no</b>: 9846***246</p></div>
         <Footer/>
        </>
    )
}