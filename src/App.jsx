import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Title from './Components/Title/Title';
import Valeurs from './Components/Valeurs/Valeurs';
import Partners from './Components/Partners/Partners';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import Produits from './Components/Produits/Produits';
import Services from './Components/Services/Services';
import Categories from './Components/Categories/Categories';
import ProduitsPage from './Components/ProduitsPage/ProduitsPage';

const categories = ['ARTICULATIONS', 'BEAUTE_FEMINITE', 'BONBONS', 'CHEWING GUM', 'CIP AMPOULES', 'CIP COMPRIMES',
  'CIRCULATION_VINALEGE', 'DIGESTION_TRANSIT', 'DRAINAGE_MINCEUR', 'GAMME ENFANT', 'GENITO URINAIRE',
  'IMMUNITE', 'LA RUCHE', 'PROBIOTIQUES', 'SOMMEIL STRESS', 'SPECIFIQUES', 'VITALITE ACEROLA', 'VITAMINES ET MINERAUX'];

const products = [
  // ARTICULATIONS
  {name: 'CURCUMA 9000 & POIVRE NOIR', category: 'ARTICULATIONS', image:'/produitsPhotos/Cucuma9000.png'},
  {name: 'CURCUMA 6000 PILULIER BIOCOOP', category: 'ARTICULATIONS', image:'/produitsPhotos/Curcuma6000.png'},
  {name: 'CURCUMA AMP 20+10', category: 'ARTICULATIONS', image:'/produitsPhotos/CurcumaGin.png'},
  {name: 'OSTEOPROTECT + COMPRIMES', category: 'ARTICULATIONS', image:'/produitsPhotos/Ostéoprotect+comprimé.png'},
  {name: 'OSTEOPROTECT EXPORT', category: 'ARTICULATIONS', image:'/produitsPhotos/osteoprotect bilingue.png'},
  {name: 'CURCUMA FORTE AMPOULES', category: 'ARTICULATIONS', image:'/produitsPhotos/CurcumaGin1.png'},
  {name: 'COMPLEXE COLLAGENE', category: 'ARTICULATIONS', image:'/produitsPhotos/complexe-collagene-marin.png'},
  {name: 'GLUCO CHONDRO VEGETAL', category: 'ARTICULATIONS', image:'/produitsPhotos/MAQUETTE GLUCO CHONDRO détouré.png'},
  // BEAUTE_FEMINITE
  {name: 'YAM ONAGRE', category: 'BEAUTE_FEMINITE', image:'/produitsPhotos/complexe-Yam-onagre reno.png' },
  {name: 'CAPILEA', category: 'BEAUTE_FEMINITE', image:'/produitsPhotos/3D-capilea.png' },
  {name: 'DERMIDEAL', category: 'BEAUTE_FEMINITE', image:'/produitsPhotos/dermideal-zinc-bardane.png' },
  {name: 'DERMIDEAL + ANTI RIDES', category: 'BEAUTE_FEMINITE', image:'/produitsPhotos/Dermideal-plus.png' },
  {name: 'LEVURE DE BIERE PAILLETTES', category: 'BEAUTE_FEMINITE', image:'/produitsPhotos/LEVURE DE BIERE paillettes.png' },
  {name: 'DERMIDEAL SOLAIRE', category: 'BEAUTE_FEMINITE', image:'/produitsPhotos/DIET-DERMIDEAL SOLAIRE-3D.png' },
  {name: 'HUILES VEGETALES', category: 'BEAUTE_FEMINITE', image:'/produitsPhotos/DIETAROMA BOURRACHE ONAGRE-HD.png' },
  // BONBONS
  {name: 'PROPOLIS', category: 'BONBONS', image:'/produitsPhotos/Bonbons-propolis.png' },
  {name: 'GELEE ROYALE', category: 'BONBONS', image:'/produitsPhotos/Bonbons-gelée-royale.jpg' },
  {name: 'EXTRAIT DE PEPINS DE PAMPLEMOUSSE', category: 'BONBONS', image:'/produitsPhotos/Bonbons-EPP.png' },
  {name: 'ACEROLA', category: 'BONBONS', image:'/produitsPhotos/Bonbons-acerola.png' },
  {name: 'EUCALYPTUS', category: 'BONBONS', image:'/produitsPhotos/Bonbons-eucalyptus_DETOURE.png' },
  {name: 'SEVE DE PIN', category: 'BONBONS', image:'/produitsPhotos/Bonbons-seve-de-pin.png' },
  {name: 'RAVINTSARA', category: 'BONBONS', image:'/produitsPhotos/Bonbons-ravintsara.png' },
  // CHEWING GUM ../src/assets/produitsPhotos/3D-capilea.png
  {name: 'MIEL & PROPOLIS', category: 'CHEWING GUM', image:'/produitsPhotos/chewing-gum-miel-propolis.png' },
  {name: 'EUCALYPTUS', category: 'CHEWING GUM', image:'/produitsPhotos/chewing-gum-eucalyptus.png' },
  // CIP AMPOULES
  {name: 'CIP DIGESTION', category: 'CIP AMPOULES', image:'/produitsPhotos/DIETAROMA-DIGESTION_HD_200505 détouré.png' },
  {name: 'CIP CIRCULATION', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP CIRCULATION.png' },
  {name: 'CIP SOMMEIL', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP SOMMEIL sans coquelicot détouré.png' },
  {name: 'CIP IMMUNITE', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP-immunité.png' },
  {name: 'CIP BEAUTE - PEAU NETTE', category: 'CIP AMPOULES', image:'/produitsPhotos/peau-nette.png' },
  {name: 'CIP MINCEUR - ELIMINATION', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP ELIMINATION.png' },
  {name: 'CIP DESMODIUM FORTE', category: 'CIP AMPOULES', image:'/produitsPhotos/desmodium.png' },
  {name: 'CIP STRESS - RELAXATION', category: 'CIP AMPOULES', image:'/produitsPhotos/relaxation.png' },
  {name: 'CIP RHODIOLA', category: 'CIP AMPOULES', image:'/produitsPhotos/cip-rhodiola.png' },
  {name: 'CIP ARTICHAUT RADIS NOIR', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP-radis-noir artichaut.png' },
  {name: 'CIP AUBIER TILLEUL', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP-aubier-de-tilleul.png' },
  {name: 'CIP CHARDON MARIE', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP-chardon-marie.png' },
  {name: 'CIP DESMODIUM CONVENTIONNEL', category: 'CIP AMPOULES', image:'/produitsPhotos/3D-desmodium.png' },
  {name: 'CIP CRANBERRY', category: 'CIP AMPOULES', image:'/produitsPhotos/cranberry.png' },
  {name: 'CIP ARTICULATIONS NEW', category: 'CIP AMPOULES', image:'/produitsPhotos/articulations.png' },
  {name: 'CIP ARTICHAUT', category: 'CIP AMPOULES', image:'/produitsPhotos/artichaut.png' },
  {name: 'CIP ORTIE', category: 'CIP AMPOULES', image:'/produitsPhotos/ortie.png' },
  {name: 'CIP HARPAGO FFL', category: 'CIP AMPOULES', image:'/produitsPhotos/harpagophytum FFL.png' },
  {name: 'CIP VITALITE FFL', category: 'CIP AMPOULES', image:'/produitsPhotos/cip-vitalité FFL.png' },
  {name: 'CIP MILLEPERTUIS', category: 'CIP AMPOULES', image:'/produitsPhotos/Millepertuis détouré.png' },
  {name: 'CIP ECHINACEE', category: 'CIP AMPOULES', image:'/produitsPhotos/CIP ECHINACEE.png' },
  {name: 'CIP GINKGO', category: 'CIP AMPOULES', image:'/produitsPhotos/Ginkgo-BT-2021.png' },
  // CIP COMPRIMES
  {name: 'CIP Cps SOMMEIL', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-SOMMEIL.png' },
  {name: 'CIP Cps ARTICULATIONS', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-ARTICULATIONS.png' },
  {name: 'CIP Cps DIGESTION', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-DIGESTION.png' },
  {name: 'CIP Cps IMMUNITE', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-IMMUNITE.png' },
  {name: 'CIP Cps CIRCULATION', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-CIRCULATION.png' },
  {name: 'CIP Cps VIGNE ROUGE', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-VIGNE-ROUGE.png' },
  {name: 'CIP Cps ECHINACEE', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-ECHINACEE.png' },
  {name: 'CIP Cps PASSIFLORE', category: 'CIP COMPRIMES', image:'produitsPhotos/flacon-PASSIFLORE.png' },
  {name: 'CIP Cps ARTICHAUT RADIS NOIR', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-RADIS-NOIR-ARTICHAUT.png' },
  {name: 'CIP Cps MACA', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-MACA.png' },
  {name: 'CIP Cps CHARDON MARIE', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-CHARDON-MARIE.png' },
  {name: 'CIP Cps DESMODIUM', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-DESMODIUM.png' },
  {name: 'CIP Cps HARPAGOPHYTUM', category: 'CIP COMPRIMES', image:'/produitsPhotos/flacon-HARPAGOPHYTUM.png' },
  // CIRCULATION_VINALEGE
  {name: 'VINALEGE DUALEGE BIO COMPRIMES', category: 'CIRCULATION_VINALEGE', image:'/produitsPhotos/vinalège.png' },
  {name: 'VINALEGE DOUBLE ACTION AMPOULE', category: 'CIRCULATION_VINALEGE', image:'/produitsPhotos/vinalège circulation-et-élimination.png' },
  {name: 'VINALEGE DOUBLE ACTION AMPOULE 20+10', category: 'CIRCULATION_VINALEGE', image:'/produitsPhotos/vinalège-20-+-10.png' },
  {name: 'VINALEGE COCKTAIL PLUS 450ML', category: 'CIRCULATION_VINALEGE', image:'/produitsPhotos/flacon-vinalège sans bouchon.png' },
  {name: 'CIRCULIOR Crème Reno 150ml', category: 'CIRCULATION_VINALEGE', image:'/produitsPhotos/circulior sans calophylle 3D.png' },
  // DIGESTION_TRANSIT
  {name: 'ACTILEGE DIGESTION PLUS BOISSON', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/ACTILEGE BOISSON 2019.png' },
  {name: 'ACTION TRANSIT BIO', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/action-transit.png' },
  {name: 'GASTRIDEAL', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/gastrideal-11-2017.jpg' },
  {name: 'PSYLLIUM 150g pot', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/pot 150.png' },
  {name: 'PSYLLIUM 300g pot', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/pot psyllium 300g.png' },
  {name: 'PSYLLIUM 500g pot', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/pot psyllium 500.png' },
  {name: 'LEVURE DE BIERE VIVANTE CPS', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/LEVURE-DE-BIERE-VIVANTE-BIO-CPS.png' },
  {name: 'LEVURE DE BIERE VIVANTE CPS FORMAT ECO', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/1LEVURE-DE-BIERE-VIVANTE-BIO-promo.png' },
  {name: 'CHARBON VEGE BIO', category: 'DIGESTION_TRANSIT', image:'/produitsPhotos/CHARBON VEGETAL BIO _3D.png' },
  // DRAINAGE_MINCEUR
  {name: 'DRAINIDEAL BIO', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/dermideal-detox-et-drainage.png' },
  {name: 'DRAINIDEAL BIO 20+10', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/dermideal-detox-et-drainage20+10.png' },
  {name: 'CAP LIGNE KONJAC', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/cap-ligne-konjac.png' },
  {name: 'DRAINACID', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/drainacid-acido-basique.png' },
  {name: 'BOULEAU TOTUM', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/BOULEAU.png' },
  {name: 'AMPOULE MINCEUR 20+10', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/cap ligne brule graisses offre spécial.png' },
  {name: 'BOULEAU TOTUM 480ML', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/BOULEAU TOTUM 480 ML DONT 25.png' },
  {name: 'RENO CAP LIGNE BRULE GRAISSE', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/cap-ligne-brule-graisse.png' },
  {name: 'CAPLIGNE BRULE GRAISSE CPS', category: 'DRAINAGE_MINCEUR', image:'/produitsPhotos/1cap-ligne-brule-graisse.jpg' },
  // GAMME ENFANT
  {name: 'IMMUNITE', category: 'GAMME ENFANT', image:'/produitsPhotos/immunité-etui-flacon.jpg' },
  {name: 'VITALITE', category: 'GAMME ENFANT', image:'/produitsPhotos/vitalité-etui-flacon.png' },
  {name: 'SOMMEIL', category: 'GAMME ENFANT', image:'/produitsPhotos/sommeil-etui-flacon.png' },
  {name: 'DETENTE', category: 'GAMME ENFANT', image:'/produitsPhotos/1sommeil-etui-flacon.png' },
  // GENITO URINAIRE
  {name: 'CYSTENEA PLUS BOISSON', category: 'GENITO URINAIRE', image:'/produitsPhotos/cystenea +.jpg' },
  {name: 'CYSTENEA DUO', category: 'GENITO URINAIRE', image:'/produitsPhotos/cystenea duo.png' },
  {name: 'RENO CAPITAL HOMME PROSTATE', category: 'GENITO URINAIRE', image:'/produitsPhotos/capital-homme.png' },
  {name: 'RENO CAPITAL HOMME PROSTATE FORMAT PROMO', category: 'GENITO URINAIRE', image:'/produitsPhotos/capital-homme-eco.png' },
  // IMMUNITE
  {name: 'EPP', category: 'IMMUNITE', image:'/produitsPhotos/EPP1200.png' },
  {name: 'Oléopolis', category: 'IMMUNITE', image:'/produitsPhotos/Oleopolis 2018.jpg' },
  {name: 'Spray propolis bio', category: 'IMMUNITE', image:'/produitsPhotos/spray gorge.png' },
  {name: 'Gommes Propolis', category: 'IMMUNITE', image:'/produitsPhotos/gommes-propolis.png' },
  {name: 'Respiréa aux huiles essentielles', category: 'IMMUNITE', image:'/produitsPhotos/spray-respirea-2022.png' },
  {name: 'Oléopolis en gouttes', category: 'IMMUNITE', image:'/produitsPhotos/Oléopolis en gouttes 3D.png' },
  // LA RUCHE
  {name: 'GR Airless', category: 'LA RUCHE', image:'/produitsPhotos/flacon airless detouré.png' },
  {name: 'GR ampoules Offre Spéciale', category: 'LA RUCHE', image:'/produitsPhotos/la-ruche-gelée-royale-2022.png' },
  {name: 'Pollen  GR', category: 'LA RUCHE', image:'/produitsPhotos/Pollen-doy-pack-200g-2022.png' },
  {name: 'Gouttes propolis', category: 'LA RUCHE', image:'/produitsPhotos/ruche-propolisv2-sans-fond.png' },
  {name: 'Gelée Royale Française', category: 'LA RUCHE', image:'/produitsPhotos/ruche-ampoules-gelée-royale.png' },
  {name: 'Merveilles de la Ruche', category: 'LA RUCHE', image:'/produitsPhotos/merveilles-de-la-ruche-2022-horizontal.png' },
  {name: 'Gouttes propolis FR', category: 'LA RUCHE', image:'/produitsPhotos/NOUVELLE CHARTE 3D-propolis-francaise-2022.png' },
  {name: 'Propolis à croquer', category: 'LA RUCHE', image:'/produitsPhotos/propolis-500-a-croquer-2022.png' },
  {name: 'Gelée royale à croquer', category: 'LA RUCHE', image:'/produitsPhotos/GR-1000-a-croquer-2022.png' },
  {name: 'Gelée royale 3 500 mg', category: 'LA RUCHE', image:'/produitsPhotos/3D-GR-3500-vertical-2022.png' },
  // PROBIOTUQUES
  {name: 'PHILAROMAL MULTI', category: 'PROBIOTIQUES', image:'/produitsPhotos/quotidien.png' },
  {name: 'PHILAROMAL L-GLUTAMINE', category: 'PROBIOTIQUES', image:'/produitsPhotos/perméabilité.png' },
  {name: 'PHILAROMAL ENFANT', category: 'PROBIOTIQUES', image:'/produitsPhotos/probiotiques-enfants.png' },
  {name: 'PHILAROMAL FLORE INTIME', category: 'PROBIOTIQUES', image:'/produitsPhotos/Flore-intime.png' },
  {name: 'PHILAROMAL 50+', category: 'PROBIOTIQUES', image:'/produitsPhotos/3D-50+.png' },
  {name: 'PHILAROMAL FORTE', category: 'PROBIOTIQUES', image:'/produitsPhotos/Forte NON BIO.png' },
  {name: 'PHILAROMAL CLASSIC NON BIO', category: 'PROBIOTIQUES', image:'/produitsPhotos/MICROBIOTIQUES-CLASSIC-NONBIO_3D.png' },
  // SOMMEIL STRESS
  {name: 'SERENIPHYT', category: 'SOMMEIL STRESS', image:'/produitsPhotos/sereniphyt.png' },
  {name: 'NOCTA+MELATONINE', category: 'SOMMEIL STRESS', image:'/produitsPhotos/nocta+-mélatonine.png' },
  {name: 'SPRAY SOMMEIL', category: 'SOMMEIL STRESS', image:'/produitsPhotos/SOMMEIL-SPRAY.png' },
  {name: 'SPRAY STRESS', category: 'SOMMEIL STRESS', image:'/produitsPhotos/STRESS-SPRAY.png' },
  {name: 'SPRAY JOIE DE VIVRE', category: 'SOMMEIL STRESS', image:'/produitsPhotos/JOIE-DE VIVRE-SPRAY.png' },
  // SPECIFIQUE
  {name: 'MEMO VIV+CAPITAL CEREBRAL', category: 'SPECIFIQUES', image:'/produitsPhotos/complexe-capital-mémoire.png' },
  {name: 'CAPITAL VUE', category: 'SPECIFIQUES', image:'/produitsPhotos/capital-vue.png' },
  {name: 'PHYTALLERG', category: 'SPECIFIQUES', image:'/produitsPhotos/phytallerg.png' },
  {name: 'AIL NOIR', category: 'SPECIFIQUES', image:'/produitsPhotos/ail-noir.png' },
  {name: 'OMEGA 3 Végétal', category: 'SPECIFIQUES', image:'/produitsPhotos/omega3.png' },
  {name: 'AIL OLIVIER AUBEPINE', category: 'SPECIFIQUES', image:'/produitsPhotos/ail-olivier-aubépine.png' },
  // VITALITE ACEROLA
  {name: 'Acerola FFL', category: 'VITALITE ACEROLA', image:'/produitsPhotos/acerola-1000-BT-FFL.png' },
  {name: 'Acerola poudre FFL', category: 'VITALITE ACEROLA', image:'/produitsPhotos/Acérola FFL.png' },
  {name: 'Ginseng Extra fort', category: 'VITALITE ACEROLA', image:'/produitsPhotos/ginseng-20+10.png' },
  // VITAMINES & MINERAUX
  {name: 'COMPLEXE FER+VITAMINE C', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/COMPLEXE FER RENO.png' },
  {name: 'COMPLEXE MAGNESIUM + B6&B5', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/complexe-magnésium-marin.png' },
  {name: 'COMPLEXE MAGNESIUM + B6&B5 FORMAT ECO', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/magnesium-eco.png' },
  {name: 'VITAMINES NATURELLES K2 & D3', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/VITAMINES-NATURELLES-K2-&-D3.png' },
  {name: '6 MAGNESIUM Forté', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/6 MAGNESIUM Forté détouré.png' },
  {name: 'MIX B12 VEGAN', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/mixB12.png' },
  {name: 'MAGNESIUM AMPOULES', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/Magnésium marin ampoules.png' },
  {name: 'VITAMINE D3', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/VIT D3.png' },
  {name: 'ZINC', category: 'VITAMINES ET MINERAUX', image:'/produitsPhotos/zinc.png' },
];


const ShowHero = () =>{
  const location = useLocation();
  return location.pathname === "/" ? <Hero /> : null;
}

const App = () => {

  

  const [selectedCategory, setSelectedCategory] = useState('');

  console.log(location.pathname)



  // const isProduitsPage = location.pathname === '/produits';

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <ShowHero/>
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                
                <Title subTitle='à propos de nous' title='Nous sommes qui ?' />
                <About />
                <Title subTitle='PARTENAIRES' title='Nos partenaires' />
                <Partners />
                <Valeurs />
                <Title subTitle='SERVICES' title='Nos services' />
                <Services />
                <Title subTitle='PRODUITS' title='Nos gammes' />
                <Categories categories={categories} onSelectCategory={onSelectCategory} />
              </>
            } />
            <Route path="/produits" element={<ProduitsPage products={products} selectedCategory={selectedCategory} />} />
          </Routes>
        <>
        {location.pathname === '/' && (
          <>
          <Title subTitle="CONTACTEZ-NOUS" title="Prendre contact avec nous" />
          <Contact />
          <Footer />
          </>
        )}

        </>
        </div>
      </div>
    </Router>
  );
};

export default App;
