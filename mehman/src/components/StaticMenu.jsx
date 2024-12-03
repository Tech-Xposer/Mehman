"use client"
import { useMenu } from "@/contexts/MenuContext";
import React from "react";

const StaticMenu = () => {
  const { menuOpen, toggleMenu } = useMenu();
  return (
    <section className="section food-menu" id="food-menu">
      <div className="container">
        <p className="section-subtitle">Plats populaires.</p>
        <h2 className="h2 section-title">
          Nos délicieux <span className="span">Aliments</span>
        </h2>
        <p className="section-text">
          Les aliments sont consommés pour préserver l&apos;équilibre énergétique et
          biologique du corps.
        </p>
        <ul className="fiter-list">
          <li>
            <button className="filter-btn  active">All</button>
          </li>
          <li>
            <button className="filter-btn">Murghi tikka</button>
          </li>
          <li>
            <button className="filter-btn">Palak Paneer</button>
          </li>
          <li>
            <button className="filter-btn">Naan au fromage</button>
          </li>
          <li>
            <button className="filter-btn">Butter Chicken</button>
          </li>
        </ul>
        <ul className="food-menu-list">
          <li>
            <div className="food-menu-card">
              <div className="card-banner">
                <img
                  src="/assets/images/food-menu-1.png"
                  width={300}
                  height={300}
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  className="w-100"
                />
                <div className="badge">Délicieux</div>
                <button className="btn food-menu-btn" onClick={toggleMenu}>Commandez Maintenant</button>
              </div>
              <div className="wrapper">
                <p className="category">SHEAK KABAB</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">MURGHI MUGHLAI</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price">€7.50</data>
                
              </div>
            </div>
          </li>
          <li>
            <div className="food-menu-card">
              <div className="card-banner">
                <img
                  src="/assets/images/food-menu-2.png"
                  width={300}
                  height={300}
                  loading="lazy"
                  alt="Burger King Whopper"
                  className="w-100"
                />
                <div className="badge">Exquis</div>
                <button className="btn food-menu-btn"  onClick={toggleMenu}>Commandez Maintenant</button>
              </div>
              <div className="wrapper">
                <p className="category">GHOST MASALA</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">MASHLI MASALA</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={29.0}>
                €13.00
                </data>
                
              </div>
            </div>
          </li>
          <li>
            <div className="food-menu-card">
              <div className="card-banner">
                <img
                  src="/assets/images/food-menu-3.png"
                  width={300}
                  height={300}
                  loading="lazy"
                  alt="White Castle Pizzas"
                  className="w-100"
                />
                <div className="badge">Savoureux</div>
                <button className="btn food-menu-btn" onClick={toggleMenu}>Commandez Maintenant</button>
              </div>
              <div className="wrapper">
                <p className="category">Tandoori Chicken</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">GHOST BIRYANI</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={49.0}>
                €14.50
                </data>
                
              </div>
            </div>
          </li>
          <li>
            <div className="food-menu-card">
              <div className="card-banner">
                <img
                  src="/assets/images/food-menu-4.png"
                  width={300}
                  height={300}
                  loading="lazy"
                  alt="Bell Burrito Supreme"
                  className="w-100"
                />
                <div className="badge">Divin</div>
                <button className="btn food-menu-btn" onClick={toggleMenu}>Commandez Maintenant</button>
              </div>
              <div className="wrapper">
                <p className="category">MURGHI MASALA</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">Bell Burrito Supreme</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={59.0}>
                €13.00
                </data>
                
              </div>
            </div>
          </li>
          <li>
            <div className="food-menu-card">
              <div className="card-banner">
                <img
                  src="/assets/images/food-menu-5.png"
                  width={300}
                  height={300}
                  loading="lazy"
                  alt="Kung Pao Chicken BBQ"
                  className="w-100"
                />
                <div className="badge">Parfait</div>
                <button className="btn food-menu-btn" onClick={toggleMenu}>Commandez Maintenant</button>
              </div>
              <div className="wrapper">
                <p className="category">MASHALI MASALA</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">Kung Pao Chicken BBQ</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={49.0}>
                €12.50
                </data>
                
              </div>
            </div>
          </li>
          <li>
            <div className="food-menu-card">
              <div className="card-banner">
                <img
                  src="/assets/images/food-menu-6.png"
                  width={300}
                  height={300}
                  loading="lazy"
                  alt="Wendy&apos;s Chicken"
                  className="w-100"
                />
                <div className="badge">Épatant</div>
                <button className="btn food-menu-btn" onClick={toggleMenu}>Commandez Maintenant</button>
              </div>
              <div className="wrapper">
                <p className="category">BUTTER CHICKEN</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">Wendy&apos;s FRITES DE POISSON</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={49.0}>
                €13.00
                </data>
                
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StaticMenu;
