import React, { useState } from 'react';
import Modal from 'react-modal';
import './About.css';
import about_1 from '../../assets/about_11.png';
import about_2 from '../../assets/about_12.png';
import about_3 from '../../assets/about_13.png';
import about_icon_1 from '../../assets/about-icon-1.png';
import about_icon_2 from '../../assets/about-icon-2.png';
import about_icon_3 from '../../assets/about-icon-3.png';

const About = () => {
  const [visibleText, setVisibleText] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({});

  const toggleModal = (content) => {
    setCurrentContent(content);
    setModalIsOpen(!modalIsOpen);
  };

  const content = {
    'Paragraph 1': {
      text: "Depuis sa fondation en 2012, Bio Organika s'est imposée comme une référence incontournable dans le domaine des compléments alimentaires et des cosmétiques au Maroc. Notre entreprise a été créée avec une vision claire : offrir des produits de qualité supérieure qui répondent aux besoins de santé et de bien-être de nos clients. En nous approvisionnant auprès de fournisseurs renommés en France, aux États-Unis, en Italie et dans d'autres pays, nous garantissons que chaque produit que nous proposons est fabriqué selon les normes les plus strictes et les plus avancées.",
      image: about_1,
      icon: about_icon_1,
      caption: 'Notre Histoire'
    },
    'Paragraph 2': {
      text: "Chez Bio Organika, la qualité et l'efficacité de nos produits sont au cœur de nos préoccupations. Nous sélectionnons soigneusement chaque ingrédient, en nous assurant qu'il répond à des critères rigoureux de pureté et de sécurité. Nos compléments alimentaires sont formulés pour maximiser les bienfaits pour la santé, en utilisant des ingrédients naturels et scientifiquement validés. De même, nos cosmétiques sont conçus pour offrir des résultats visibles et durables, tout en respectant l'équilibre naturel de la peau. Cette quête d'excellence nous permet de fournir à nos clients des produits auxquels ils peuvent faire confiance.",
      image: about_2,
      icon: about_icon_2,
      caption: 'Qualité et Efficacité de Nos Produits'
    },
    'Paragraph 3': {
      text: "En plus de nos produits de haute qualité, Bio Organika se distingue par ses services et son expertise. Notre équipe de professionnels est dédiée à offrir un service client exceptionnel, en fournissant des conseils personnalisés et des informations détaillées sur nos produits. Nous nous engageons à être à l'écoute de nos clients et à répondre à leurs besoins de manière rapide et efficace. Grâce à notre expertise dans le domaine des compléments alimentaires et des cosmétiques, nous sommes en mesure d'accompagner nos clients dans leur démarche de bien-être et de beauté, en leur proposant des solutions adaptées et innovantes.",
      image: about_3,
      icon: about_icon_3,
      caption: 'Nos Services et Expertise'
    }
  };

  return (
    <div className="abouts">
      {Object.keys(content).map((key) => (
        <div className="about" key={key} onClick={() => toggleModal(content[key])}>
          <img src={content[key].image} alt="" />
          <div className="caption">
            <img src={content[key].icon} alt="" />
            <p>{content[key].caption}</p>
          </div>
        </div>
      ))}
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="About Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <img src={currentContent.image} alt="" />
          <h2>{currentContent.caption}</h2>
          <p>{currentContent.text}</p>
        </div>
        <button onClick={toggleModal} className='close-button'>Fermer</button>
      </Modal>
    </div>
  );
};

export default About;





