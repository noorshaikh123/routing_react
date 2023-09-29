import Navbar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';
import './about.css';
import image from './noor.jpg';
import imageh from './html.png';
import imagecss from './css.png';
import imagecpp from './cpp.png';
import imagec from './c.png';
import imageb from './bootstrap.png';
import imagej from './javascript.png';
import imagen from './nodejs.png';
import imager from './react.png';


export default function About() {
    return (
        <div>
            <Navbar />
            <p className="heading1"><h className="heading">About Us</h></p>
            <div className='parent'><div><img src={image} className='imagea'/></div><div className='texta'><p><b>Name</b>: Shaikh Noorbano</p> <p><b>Qualifications</b>: <ul><li>10th: Holy Angels Convent School</li><li>12th: Bhartiya Jain Sanghatna College</li><li>Degree: Imperial College of Engineering and Reserch</li></ul></p><p><b>Gender</b>: Female</p></div></div>
         <br/>  <hr/><p><h1 className='skillstext'><u>Skills</u></h1></p>
            <div className="skillsparent">
        
                 <div>
                    <img src={imageh} className='skillspic'/>
                    <img src={imagecss} className='skillspic'/>
                    <img src={imagej} className='skillspic'/>
                    <img src={imageb} className='skillspic'/>
                 
                 <img src={imager} className='skillspic'/>
                 <img src={imagen} className='skillspic'/>
                 <img src={imagec} className='skillspic'/>
                 <img src={imagecpp} className='skillspic'/>
                 </div>
                


                <div>

                </div>
            </div>
            
            <Footer /> 
        </div>
        
    );
}