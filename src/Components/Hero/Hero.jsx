import React from 'react'
import './Hero.css'
import { Link as ScrollLink } from 'react-scroll'
import dark_arrow from '../../assets/dark_arrow.png'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div className='hero container'>
    <div className="hero-text">
      <h1>Bienvenue chez BioOrganika</h1>
      <p>AU DELÀ DU BIO</p>
      <button className='boutton'>
        <ScrollLink to='about' smooth={true} offset={-260} duration={500}>
          en savoir plus <img src={dark_arrow} alt="" />
        </ScrollLink>
      </button>
    </div>
    <div className="countup-section">
      <h2>
        <span>Clients satisfaits : </span>
        + <CountUp start={0} end={350} duration={3} />
      </h2>
      <h2>
        <span>Chiffre d'affaire : </span>
        + <CountUp start={0} end={10000000} duration={3} /> DH
      </h2>
      <h2>
        <span>Produits : </span>
        + <CountUp start={0} end={100} duration={3} />
      </h2>
    </div>
  </div>
  )
}

export default Hero
