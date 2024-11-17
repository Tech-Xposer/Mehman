import React from "react";

const StaticMenu = () => {
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
            <button className="filter-btn">Pizza</button>
          </li>
          <li>
            <button className="filter-btn">Burger</button>
          </li>
          <li>
            <button className="filter-btn">Drinks</button>
          </li>
          <li>
            <button className="filter-btn">Sandwich</button>
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
                <div className="badge">-15%</div>
                <button className="btn food-menu-btn">Order Now</button>
              </div>
              <div className="wrapper">
                <p className="category">Chicken</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">Fried Chicken Unlimited</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price">$49.00</data>
                <del className="del" value={69.0}>
                  $69.00
                </del>
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
                <div className="badge">-10%</div>
                <button className="btn food-menu-btn">Order Now</button>
              </div>
              <div className="wrapper">
                <p className="category">Noddles</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">Burger King Whopper</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={29.0}>
                  $29.00
                </data>
                <del className="del">$39.00</del>
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
                <div className="badge">-25%</div>
                <button className="btn food-menu-btn">Order Now</button>
              </div>
              <div className="wrapper">
                <p className="category">Pizzas</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">White Castle Pizzas</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={49.0}>
                  $49.00
                </data>
                <del className="del">$69.00</del>
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
                <div className="badge">-20%</div>
                <button className="btn food-menu-btn">Order Now</button>
              </div>
              <div className="wrapper">
                <p className="category">Burrito</p>
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
                  $59.00
                </data>
                <del className="del">$69.00</del>
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
                <div className="badge">-5%</div>
                <button className="btn food-menu-btn">Order Now</button>
              </div>
              <div className="wrapper">
                <p className="category">Nuggets</p>
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
                  $49.00
                </data>
                <del className="del">$69.00</del>
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
                <div className="badge">-15%</div>
                <button className="btn food-menu-btn">Order Now</button>
              </div>
              <div className="wrapper">
                <p className="category">Chicken</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </div>
              <h3 className="h3 card-title">Wendy&apos;s Chicken</h3>
              <div className="price-wrapper">
                <p className="price-text">Price:</p>
                <data className="price" value={49.0}>
                  $49.00
                </data>
                <del className="del">$69.00</del>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StaticMenu;
