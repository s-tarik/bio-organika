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
      {categories.map(category => (
        <button className='c' key={category} onClick={() => handleCategorySelect(category)}>
          {category}
        </button>
      ))}
      </ul>
    </div>
  );
};

export default Categories;
