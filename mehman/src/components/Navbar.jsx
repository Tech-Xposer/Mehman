"use client";

import React, {  useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      
      className={`header`}
      data-header=""
    >
      <div className="container">
        <h1>
          <a href="#" className="logo">
            Mehman<span className="span">.</span>
          </a>
        </h1>
        <nav
          className={`navbar `}
          data-navbar=""
        >
          <ul className="navbar-list">
            <li className="nav-item">
              <a href="#home" className="navbar-link" data-nav-link="">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="navbar-link" data-nav-link="">
                À propos de nous
              </a>
            </li>
            <li className="nav-item">
              <a href="#food-menu" className="navbar-link" data-nav-link="">
                À Emporter
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="navbar-link" data-nav-link="">
                Livraison à domicile
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="navbar-link" data-nav-link="">
                Panier
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-btn-group">
          <button
            className="search-btn"
            aria-label="Search"
            data-search-btn=""
            
          >
          </button>
          <a href="#R">
            <button className="btn btn-hover">Réservation</button>
          </a>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            data-menu-toggle-btn=""
            
          >
            <span className="line top" />
            <span className="line middle" />
            <span className="line bottom" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
