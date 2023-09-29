import './home.css';
import Navbar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';
import image from './tutorial.png';
import imagep from './physics.png';
import imagec from './chemistry.png';
import imagem from './math.png';
import imageb from './biology.png';
import images from './science.png';
import imagea from './algebra.png';
import imageh from './history.png';
import imageg from './geography.png';
import imagege from './geometry.png';
import imageco from './computer.png';


export default function Home() {
    return (
        <>
        <Navbar/>
        < div className='parent'> 
            <div><img src={image} className='homeimage'/></div>
            <div className='homeintrotext'> Tutorial is an education platform which takes the initiative to teach the growing kids of highschool and junior college. 
                  The platform has highly educated teachers and professors qualified from top universities.
                  The main goal of this institute is to upbring the bright future of the nation with knowledge.</div> </div>
            <hr/><div className='avcou'><p>Available Courses</p></div>
            <div className='parentc'>
             <div className='coursechild'>
                <img src={imagep} className='imagecourse'/>
                <p className='coursetext'>Join the PHYSICS course at just rs 999.</p>
             </div>

             <div className='coursechild'>
                <img src={imagem} className='imagecourse'/>
                <p className='coursetext'>Join the MATHS course at just rs 799.</p>
             </div>

             <div className='coursechild'>
                <img src={imagec} className='imagecourse'/>
                <p className='coursetext'>Join the CHEMISTRY course at just rs 499.</p>
             </div>

             <div className='coursechild'>
                <img src={imageb} className='imagecourse'/>
                <p className='coursetext'>Join the BIOLOGY course at just rs 599.</p>
             </div>

             <div className='coursechild'>
                <img src={images} className='imagecourse'/>
                <p className='coursetext'>Join the SCIENCE course at just rs 599.</p>
             </div>

             <div className='coursechild'>
                <img src={imagea} className='imagecourse'/>
                <p className='coursetext'>Join the ALGEBRA course at just rs 599.</p>
             </div>

             <div className='coursechild'>
                <img src={imagege} className='imagecourse'/>
                <p className='coursetext'>Join the GEOMETRY course at just rs 599.</p>
             </div>

             <div className='coursechild'>
                <img src={imageg} className='imagecourse'/>
                <p className='coursetext'>Join the GEOGRAPHY course at just rs 599.</p>
             </div>

             <div className='coursechild'>
                <img src={imageh} className='imagecourse'/>
                <p className='coursetext'>Join the HISTORY course at just rs 599.</p>
             </div>
             
             <div className='coursechild'>
                <img src={imageco} className='imagecourse'/>
                <p className='coursetext'>Join the CODING course at just rs 1999.</p>
             </div>

            </div>
        <Footer/>
        </>
    )
}