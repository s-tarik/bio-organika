import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidenav.css';

const categories = [
  'ARTICULATIONS', 'BEAUTE_FEMINITE', 'BONBONS', 'CHEWING GUM', 'CIP AMPOULES', 'CIP COMPRIMES',
  'CIRCULATION_VINALEGE', 'DIGESTION_TRANSIT', 'DRAINAGE_MINCEUR', 'GAMME ENFANT', 'GENITO URINAIRE',
  'IMMUNITE', 'LA RUCHE', 'PROBIOTIQUES', 'SOMMEIL STRESS', 'SPECIFIQUES', 'VITALITE ACEROLA', 'VITAMINES ET MINERAUX'
];

const SideNav = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get('category') || categories[0];
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div>
      <ul>
        {categories.map(category => (
          <li key={category} className={activeCategory === category ? 'active' : ''}>
            <Link to={`/produits?category=${category}`} onClick={() => handleCategoryClick(category)}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
