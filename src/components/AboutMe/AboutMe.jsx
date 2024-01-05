import React from "react";
import "./AboutMe.css"
import aboutMeImg from "../../images/aboutme.jpg"

const AboutMe = () => {

  return (
    <section id="about-me">
        <h1 className="h1-title">Sobre mim</h1>
        <div className="about-content">
          <div className="paragraphs">
            {/* <h1>
              João Victor
            </h1> */}
            <p>
            Sou um Desenvolvedor Web Fullstack Jr. de 20 anos, formado na Trybe. Domino tecnologias front-end e back-end.
            </p>

            <p>
              Contribuí em projetos desafiadores, aplicando meu conhecimento para criar soluções eficientes. 
            </p>

            <p>
            Sou apaixonado por aprender, resolver problemas e acompanhar as tendências tecnológicas. Em busca de novas oportunidades para crescer profissionalmente e contribuir em projetos inovadores.
            </p>
          </div>
          <img src={aboutMeImg} alt="minha foto" />
        </div>
      </section>
  )
}

export default AboutMe;