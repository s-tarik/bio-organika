import React from 'react';
import './Categories.css'
import { useNavigate } from 'react-router-dom';

const Categories = ({ categories, onSelectCategory }) => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
    navigate(`/produits?category=${category}`);
  };

  return (
    <div id='category' className='container'>
      <ul className='b'>
      {categories.slice(0, 9).map(category => (
        <div className='c' key={category} onClick={() => handleCategorySelect(category)}>
          {category}
        </div>
      ))}

      </ul>
      <div className='seeprdbtn'>
      <a href='/produits?category=ARTICULATIONS'>Afficher tous</a>

      </div>
    </div>
  );
};

export default Categories;
