import React from "react";
import "./AboutMe.css"
import aboutMeImg from "../../images/aboutme.jpeg"

const AboutMe = () => {

  return (
    <section id="about-me">
        <h1 className="h1-title">Sobre mim</h1>
        <div className="about-content">
          <div className="paragraphs">
            <h1>
              João Victor
            </h1>
            <p>
              Tenho 19 anos e nasci em Campo Grande
              MS. Atualmente estou cursando Desenvolvimento Web Full Stack pela
              Trybe.
            </p>

            <p>
              Sou um jovem apaixonado por aprender coisas novas, buscando
              sempre melhorias pessoal e profissionalmente.
            </p>

            <p>
              Trabalho e acredito em ações que possam gerar um impacto positivo
              na vida das pessoas.
            </p>
          </div>
          <img src={aboutMeImg} alt="minha foto" />
        </div>
      </section>
  )
}

export default AboutMe;