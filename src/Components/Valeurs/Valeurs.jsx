import React from 'react'
import './Valeurs.css'
import valeur_img from '../../assets/valeur.png'
import Qualité from '../../assets/Qualité.png'
import education from '../../assets/education.png'
import efficacite from '../../assets/efficacité.png'

const Valeurs = () => {
  return (
    <div className='valeur'>
      <div className='valeur-section'>
        <div className="valeur-left">
            <img src={valeur_img} alt="" className='valeur-img'/>
        </div>
        <div className="valeur-right">
            <h2>Qualité et Sécurité des Produits : </h2>
            <h3>Normes et Certifications: </h3>
            <p>Les clients s'attendent à ce que les produits soient conformes aux normes internationales de qualité et de sécurité, comme les certifications ISO, GMP (Good Manufacturing Practices), ou encore des labels bio reconnus.</p>
            <h3>Traçabilité : </h3>
            <p>Possibilité pour les clients de connaître l'origine des ingrédients et les processus de fabrication, assurant ainsi la transparence.</p>
        </div>
        </div>

        <div className="valeur-section reverse">
        <div className="valeur-left">
            <img src={efficacite} alt="" className='valeur-img'/>
        </div>
        <div className='valeur-right'>
        <h2>Efficacité : </h2>
            <h3>Innovation Scientifique :</h3>
            <p>Nos produits sont basés sur les dernières recherches scientifiques, assurant des résultats tangibles pour le bien-être et la santé de nos clients.</p>
            <h3>Performance </h3>
            <p>Chaque produit que nous proposons est conçu pour offrir des résultats éprouvés, répondant aux attentes de nos clients.</p>
        </div>
        </div>

        <div className='valeur-section'>
        <div className="valeur-left">
            <img src={education} alt="" className='valeur-img'/>
        </div>
        <div className="valeur-right">
            <h2>Éducation et Accessibilité : </h2>
            <h3>Connaissance : </h3>
            <p>Nous croyons en l'éducation de nos clients, en leur fournissant les connaissances nécessaires pour faire des choix éclairés en matière de santé et de bien-être.</p>
            <h3>Accessibilité  : </h3>
            <p>Nos produits sont facilement accessibles grâce à un réseau de distribution étendu et un service client dévoué.</p>
        </div>
        </div>

        <div className="valeur-section reverse">
        <div className="valeur-left">
            <img src={Qualité} alt="" className='valeur-img'/>
        </div>
        <div className='valeur-right'>
        <h2>Valeur : </h2>
            <h3>Engagement pour un Bon Rapport Qualité-Prix  : </h3>
            <p>Nous offrons des produits de qualité à des prix compétitifs, sans compromettre nos standards élevés.</p>
            <h3>Récompense de la Fidélité : </h3>
            <p>Nous valorisons nos clients fidèles en leur offrant des avantages exclusifs et des programmes de fidélité attractifs.</p>
        </div>
        </div>

    </div>
  )
}

export default Valeurs
