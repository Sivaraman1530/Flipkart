import './Subnav.css'
import img1 from './images/img1.PNG'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.jpg'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
function Home(){

    return(
        <div >
            <div className="subnav">
              <ul>
                <li><a href='#'><div className='slink'><img src={img1} alt='img'/>Top Offer</div></a></li>
                <li><a href='#'><div className='slink'><img src={img2} alt='img'/>Grocery</div></a></li>
                <li><a href='#'><div className='slink'><img src={img3} alt='img'/>Mobile</div></a></li>
                <li><a href='#'><div className='slink'><img src={img4} alt='img'/>Electronics</div></a></li>
                <li><a href='#'><div className='slink'><img src={img5} alt='img'/>Fashion</div></a></li>
                <li><a href='#'><div className='slink'><img src={img6} alt='img'/>Home</div></a></li>
                <li><a href='#'><div className='slink'><img src={img7} alt='img'/>Appliances</div></a></li>
                <li><a href='#'><div className='slink'><img src={img8} alt='img'/>Travel</div></a></li>
                <li><a href='#'><div className='slink'><img src={img9} alt='img'/>Beauty,Toys&More</div></a></li>
              </ul>
            </div>
        </div>      
    );

}

export default Home;