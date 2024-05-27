import React, { useState } from 'react'
import './Services.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

function Services() {
  const [visible, setVisible] = useState([false, false, false]);

  const handleClick = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  return (
    <div id='services' className='contain'>
      <div className='image' onClick={() => handleClick(0)}>
        <img src={img1} alt="" />
        <div className={`f ${visible[0] ? 'visible' : ''}`}>
          <p>xtcfvgtubyiuni,o;o,nubyvutdfghjkjhgfghjkljhgfhjkycrtxetcryvubyiunoi,pnbuvgy</p>
        </div>
      </div>
      <div className='image' onClick={() => handleClick(1)}>
        <img src={img2} alt="" />
        <div className={`f ${visible[1] ? 'visible' : ''}`}>
          <p>xtcfvgtubyiuni,o;o,nubyvutycrtxetcryvubyiunoi,pnbuvgy</p>
        </div>
      </div>
      <div className='image' onClick={() => handleClick(2)}>
        <img src={img3} alt="" />
        <div className={`f ${visible[2] ? 'visible' : ''}`}>
          <p>xtcfvgtubyiuni,o;o,nubyvutycrtxetcryvubyiunoi,pnbuvgy</p>
        </div>
      </div>   
    </div>
  )
}

export default Services
