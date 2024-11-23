"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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

const Hero = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      subtitle: "Culture indienne enrichie",
      title: "Une expérience culinaire\nau cœur des traditions",
      text: "Plongez dans la richesse des saveurs indiennes, où chaque plat raconte une histoire de culture et d'héritage.",
      imgSrc:  "/assets/images/pexels-catscoming-1907228.jpg",
    },
    {
      subtitle: "Un festin épicé",
      title: "Un goût authentique de\nBiryani au poulet",
      text: "Savourez chaque bouchée de notre Biryani, une explosion de saveurs exquises qui éveilleront vos sens.",
      imgSrc:"/assets/images/grilled-bg.jpg",
    },
    {
      subtitle: "Traditionnel et hygiène",
      title: "Pour l'amour du\nChicken Tandoori",
      text: "Venez en famille et savourez le goût fumé et épicé de notre Chicken Tandoori, une vrai délice.",
      imgSrc: "/assets/images/pexels-minan1398-1482803.jpg",
    },
    {
      subtitle: "Incroyable et délicieux",
      title: "Un voyage savoureux avec\nle nourriture traditionnel",
      text: "Découvrez la richesse de la cuisine traditionnelle, où chaque plat raconte une histoire de saveurs et de savoir-faire.",
      imgSrc:  "/assets/images/pexels-prabal-9609835.jpg",
    },

    {
      subtitle: "Croustillant et épicé",
      title: "L'irrésistible\nSamosa traditionnel",
      text: "Savourez le mélange parfait de pommes de terre épicées et d'une pâte dorée et croustillante.",
      imgSrc:"/assets/images/pexels-kunal-lakhotia-781256899-28674660.jpg",
    }
  ];

  const slideNext = () => {
    setCurrentSlidePos((prev) =>
      prev >= heroSliderItems.length - 1 ? 0 : prev + 1
    );
  };

  const slidePrev = () => {
    setCurrentSlidePos((prev) =>
      prev <= 0 ? heroSliderItems.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(slideNext, 7000);
    return () => clearInterval(autoSlideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider="">
        {heroSliderItems.map((item, index) => (
          <li
            key={index}
            className={`slider-item ${
              currentSlidePos === index ? "active" : ""
            }`}
            data-hero-slider-item=""
          >
            <div className="slider-bg">
              <Image
                src={item.imgSrc}
                width={1880}
                height={950}
                alt=""
                className="img-cover"
              />
            </div>
            <div className="container"><div className="hero-content"><p className="hero-subtitle">Manger, dormir et répéter</p><h2 className="h1 hero-title">Le poulet tandoori super délicieux en ville !</h2><p className="hero-text">La nourriture est toute substance consommée pour fournir un soutien nutritionnel à un organisme</p><button className="btn" id="reservation-btn">Réservez une table</button></div></div>
            {/* <p className="label-2 section-subtitle slider-reveal">
              {item.subtitle}
            </p>
            <h1 className="display-1 hero-title slider-reveal">
              {item.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="body-2 hero-text slider-reveal">{item.text}</p> */}
           
          </li>
        ))}
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={slidePrev}
      >
        <ion-icon name="chevron-back" />
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={slideNext}
      >
        <ion-icon name="chevron-forward" />
      </button>
    
    </section>
  );
};

export default Hero;
