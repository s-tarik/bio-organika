import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Categories from '../Categories/Categories';
import SideNav from '../Sidenav/Sidenav';
import './ProduitsPage.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';


// const categories = ['ARTICULATIONS', 'BEAUTE_FEMINITE', 'BONBONS', 'CHEWING GUM', 'CIP AMPOULES', 'CIP COMPRIMES',
//   'CIRCULATION_VINALEGE', 'DIGESTION_TRANSIT', 'DRAINAGE_MINCEUR', 'GAMME ENFANT', 'GENITO URINAIRE',
//   'IMMUNITE', 'LA RUCHE', 'PROBIOTIQUES', 'SOMMEIL STRESS', 'SPECIFIQUES', 'VITALITE ACEROLA', 'VITAMINES & MINIREAUX'];

const ProduitsPage = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');


  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
      setSelectedCategory(category);
    setFilteredProducts(products.filter(product => product.category === category));
  }, [location]);


  return (
    <div className='produits-page-container'>
      <div className="sidenav">
      <SideNav />
      </div>
      <div className='main-content'>
      <h1>Produits de la gamme : <span className='CategoryFont'>{category}</span> </h1>
      <div className='productCard'>
        {filteredProducts.map(product => (
          <div className='card-item' key={product.name}> <h4>{product.name}</h4> <img className='e' src={product.image} alt="" /></div>
        ))} 
      </div>
          <Title subTitle='CONTACTEZ-NOUS' title='Prendre contact avec nous' />
          <Contact />
          <Footer />
      </div>
    </div>
    
  );
};

export default ProduitsPage;
