import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { ContactMeSection } from "../styles/ContactMe";
// import '../styles/ContactMe.css';

function ContactMe() {
  return (
    <ContactMeSection id="contato">
      <h2>CONTATE-ME</h2>
      <div className="socialLinks">
        <a href="https://www.linkedin.com/in/adilsongabriel/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/adilsongb" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://api.whatsapp.com/send?phone=5594992776155" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
      </div>
      <form action="https://formsubmit.co/adilsongb.rabelo@gmail.com" method="POST">
        <input type="text" placeholder="Nome" name="name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="_subject" placeholder="Assunto" required />
        <textarea name="message" cols="30" rows="10" placeholder="Conteúdo" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </ContactMeSection>
  );
}

export default ContactMe;
