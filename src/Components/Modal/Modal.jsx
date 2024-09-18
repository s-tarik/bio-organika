import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, product }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  // Handle modal visibility based on props
  React.useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  // Close modal function
  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };


  // Render modal content
  return (
    <>
      {isVisible && (
        <div className="modal-overlay">
          <div className="modalprod">
            <div className="modalprod-content">
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} className="modalprod-image" />
              <h1>Description</h1>
              <p className='description'>{product.description}</p>
              {product.engagement && (
                <>
                  <h3 className='dietaroma'>NOS ENGAGEMENTS : </h3>
                  <p className='instructions'>{product.engagement}</p>
                </>
              )}
              {product.dietaroma && (
                <>
                  <h3 className='dietaroma'>DIETAROMA S'ENGAGE :</h3>
                  <p className='instructions'>{product.dietaroma}</p>
                </>
              )}
              <h1>Conseils d'utilisation</h1>
              {product.instructions && (
                <>
                  <h3>MODE D'EMPLOI :</h3>
                  <p className='instructions'>{product.instructions}</p>
                </>
              )}
              {product.precautions && (
                <>
                  <h3>PRECAUTIONS D'EMPLOI : </h3>
                  <p className='precautions'>{product.precautions}</p>
                </>
              )}
              {product.astuce && (
                <>
                  <h3>ASTUCES : </h3>
                  <p className='precautions'>{product.astuce}</p>
                </>
              )}
              {product.danger && (
                <>
                  <h3 className='danger'> MENTIONS DE DANGER : </h3>
                  <p className='precautions'>{product.danger}</p>
                </>
              )}
              {product.contre && (
                <>
                  <h3> CONTRE-INDICATION : </h3>
                  <p className='precautions'>{product.contre}</p>
                </>
              )}
            </div>
            <button className="close-button" onClick={closeModal}>
              fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
