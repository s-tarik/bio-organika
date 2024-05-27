import React from 'react'
import './Hero.css'
import { Link as ScrollLink } from 'react-scroll'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Bienvenue à BioOrganika</h1>
        <p>Importateur, Distribution et stockage des diapositifs médicals et reactifs à usage le meilleur et le plus savoir-faire et des technologies biomedical </p>
        <button className='boutton'><ScrollLink to = 'about' smooth={true} offset={-260} duration={500}>en savoir plus <img src={dark_arrow} alt="" /></ScrollLink></button>
      </div>
    </div>
  )
}

export default Hero
