import React from 'react';
import styles from "./About.module.css";

function About() {

  return (
    <div className={styles.container}>
      <div className={styles.textDiv}>
        <h1 className={styles.abouUsH1}>Wie zijn we</h1>
        <p className={styles.abouUsText}>We zijn een klein ambitieus bedrijf met een groot assortiment.
          Ons bedrijf is in 2020 gestart met een groep vrienden.
          Het was meer als een passie onder vrienden begonnen. De passie is heel snel naar werkelijkheid veranderd.
          Er is niks beter dan jouw passie als beroep uit te oefenen.
          We zijn hier om jullie vreugde en een heerlijke smaak aan te bieden.
          Word maar heel snel één van onze vrienden.<img className={styles.happyFace} src="./happy.png" /></p>

      </div>
      <img className={styles.friends} src="./vrienden.jpg" />
    </div>

  )
}

export default About;