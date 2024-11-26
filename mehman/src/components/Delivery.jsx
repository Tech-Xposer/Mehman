"use client"
import React, { useEffect, useRef, useState } from "react";

const Delivery = () => {
  const deliveryBoyRef = useRef(null); // Ref for the delivery boy image
  const [deliveryBoyMove, setDeliveryBoyMove] = useState(-80); // State to track horizontal movement
  const lastScrollPos = useRef(0); // Ref to store the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const deliveryBoy = deliveryBoyRef.current;
      if (!deliveryBoy) return;

      const deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

      if (deliveryBoyTopPos < 400 && deliveryBoyTopPos > -350) {
        const activeScrollPos = window.scrollY;

        if (lastScrollPos.current < activeScrollPos) {
          setDeliveryBoyMove((prev) => prev + 5);
        } else {
          setDeliveryBoyMove((prev) => prev - 5);
        }

        lastScrollPos.current = activeScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
        <section className="section section-divider gray delivery">
  <div className="container">
    <div className="delivery-content">
      <h2 className="h2 section-title">
        Un moment de livre sur <span className="span">Le bon moment</span> &amp; Lieu
      </h2>
      <p className="section-text">
        Chez Mehman, nous nous engageons &agrave; offrir des repas exquis pr&eacute;par&eacute;s avec soin et servis dans un cadre chaleureux. Notre passion pour l&rsquo;excellence culinaire s&rsquo;inspire d&rsquo;une riche tradition, o&ugrave; chaque plat raconte une histoire et chaque instant est m&eacute;morable.
      </p>
      <button className="btn btn-hover">Commandez maintenant</button>
    </div>


        <figure className="delivery-banner">
          <img
            src="/assets/images/delivery-banner-bg.png"
            width={700}
            height={602}
            loading="lazy"
            alt="clouds"
            className="w-100"
          />
          <img
            ref={deliveryBoyRef} // Attach ref here
            src="/assets/images/delivery-boy.svg"
            width={1000}
            height={880}
            loading="lazy"
            alt="delivery boy"
            className="w-100 delivery-img"
            data-delivery-boy=""
            style={{
              transform: `translateX(${deliveryBoyMove}px)`,
              transition: "transform 0.1s linear", // Smooth transition
            }}
          />
        </figure>
      </div>
    </section>
  );
};

export default Delivery;
