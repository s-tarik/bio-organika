import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import menu from '../../assets/menu.png'


import React, {useState} from 'react';
import './Navbar.css';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion, AnimatePresence } from 'framer-motion';



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);


  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch= () => {
    setOpenSearch(!openSearch);
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/produits?search=${searchQuery}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/produits?category=${category}`);
  };

  return (
    <div className="navbar">
      <a href ='/'>
        <img src={logo} alt="Logo" className="logo-image" />
      </a>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <img src={menu} alt="" className='menu-button' />
      </button>
     <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
     <ScrollLink to = 'about' smooth={true} offset={-260} duration={500}>À propos de nous</ScrollLink>
     <ScrollLink to = 'valeur' smooth={true} offset={-150} duration={500}>Nos valeurs</ScrollLink>
     <div className="subnav"> 
          <AnchorLink offset={200} href='#services'>Vos Besoins</AnchorLink>
          <div className="subnav-content">
        <div className='subbb'>
        <div className='sabnavBesoin'>
            <h3 onClick={() => handleCategoryClick('ARTICULATIONS')}>Diététique</h3>
            <p >100% Bio</p>
            <p>Vegan</p>
            <p>Sans Sucre</p>
            <p>Cétogène</p>
          </div>
          <div className='sabnavBesoin'>
            <h3>Santé</h3>
            <p>Grossesse</p>
            <p>Cheveux, Peau & Ongles</p>
            <p>Digestion</p>
            <p>DSystème Immunitaire</p>
          </div>
          <div className='sabnavBesoin'>
            <h3 onClick={() => handleCategoryClick('BONBONS')}>Nos Marques</h3>
            <p >Dietaroma</p>
            <p>Eric Favre</p>
            <p>Veda.Lab</p>
            <p>Bioptimal</p>
          </div>
          <div className='sabnavBesoin'>
            <h3 onClick={() => handleCategoryClick('CIP AMPOULES')}>Destiné aux</h3>
            <p onClick={() => handleCategoryClick('BEAUTE_FEMINITE')} >Femmes</p>
            <p>Hommes</p>
            <p>Enfants</p>
          </div>
          <div>
          <button onClick={() => handleCategoryClick('ARTICULATIONS')} className='plusbtn'> Afficher tous </button>

          </div>
        </div>
        </div>

     </div>
        
      <div className="subnav">
        <AnchorLink className="subnavbtn" offset={200} href='#category'>Nos produits <i className="fa fa-caret-down"></i></AnchorLink>
        
        <div className="subnav-content">
        <div className='subbb'>
        <div className='sabnavCategory'>
            <h3 onClick={() => handleCategoryClick('ARTICULATIONS')}>ARTICULATIONS</h3>
            <p >CURCUMA 9000 & POIVRE NOIR</p>
            <p>CURCUMA AMP 20+10</p>
            <p>OSTEOPROTECT + COMPRIMES</p>
            <p>COMPLEXE COLLAGENE</p>
          </div>
          <div className='sabnavCategory'>
            <h3 onClick={() => handleCategoryClick('BEAUTE_FEMINITE')}>BEAUTE_FEMINITE</h3>
            <p>YAM ONAGRE</p>
            <p>CAPILEA</p>
            <p>DERMIDEAL</p>
            <p>DERMIDEAL + ANTI RIDES</p>
          </div>
          <div className='sabnavCategory'>
            <h3 onClick={() => handleCategoryClick('BONBONS')}>BONBONS</h3>
            <p >PROPOLIS</p>
            <p>GELEE ROYALE</p>
            <p>ACEROLA</p>
            <p>SEVE DE PIN</p>
          </div>
          <div className='sabnavCategory'>
            <h3 onClick={() => handleCategoryClick('CIP AMPOULES')}>CIP AMPOULES</h3>
            <p >CIP DIGESTION</p>
            <p>CIP CIRCULATION</p>
            <p>CIP SOMMEIL</p>
            <p>CIP IMMUNITE</p>
          </div>
          <div>
          <button onClick={() => handleCategoryClick('ARTICULATIONS')} className='plusbtn'> Afficher tous </button>

          </div>
        </div>
        </div>
       
      </div>
      <AnimatePresence>
    {openSearch && (
      <motion.form
        onSubmit={handleSearchSubmit}
        className="search-form"
        initial={{ opacity: 0, x: 100 }}  
        animate={{ opacity: 1, x: 0 }}   
        exit={{ opacity: 0, x: 100 }}    
        transition={{ duration: 0.3 }}   
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Rechercher des produits..."
          className="search-input"
        />
        <button type="submit" className="search-button">Rechercher</button>
      </motion.form>
    )}
  </AnimatePresence>
     </div>
     <img src={search} alt="" className='searchicone'  onClick={toggleSearch}/>

     <ScrollLink to = 'contact' smooth={true} offset={-260} duration={500} className='contactez-nous'>Contactez-nous</ScrollLink>

    </div>
  );
};

export default Navbar;
