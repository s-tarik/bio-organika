import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import mail from '../../assets/email.png'
import phone from '../../assets/phone.png'
import instgram from '../../assets/instagram.png'
import location from '../../assets/location.png'
import arrow from '../../assets/right-arrows.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Envoi....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c4b74c0b-15e5-40fe-8f22-769e21f278a9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("message soumis avec succès");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Envoyez-nous un message <img src={msg} alt="" /></h3>
            <ul>
                <li><img src={mail} alt="" />Contact@bioorganika.ma</li>
                <li><img src={phone} alt="" />05 22 44 17 57 - 06 60 33 29 85</li>
                <li><img src={location} alt="" />14 , Allée des jardins , Ain sebaa , Casablanca </li>
                <li><img src={instgram} alt="" /> BioOrganika </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Nom</label>
                <input type="text" name="name" placeholder='entrez votre nom' required/>
                <label>N° de téléphone</label>
                <input type="tel" name='phone' placeholder='entrez votre numèro de téléphone' required/>
                <label>écrivez votre message ici</label>
                <textarea name="message" rows="6" placeholder='entrez votre message' required></textarea>
                <button type='submit' className='a'>Envoyer maintenant <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
