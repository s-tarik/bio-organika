import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ?  setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <a href = '/'><img src={logo} alt="" className='logo' /></a>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><ScrollLink to = 'about' smooth={true} offset={-260} duration={500}>À propos de nous</ScrollLink></li>
            <li><ScrollLink to = 'valeur' smooth={true} offset={-150} duration={500}>Nos valeurs</ScrollLink></li>
            <li><AnchorLink offset={200} href='#services'>Nos services</AnchorLink></li>
            <li><AnchorLink offset={200}  href='#category'>Nos produits</AnchorLink></li>
            <li><ScrollLink to = 'contact' smooth={true} offset={-260} duration={500} className='btn'>Contactez-nous</ScrollLink></li>
        </ul>
      <img src={menu} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
