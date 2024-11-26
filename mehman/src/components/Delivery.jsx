"use client";
import { useMenu } from "@/contexts/MenuContext";
import React, { useEffect, useRef, useState } from "react";

const Delivery = () => {
  const { menuOpen, toggleMenu } = useMenu();

  const deliveryBoyRef = useRef(null); // Ref for the delivery boy image
  const [deliveryBoyMove, setDeliveryBoyMove] = useState(0); // State to track horizontal movement
  const lastScrollPos = useRef(0); // Ref to store the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const deliveryBoy = deliveryBoyRef.current;
      if (!deliveryBoy) return;

      const deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

      // Move the delivery boy only when it's in the viewport (approximately 300px from top)
      if (deliveryBoyTopPos < 300 && deliveryBoyTopPos > -300) {
        const activeScrollPos = window.scrollY;

        setDeliveryBoyMove((prev) => {
          // Determine direction based on scroll movement
          const newMove = lastScrollPos.current < activeScrollPos ? prev + 5 : prev - 5;

          // Limit movement within -50px to +50px for smooth back-and-forth motion
          if (newMove > 60) return 60;
          if (newMove < -60) return -60;
          return newMove;
        });

        lastScrollPos.current = activeScrollPos; // Update the last scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section section-divider gray delivery" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div className="delivery-content">
          <h2 className="h2 section-title">
          Un moment de livré sur <span className="span">Le bon moment</span> &amp; Lieu
          </h2>
          <p className="section-text">
            Mehman est un restaurant unique qui propose une cuisine traditionnelle indienne avec une touche moderne. 
            Nous accueillons chaleureusement tous nos invités, offrant une expérience culinaire inoubliable dans une ambiance 
            conviviale et chaleureuse. Chaque plat est préparé avec les ingrédients les plus frais, et nous nous efforçons de 
            livrer nos repas avec soin et à temps, pour que chaque moment passé chez nous soit spécial.
          </p>
          <button className="btn btn-hover" onClick={toggleMenu}>Commander maintenant</button>
        </div>

        <figure className="delivery-banner" style={{ position: "relative", width: "100%" }}>
          <img
            src="/assets/images/delivery-banner-bg.png"
            width={700}
            height={602}
            loading="lazy"
            alt="clouds"
            className="w-100"
            style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
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
              position: "absolute",
              bottom: "50px",
              left: "50%",
              transform: `translateX(${deliveryBoyMove}px) translateX(-50%)`, // Center horizontally and move along X-axis
              transition: "transform 0.1s linear", // Smooth transition for motion
            }}
          />
        </figure>
      </div>
    </section>
  );
};

export default Delivery;
