"use client"
import { useMenu } from "@/contexts/MenuContext";
import React from "react";

const Cta = () => {
  const { menuOpen, toggleMenu } = useMenu()
  return (
    <section
      className="section section-divider  cta"
      style={{ backgroundImage: 'url("/assets/images/food-bg.avif")' }}
    >
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">
          Les Mehman ont une excellente qualite
            <span className="span">Quality Panir!</span>
          </h2>
          <p className="section-text">
          Ce restaurant est idéal pour les amis et les familles, vous pouvez le visiter et être rempli de joie et de prospérité, Mehman a toujours respecté ses clients et maintenu une bonne hygiène pour eux.
          </p>
          <button className="btn btn-hover"  onClick={toggleMenu}>Commandez maintenant</button>
        </div>
        <figure className="cta-banner">
          <img
            src="/assets/images/cta-banner.png"
            width={700}
            height={637}
            loading="lazy"
            alt="Burger"
            className="w-100 cta-img"
          />
          <img
            src="/assets/images/sale-shape.png"
            width={216}
            height={226}
            loading="lazy"
            alt="get up to 50% off now"
            className="abs-img scale-up-anim"
          />
        </figure>
      </div>
    </section>
  );
};

export default Cta;
