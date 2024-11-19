"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "/assets/images/pexels-catscoming-1907228.jpg",
    "/assets/images/grilled-bg.jpg",
    "/assets/images/pexels-minan1398-1482803.jpg",
    "/assets/images/pexels-prabal-9609835.jpg",
    // "/assets/images/pexels-chanwalrus-941869.jpg",
    // "/assets/images/pexels-chanwalrus-958545.jpg",
    "/assets/images/pexels-kunal-lakhotia-781256899-28674660.jpg",
    "/assets/images/pexels-kunal-lakhotia-781256899-28674708.jpg",
    "/assets/images/pexels-madelynemery-954677.jpg",
    "/assets/images/pexels-artosuraj-28909537.jpg",
    // "/assets/images/pexels-paggiarofrancesco-1117862.jpg",
    // "/assets/images/pexels-sydney-troxell-223521-718742.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0); // Store index instead of image
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fading out
      setTimeout(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); // Change image
        setFade(false); // Start fading in
      }, 500); // Match this timeout with CSS fade-out duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className={`hero ${fade ? "fade" : ""}`}
      id="home"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="container ">
        <div className="hero-content">
          <p className="hero-subtitle">Manger, dormir et répéter</p>
          <h2 className="h1 hero-title">
            Le poulet tandoori super délicieux en ville!
          </h2>
          <p className="hero-text">
            La nourriture est toute substance consommée pour fournir un soutien
            nutritionnel à un organisme
          </p>
          <button className="btn" id="reservation-btn">
            Réservez une table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
