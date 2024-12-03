import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMenu } from "@/contexts/MenuContext";

const Hero = () => {
  const { menuOpen, toggleMenu } = useMenu();

  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      subtitle: "Culture indienne enrichie",
      title: "Une expérience culinaire\nau cœur des traditions",
      text: "Plongez dans la richesse des saveurs indiennes, où chaque plat raconte une histoire de culture et d'héritage.",
      imgSrc: "/assets/images/0.png",
    },
    {
      subtitle: "Un festin épicé",
      title: "Un goût authentique de\nBiryani au poulet",
      text: "Savourez chaque bouchée de notre Biryani, une explosion de saveurs exquises qui éveilleront vos sens.",
      imgSrc: "/assets/images/main.jpg",
    },
    {
      subtitle: "Traditionnel et hygiène",
      title: "Pour l'amour du\nChicken Tandoori",
      text: "Venez en famille et savourez le goût fumé et épicé de notre Chicken Tandoori, une vrai délice.",
      imgSrc: "/assets/images/2.png",
    },
    {
      subtitle: "Incroyable et délicieux",
      title: "Un voyage savoureux avec\nle nourriture traditionnel",
      text: "Découvrez la richesse de la cuisine traditionnelle, où chaque plat raconte une histoire de saveurs et de savoir-faire.",
      imgSrc: "/assets/images/3.png",
    },
    {
      subtitle: "Croustillant et épicé",
      title: "L'irrésistible\nSamosa traditionnel",
      text: "Savourez le mélange parfait de pommes de terre épicées et d'une pâte dorée et croustillante.",
      imgSrc: "/assets/images/4.png",
    },
    {
      subtitle: "Croustillant et épicé",
      title: "L'irrésistible\nSamosa traditionnel",
      text: "Savourez le mélange parfait de pommes de terre épicées et d'une pâte dorée et croustillante.",
      imgSrc: "/assets/images/6.png",
    },
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
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Manger, dormir et répéter</p>
                <h2 className="h1 hero-title">
                  Nourriture super délicieuse en ville
                </h2>
                <p className="hero-text">
                  La nourriture est toute substance consommée pour fournir un
                  soutien nutritionnel à un organisme
                </p>
                <button
                  className="btn"
                  id="reservation-btn"
                  onClick={toggleMenu}
                >
                  Commandez vos plats
                </button>

                {/* GIF Section */}
                <div className="gif-container">
                  <a
                    href="https://www.instagram.com/restaurantmuskan?igsh=ZGFyaW4xN2J5bWF5&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/Suivez-nous-unscreen.gif"
                      alt="Instagram GIF"
                      className="infinite-gif"
                    />
                  </a>
                </div>
              </div>
            </div>
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

      <style jsx>{`
        .gif-container {
          margin-top: 20px;
          display: none; /* Default is hidden */
        }
        .infinite-gif {
          width: 150px;
          height: auto;
          cursor: pointer;
        }

        /* Show GIF only on mobile devices */
        @media (max-width: 768px) {
          .gif-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
