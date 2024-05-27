import React, { useRef } from 'react'
import './Partners.css'
import gallery1 from '../../assets/galery1.jpg'
import gallery2 from '../../assets/galery2.jpg'
import gallery3 from '../../assets/galery3.png'
import gallery4 from '../../assets/galery4.png'
import gallery5 from '../../assets/galery5.png'
import gallery6 from '../../assets/galery6.jpg'
import gallery7 from '../../assets/galery7.png'
import gallery8 from '../../assets/galery8.png'
import gallery9 from '../../assets/galery9.webp'
import gallery10 from '../../assets/galery10.webp'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'


const Partners = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='partners'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery1} alt="" />
                            <h3>Bioptimal</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery2} alt="" />
                            <h3>Chemo</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery3} alt="" />
                            <h3>Dietaroma</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery4} alt="" />
                            <h3>Eric Favre</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery5} alt="" />
                            <h3>Herbes&Traditions</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery6} alt="" />
                            <h3>Eric Favre</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery7} alt="" />
                            <h3>laSaponaria</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery8} alt="" />
                            <h3>Pléniday</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery9} alt="" />
                            <h3>Veda.lab</h3>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="partner-info">
                            <img src={gallery10} alt="" />
                            <h3>Alphanova</h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default Partners
