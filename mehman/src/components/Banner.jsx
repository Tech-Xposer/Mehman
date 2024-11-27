import { useMenu } from "@/contexts/MenuContext";
import React from "react";

const Banner = () => {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <section className="section section-divider gray banner">
      <div className="container">
        <ul className="banner-list">
          <li className="banner-item banner-lg">
            <div className="banner-card">
              <img
                src="/assets/images/banner-1.jpg"
                width={550}
                height={450}
                loading="lazy"
                alt="Discount For Delicious Tasty Burgers!"
                className="banner-img"
              />
              <div className="banner-item-content">
                <p className="banner-subtitle">Offres exceptionnelles</p>
                <h3 className="banner-title">
                Remise de 10% sur les plats à emporter
                </h3>
                <p className="banner-text">nourriture avec boisson</p>
                <button className="btn"  onClick={toggleMenu}>Commandez maintenant</button>
              </div>
            </div>
          </li>
          <li className="banner-item banner-sm">
            <div className="banner-card">
              <img
                src="/assets/images/banner-2.jpg"
                width={550}
                height={465}
                loading="lazy"
                alt="Delicious Pizza"
                className="banner-img"
              />
              <div className="banner-item-content">
                <h3 className="banner-title">Poulet délicieux</h3>
                <p className="banner-text">L&apos;eau à la bouche</p>
                <button className="btn" onClick={toggleMenu}>Commandez maintenant</button>
              </div>
            </div>
          </li>
          <li className="banner-item banner-sm">
            <div className="banner-card">
              <img
                src="/assets/images/banner-3.jpg"
                width={550}
                height={465}
                loading="lazy"
                alt="American Burgers"
                className="banner-img"
              />
              <div className="banner-item-content">
                <h3 className="banner-title">La meilleure cuisine indienne</h3>
                <p className="banner-text">En France</p>
                <button className="btn" onClick={toggleMenu}>Commandez maintenant</button>
              </div>
            </div>
          </li>
          <li className="banner-item banner-md">
            <div className="banner-card">
              <img
                src="/assets/images/banner-4.jpg"
                width={550}
                height={220}
                loading="lazy"
                alt="Tasty Buzzed Pizza"
                className="banner-img"
              />
              <div className="banner-item-content">
                <h3 className="banner-title">Poulet tandoori savoureux</h3>
                <p className="banner-text">Avec plus de croquant</p>
                <button className="btn" onClick={toggleMenu}>Commandez maintenant</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
