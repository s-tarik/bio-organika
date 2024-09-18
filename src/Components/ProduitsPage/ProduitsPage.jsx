import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Modal from 'react-modal';
import Navbar from '../Navbar/Navbar'
import SideNav from '../Sidenav/Sidenav';
import './ProduitsPage.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Modal from '../Modal/Modal';

const ProduitsPage = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const searchQuery = queryParams.get('search');

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [location, category, searchQuery, products]);

  const toggleModal = (product) => {
    setCurrentProduct(product);
    openModal(!modalOpen);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='produits-page-container'>
      <Navbar />
      <div className="sidenav">
        <SideNav />
      </div>
      <div className='main-content'>
        <h1>Produits de la gamme : <span className='CategoryFont'>{category}</span> </h1>
        <div className='productCard'>
          {filteredProducts.map(product => (
            <div className='card-item' key={product.name} onClick={() => toggleModal(product)}> 
              <h4>{product.name}</h4> 
              <img className='e' src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
        <Title subTitle='CONTACTEZ-NOUS' title='Prendre contact avec nous' />
        <Contact />
        <Footer />
      </div>


<Modal isOpen={modalOpen} onClose={closeModal} product={currentProduct} />

    </div>
  );
};

export default ProduitsPage;
