import React from 'react';
import Slider from 'react-slick';
import './Partners.css';
import gallery1 from '../../assets/galery1.jpg';
import gallery2 from '../../assets/galery2.jpg';
import gallery3 from '../../assets/galery3.png';
import gallery4 from '../../assets/galery4.png';
import gallery5 from '../../assets/galery5.png';
import gallery6 from '../../assets/galery6.jpg';
import gallery7 from '../../assets/galery7.png';
import gallery8 from '../../assets/galery8.png';
import gallery9 from '../../assets/galery9.webp';
import gallery10 from '../../assets/galery10.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

  
const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // breakpoint for tablets and larger screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className="slide">
        <a href="https://bioptimal.fr/" target="_blank" rel="noopener noreferrer">
        <img src={gallery1} alt="" className='sliderImage'/>
        <h4>Bioptimal</h4>
        </a>
        </div>
    
        <div className="slide">
        <a href="https://www.chemopharmaceuticals.com/en/" target="_blank" rel="noopener noreferrer">
        <img src={gallery2} alt="" className='sliderImage' />
        <h4>Chemo</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://www.dietaroma.fr/cms/4/au-dela-du-bio" target="_blank" rel="noopener noreferrer">
        <img src={gallery3} alt="" className='sliderImage' />
        <h4>Dietaroma</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://www.ericfavre.com/" target="_blank" rel="noopener noreferrer">
        <img src={gallery4} alt="" className='sliderImage' />
        <h4>Eric Favre</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://www.herbes-et-traditions.fr/" target="_blank" rel="noopener noreferrer">
        <img src={gallery5} alt="" className='sliderImage' />
        <h4>Herbes&Traditions</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://www.ericfavre.com/" target="_blank" rel="noopener noreferrer">
        <img src={gallery6} alt="" className='sliderImage' />
        <h4>Eric Favre</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://www.la-saponaria.com/" target="_blank" rel="noopener noreferrer">
        <img src={gallery7} alt="" className='sliderImage' />
        <h4>laSaponaria</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://www.pleniday.fr/" target="_blank" rel="noopener noreferrer">
        <img src={gallery8} alt="" className='sliderImage' />
        <h4>Pléniday</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://www.vedalab.com/" target="_blank" rel="noopener noreferrer">
        <img src={gallery9} alt="" className='sliderImage' />
        <h4>Veda.lab</h4>
        </a>
        </div>
        <div className="slide">
        <a href="https://alphanova.fr/en/" target="_blank" rel="noopener noreferrer">
        <img src={gallery10} alt="" className='sliderImage' />
        <h4>Alphanova</h4>
        </a>
        </div>
    </Slider>
    </div>
  );
};

export default Partners;

  

