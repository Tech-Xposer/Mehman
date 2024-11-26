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
      Chez <span className="span">Mehman</span>, savourez 
      les poissons les plus délicieux !
    </h2>
    <p className="section-text">
      Situé au cœur de la France, Mehman vous invite à découvrir des saveurs authentiques 
      et raffinées. Spécialisé dans les plats de poisson exquis, notre restaurant marie 
      tradition et fraîcheur pour une expérience culinaire inoubliable.
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
