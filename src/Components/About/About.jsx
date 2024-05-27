import React, { useState } from 'react';
import './About.css';
import about_1 from '../../assets/a10.jpg';
import about_2 from '../../assets/a8.jpg';
import about_3 from '../../assets/a1.jpg';
import about_icon_1 from '../../assets/about-icon-1.png';
import about_icon_2 from '../../assets/about-icon-2.png';
import about_icon_3 from '../../assets/about-icon-3.png';

const About = () => {
  const [visibleText, setVisibleText] = useState(null);

  const toggleTextVisibility = (text) => {
    setVisibleText(text === visibleText ? null : text);
  };

  return (
    <div className="abouts">
      <div className="about" onClick={() => toggleTextVisibility('Paragraph 1')}>
        {visibleText === 'Paragraph 1' ? (
          <p>Texte invisible pour le paragraphe 1</p>
        ) : (
          <>
            <img src={about_1} alt="" />
            <div className="caption">
              <img src={about_icon_1} alt="" />
              <p>Paragraph 1</p>
            </div>
          </>
        )}
      </div>
      <div className="about" onClick={() => toggleTextVisibility('Paragraph 2')}>
        {visibleText === 'Paragraph 2' ? (
          <p>Texte invisible pour le paragraphe 2</p>
        ) : (
          <>
            <img src={about_2} alt="" />
            <div className="caption">
              <img src={about_icon_2} alt="" />
              <p>Paragraph 2</p>
            </div>
          </>
        )}
      </div>
      <div className="about" onClick={() => toggleTextVisibility('Paragraph 3')}>
        {visibleText === 'Paragraph 3' ? (
          <p>Texte invisible pour le paragraphe 3</p>
        ) : (
          <>
            <img src={about_3} alt="" />
            <div className="caption">
              <img src={about_icon_3} alt="" />
              <p>Paragraph 3</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;




