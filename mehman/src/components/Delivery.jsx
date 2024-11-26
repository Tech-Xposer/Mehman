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

      if (deliveryBoyTopPos < 300 && deliveryBoyTopPos > -300) {
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

  return (
    <section className="section section-divider gray delivery">
      <div className="container">
        <div className="delivery-content">
          <h2 className="h2 section-title">
            A Moments Of Delivered On <span className="span">Right Time</span> &amp; Place
          </h2>
          <p className="section-text">
            The restaurants in Hangzhou also catered to many northern Chinese who
            had fled south from Kaifeng during the Jurchen invasion of the 1120s,
            while it is also known that many restaurants were run by families.
          </p>
          <button className="btn btn-hover">Order Now</button>
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
