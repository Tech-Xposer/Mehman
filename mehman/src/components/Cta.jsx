import React from "react";

const Cta = () => {
  return (
    <section
      className="section section-divider  cta"
      style={{ backgroundImage: 'url("/assets/images/food-bg.avif")' }}
    >
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">
          Les Mehman ont une excellente qualité
            <span className="span">Nourriture de qualité !</span>
          </h2>
          <p className="section-text">
          Situé au cœur de la France, Mehman propose une expérience culinaire unique
      mêlant tradition et innovation. Inspiré par une riche histoire gastronomique, 
      notre restaurant incarne l'art de recevoir avec des plats savoureux préparés avec soin.
          </p>
          <button className="btn btn-hover">Order Now</button>
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
