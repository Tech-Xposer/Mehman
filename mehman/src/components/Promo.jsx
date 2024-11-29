import React from "react";

const Promo = () => {
  return (
    <section className="section section-divider  promo"id="promo">
    <div className="container">
    <h2 className="headline-1 section-title text-6xl mb-10">Nous offrons un service de premier ordre</h2>
      <ul className="promo-list has-scrollbar">
        <li className="promo-item">
          <div className="promo-card">
            <div className="card-icon">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width={60}
  height={60}
  fill="none"
>
  <path
    d="M60.09,73.21h-9.2v-35.47l-11,3.41v-7.48l19.2-6.88h1Zm0,0h-9.2v-35.47l-11,3.41v-7.48l19.2-6.88h1Z"
    transform="matrix(1.381555 0 0 1.292546 -43.427366 -34.627293)"
    fill="#f8903f"
  />
</svg>
            </div>
            <h3 className="h3 card-title">Poisson grillé</h3>
            <p className="card-text">
              Les aliments sont consommés pour maintenir la santé et favoriser la
              croissance.
            </p>
            <img
              src="/assets/images/promo-1.png"
              width={300}
              height={300}
              loading="lazy"
              alt="Maxican Pizza"
              className="w-100 card-banner"
            />
          </div>
        </li>
        <li className="promo-item">
          <div className="promo-card">
            <div className="card-icon">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width={60}
  height={60}
  fill="none"
>
  <path
    d="M66.35,73.5h-31.78v-6.3l15-16c1.717745-1.804469,3.248849-3.777817,4.57-5.89.913427-1.431612,1.424645-3.082709,1.48-4.78.102359-1.757614-.453816-3.490313-1.56-4.86-1.148235-1.225714-2.783743-1.874783-4.46-1.77-1.88504-.087062-3.703355.707526-4.92,2.15-1.257973,1.606624-1.896781,3.611773-1.8,5.65h-9.23c-.036373-2.712296.65421-5.384852,2-7.74c1.348946-2.334244,3.33239-4.237935,5.72-5.49c2.58121-1.359409,5.463083-2.047206,8.38-2q7.16,0,11.13,3.44t4,9.71c-.037189,2.440501-.646884,4.838177-1.78,7-1.65062,3.052807-3.702141,5.871127-6.1,8.38L46.42,66.08h19.93Zm0,0h-31.78v-6.3l15-16c1.717745-1.804469,3.248849-3.777817,4.57-5.89.913427-1.431612,1.424645-3.082709,1.48-4.78.102359-1.757614-.453816-3.490313-1.56-4.86-1.148235-1.225714-2.783743-1.874783-4.46-1.77-1.88504-.087062-3.703355.707526-4.92,2.15-1.257973,1.606624-1.896781,3.611773-1.8,5.65h-9.23c-.036373-2.712296.65421-5.384852,2-7.74c1.348946-2.334244,3.33239-4.237935,5.72-5.49c2.58121-1.359409,5.463083-2.047206,8.38-2q7.16,0,11.13,3.44t4,9.71c-.037189,2.440501-.646884,4.838177-1.78,7-1.65062,3.052807-3.702141,5.871127-6.1,8.38L46.42,66.08h19.93Z"
    transform="matrix(1.373917-.013182 0.012059 1.256839-39.297675-32.391034)"
    fill="#f8903f"
  />
</svg>


            </div>
            <h3 className="h3 card-title">MURGHI MASALA</h3>
            <p className="card-text">
              Manger permet à un organisme d&apos;obtenir les nutriments dont il a
              besoin pour fonctionner.
            </p>
            <img
              src="/assets/images/promo-2.png"
              width={300}
              height={300}
              loading="lazy"
              alt="Soft Drinks"
              className="w-100 card-banner"
            />
          </div>
        </li>
        <li className="promo-item">
          <div className="promo-card">
            <div className="card-icon">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width={60}
  height={60}
  fill="none"
>
  <path
    d="M44.38,45.92h4.9q3.5,0,5.19-1.75c1.161951-1.261967,1.770531-2.936464,1.69-4.65.093984-1.625517-.514144-3.213206-1.67-4.36-1.273072-1.096752-2.9224-1.656089-4.6-1.56-1.601504-.054546-3.170695.459071-4.43,1.45-1.157558.903329-1.818023,2.302179-1.78,3.77h-9.2c-.017366-2.323849.68091-4.596736,2-6.51c1.374948-1.980718,3.271767-3.541787,5.48-4.51c2.433965-1.099685,5.07934-1.652654,7.75-1.62q7.36,0,11.53,3.52c2.814188,2.415271,4.353539,5.996015,4.17,9.7.004329,2.111774-.676397,4.167986-1.94,5.86-1.305894,1.793602-3.061554,3.211238-5.09,4.11c2.344752.741386,4.391043,2.213033,5.84,4.2c1.311291,1.954523,1.985475,4.267009,1.93,6.62.13264,3.824713-1.537114,7.490027-4.51,9.9q-4.51,3.73-11.92,3.73-6.94,0-11.35-3.66c-2.897937-2.363302-4.528526-5.942463-4.41-9.68h9.2c-.033394,1.656855.705775,3.234981,2,4.27c1.350916,1.121821,3.064795,1.712078,4.82,1.66c1.834557.073354,3.628621-.552066,5.02-1.75c1.254666-1.193143,1.932748-2.87012,1.86-4.6q0-6.94-7.64-6.94h-4.84Z"
    transform="matrix(1.138295 0 0 1.222131-27.261653-31.105732)"
    fill="#f8903f"
  />
</svg>

            </div>
            <h3 className="h3 card-title">Chicken Tikka</h3>
            <p className="card-text">
              Chaque aliment joue un rôle crucial dans le bon fonctionnement de
              notre organisme.
            </p>
            <img
              src="/assets/images/promo-3.png"
              width={300}
              height={300}
              loading="lazy"
              alt="French Fry"
              className="w-100 card-banner"
            />
          </div>
        </li>
        <li className="promo-item">
          <div className="promo-card">
            <div className="card-icon">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width={60}
  height={60}
  fill="none"
>
  <path
    d="M61.69,55.73h5.25v7.42h-5.25v10h-9.2v-10h-19l-.41-5.8L52.39,26.82h9.3Zm-19.46,0h10.25v-16.37l-.61,1.05Zm19.46,0h5.25v7.42h-5.25v10h-9.2v-10h-19l-.41-5.8L52.39,26.82h9.3Zm-19.46,0h10.25v-16.37l-.61,1.05Z"
    transform="matrix(1.115485 0 0 1.256723-26.625708-32.8173)"
    fill="#f8903f"
  />
</svg>

            </div>
            <h3 className="h3 card-title">GHOST MILANE</h3>
            <p className="card-text">
              La nourriture fournit les vitamines et minéraux nécessaires à notre
              bien-être.
            </p>
            <img
              src="/assets/images/promo-4.png"
              width={300}
              height={300}
              loading="lazy"
              alt="Burger Kingo"
              className="w-100 card-banner"
            />
          </div>
        </li>
        <li className="promo-item">
          <div className="promo-card">
            <div className="card-icon">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width={60}
  height={60}
  fill="none"
>
  <path
    d="M35.5,50.06L38.17,26.5h26v7.67h-18.45l-1.15,10c2.15017-1.159803,4.557002-1.761511,7-1.75q6.62,0,10.38,4.11t3.73,11.47c.041348,2.78194-.608044,5.530691-1.89,8-1.227493,2.331617-3.116584,4.24854-5.43,5.51-2.563383,1.368486-5.434758,2.057066-8.34,2-2.69447.024302-5.360018-.556651-7.8-1.7-2.301246-1.052191-4.269445-2.715994-5.69-4.81-1.391256-2.073817-2.158271-4.503275-2.21-7h9.11c.078578,1.700695.792258,3.310043,2,4.51c1.260195,1.099461,2.900185,1.662871,4.57,1.57c1.875682.097662,3.677643-.741504,4.81-2.24c1.23479-1.8784,1.827731-4.106315,1.69-6.35.149274-2.190365-.544804-4.354887-1.94-6.05-1.457562-1.479557-3.487811-2.250029-5.56-2.11-1.922485-.085181-3.811255.525474-5.32,1.72l-.89.83Zm0,0L38.17,26.5h26v7.67h-18.45l-1.15,10c2.15017-1.159803,4.557002-1.761511,7-1.75q6.62,0,10.38,4.11t3.73,11.47c.041348,2.78194-.608044,5.530691-1.89,8-1.227493,2.331617-3.116584,4.24854-5.43,5.51-2.563383,1.368486-5.434758,2.057066-8.34,2-2.69447.024302-5.360018-.556651-7.8-1.7-2.301246-1.052191-4.269445-2.715994-5.69-4.81-1.391256-2.073817-2.158271-4.503275-2.21-7h9.11c.078578,1.700695.792258,3.310043,2,4.51c1.260195,1.099461,2.900185,1.662871,4.57,1.57c1.875682.097662,3.677643-.741504,4.81-2.24c1.23479-1.8784,1.827731-4.106315,1.69-6.35.149274-2.190365-.544804-4.354887-1.94-6.05-1.457562-1.479557-3.487811-2.250029-5.56-2.11-1.922485-.085181-3.811255.525474-5.32,1.72l-.89.83Z"
    transform="matrix(1.20434 0 0 1.2085-31.05841-30.433018)"
    fill="#f8903f"
  />
</svg>

            </div>
            <h3 className="h3 card-title">Poulet masala.</h3>
            <p className="card-text">
              Les aliments sont consommés pour préserver l&apos;équilibre énergétique
              et biologique du corps.
            </p>
            <img
              src="/assets/images/promo-5.png"
              width={300}
              height={300}
              loading="lazy"
              alt="Chicken Masala"
              className="w-100 card-banner"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
  
  );
};

export default Promo;
