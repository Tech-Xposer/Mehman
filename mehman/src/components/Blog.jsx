import React from "react";

const Blog = () => {
  return (
    <section className="section section-divider blog" id="blog">
      <div className="container">
        <p className="section-subtitle">Événements organisés au restaurant</p>
        <h2 className="h2 section-title">
        Il s&apos;agit de tout <span className="span">Aliments</span>
        </h2>
        <p className="section-text">
        La nourriture est toute substance consommée pour fournir un soutien nutritionnel à un organisme.
        </p>
        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <div className="card-banner">
                <img
                  src="/assets/images/blog-1.jpg"
                  width={600}
                  height={390}
                  loading="lazy"
                  alt="What Do You Think About Cheese Pizza Recipes?"
                  className="w-100"
                />
                <div className="badge">.....</div>
              </div>
              <div className="card-content">
                <div className="card-meta-wrapper">
                  <a href="#" className="card-meta-link">
                    <ion-icon name="calendar-outline" />
                    <time className="meta-info" dateTime="2022-01-01">
                      ......
                    </time>
                  </a>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="person-outline" />
                    <p className="meta-info">Menu Exclusif</p>
                  </a>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                  Que pensez-vous des recettes de paneer au fromage ?
                  </a>
                </h3>
                <p className="card-text">
                N&apos;hésitez pas à nous contacter et à nous faire part de vos commentaires concernant un plat ou une hygiène
                </p>
                <a href="#" className="btn-link">
                  <span>En savoir plus</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <div className="card-banner">
                <img
                  src="/assets/images/blog-2.jpg"
                  width={600}
                  height={390}
                  loading="lazy"
                  alt="Making Chicken Strips With New Delicious Ingridents."
                  className="w-100"
                />
                <div className="badge">....</div>
              </div>
              <div className="card-content">
                <div className="card-meta-wrapper">
                  <a href="#" className="card-meta-link">
                    <ion-icon name="calendar-outline" />
                    <time className="meta-info" dateTime="2022-01-01">
                      ......
                    </time>
                  </a>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="person-outline" />
                    <p className="meta-info">Occasions Spéciales</p>
                  </a>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                  Préparez des lanières de poulet avec de nouveaux ingrédients délicieux. 
                  </a>
                </h3>
                <p className="card-text">
                Mehman offre une expérience gastronomique incomparable, où chaque plat est une œuvre d&apos;art pleine de saveurs exquises
                </p>
                <a href="#" className="btn-link">
                  <span>En savoir plus</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <div className="card-banner">
                <img
                  src="/assets/images/blog-3.jpg"
                  width={600}
                  height={390}
                  loading="lazy"
                  alt="Innovative Hot Chessyraw Pasta Make Creator Fact."
                  className="w-100"
                />
                <div className="badge">.....</div>
              </div>
              <div className="card-content">
                <div className="card-meta-wrapper">
                  <a href="#" className="card-meta-link">
                    <ion-icon name="calendar-outline" />
                    <time className="meta-info" dateTime="2022-01-01">
                      ......
                    </time>
                  </a>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="person-outline" />
                    <p className="meta-info">Expérience Culinaire</p>
                  </a>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                  Poisson Chessyraw chaud innovant Make Creator Fact.
                  </a>
                </h3>
                <p className="card-text">
                La qualité des plats de Mehman dépasse toutes les attentes, chaque bouchée est un pur délice.
                </p>
                <a href="#" className="btn-link">
                  <span>En savoir plus</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
