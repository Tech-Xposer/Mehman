"use client"
import { useMenu } from "@/contexts/MenuContext";
import React from "react";

const About = () => {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <section className="section section-divider about" id="about">
      <div className="container">
        <img
          src="/assets/images/shape-1.png"
          width="246"
          height="412"
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src="/assets/images/shape-2.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <div className="about-banner">
          <img
            src="/assets/images/about-banner.png"
            width={509}
            height={459}
            loading="lazy"
            alt="Burger with Drinks"
            className="w-100 about-img"
          />
          <img
            src="/assets/images/sale-shape-red.png"
            width={216}
            height={226}
            alt="get up to 50% off now"
            className="abs-img scale-up-anim"
          />
        </div>
        <div className="about-content">
          <h2 className="h2 section-title">
            Poulet, poisson et le meilleur paneer
            <span className="span">en ville !</span>
          </h2>
          <p className="section-text">
            Les restaurants de Mehman, un restaurant indien axé sur la culture,
            ont également accueilli de nombreux visiteurs venus d&apos;autres
            régions, recherchant un goût authentique de l&apos;Inde. Il est bien
            connu que de nombreuses familles dirigent ces restaurants, apportant
            une touche traditionnelle à chaque plat.
          </p>
          <ul className="about-list">
            <li className="about-item">
              <ion-icon name="checkmark-outline" />
              <span className="span">Aliments délicieux et sains</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-outline" />
              <span className="span">
                Zone spécifique pour les familles et les enfants.
              </span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-outline" />
              <span className="span">Musique et autres installations.</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-outline" />
              <span className="span">
                Livraison de nourriture à domicile la plus rapide.
              </span>
            </li>
          </ul>
          <button 
  className="btn btn-hover" 
  onClick={() => {
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  réservation de table
</button>
        </div>
      </div>
    </section>
  );
};

export default About;
