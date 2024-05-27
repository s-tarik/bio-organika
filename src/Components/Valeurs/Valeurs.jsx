import React from 'react'
import './Valeurs.css'
import valeur_img from '../../assets/valeur.png'

const Valeurs = () => {
  return (
    <div className='valeur'>
        <div className="valeur-left">
            <img src={valeur_img} alt="" className='valeur-img'/>
        </div>
        <div className="valeur-right">
            <h3>Nos valeurs</h3>
            <h2>Mission et vision</h2>
            <p>Apporter des solutions médicales compétitives et innovantes au Maroc et à travers l’expertise de nos fournisseurs–partenaires, notre participation active aux grandes rencontres et congrès internationaux et le savoir-faire de notre équipe, nous nous tenons à la ponte de notre métier.</p>
            <h2>Evolution</h2>
            <p>Une évolution confirmée par les réalisations, les certifications et les chiffres obtenus grace à la sécurité d’emploi de nos produits et la hautequalité de notre formation.</p>
            <h2>Qualité</h2>
            <p>Un système de management de qualité conforme aux exigences et normes internationales.</p>
        </div>
    </div>
  )
}

export default Valeurs
