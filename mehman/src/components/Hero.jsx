import React from "react";

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: 'url("/assets/images/grilled-bg.jpg")' }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Manger, dormir et répéter</p>
          <h2 className="h1 hero-title">
            Le poulet tandoori super délicieux en ville !
          </h2>
          <p className="hero-text">
            La nourriture est toute substance consommée pour fournir un soutien
            nutritionnel à un organisme
          </p>
          <button className="btn" id="reservation-btn">
            Réservez une table
          </button>
        </div>
        {/* <figure className="hero-banner">
          <img
            src="/assets/images/hero-banner-bg.png"
            width={820}
            height={716}
            alt=""
            aria-hidden="true"
            className="w-100 hero-img-bg"
          />
          <img
            src="/assets/images/hero-banner.png"
            width={700}
            height={637}
            loading="lazy"
            alt="Burger"
            className="w-100 hero-img"
          />
        </figure> */}
      </div>
    </section>
  );
};

export default Hero;
