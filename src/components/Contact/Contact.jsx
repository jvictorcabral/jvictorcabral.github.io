import React from "react";
import "./Contact.css";
import gitHubLogo from "../../images/github-logo.png";
import LinkedinLogo from "../../images/linkedin-logo.png"
import whatsLogo from "../../images/whatsapp-logo.png"

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="h1-title">Contato</h1>

      <h2>Onde me encontrar?</h2>

      <div className="links">
        <a href="https://www.linkedin.com/in/jvcg/" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt="Linkedin Logo"/>Linkedin</a>

        <a href="https://github.com/jvictorcabral" target="_blank" rel="noopener noreferrer"><img src={gitHubLogo} alt="GitHub Logo" />GitHub</a>

        <a href="https://api.whatsapp.com/send?phone=5567998114906" target="_blank" rel="noopener noreferrer"><img src={whatsLogo} alt="Whatsapp Logo" />Whatsapp</a>
      </div>
    </section>
  );
};

export default Contact;
