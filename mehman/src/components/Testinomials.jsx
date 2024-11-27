import React from "react";

const Testinomials = () => {
  return (
    <section className="section section-divider black testi">
      <div className="container">
        <p className="section-subtitle">Témoignages</p>
        <h2 className="h2 section-title">
        Avis de nos<span className="span">clients</span>
        </h2>
        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>
        <ul className="testi-list has-scrollbar">
          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <img
                    src="/assets/images/avatar-1.jpg"
                    width={80}
                    height={80}
                    loading="lazy"
                    alt="Robert William"
                  />
                </figure>
                <div>
                  <h3 className="h4 testi-name">Robert William</h3>
                  <p className="testi-title">Kingfisher</p>
                </div>
              </div>
              <blockquote className="testi-text">
              Mehman est un véritable chef-d&apos;œuvre culinaire. Chaque repas est une explosion de saveurs, et l&apos;ambiance est toujours chaleureuse. Merci de rendre chaque repas spécial!
              </blockquote>
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
            </div>
          </li>
          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <img
                    src="/assets/images/avatar-2.jpg"
                    width={80}
                    height={80}
                    loading="lazy"
                    alt="Thomas Josef"
                  />
                </figure>
                <div>
                  <h3 className="h4 testi-name">Thomas Josef</h3>
                  <p className="testi-title">Getforce</p>
                </div>
              </div>
              <blockquote className="testi-text">
              Je suis un habitué de Mehman, et je ne suis jamais déçu. Le service est excellent et la qualité de la nourriture est toujours irréprochable. C’est l’endroit idéal pour chaque occasion
              </blockquote>
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
            </div>
          </li>
          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <img
                    src="/assets/images/avatar-3.jpg"
                    width={80}
                    height={80}
                    loading="lazy"
                    alt="Charles Richard"
                  />
                </figure>
                <div>
                  <h3 className="h4 testi-name">Charles Richard</h3>
                  <p className="testi-title">Angela</p>
                </div>
              </div>
              <blockquote className="testi-text">
              Les plats de Mehman sont une expérience unique à chaque bouchée. Le personnel est attentionné, et l’atmosphère du restaurant est toujours agréable. Un endroit incontournable!
              </blockquote>
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testinomials;
