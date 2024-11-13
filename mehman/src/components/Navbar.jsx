"use client";

import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const headerRef = useRef(null);

  // Scroll event to handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle navbar visibility
  const toggleNavbar = () => {
    setIsNavbarActive((prev) => !prev);
  };

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
    document.body.classList.toggle("noScroll", !isSearchActive);
  };

  return (
    <header
      ref={headerRef}
      className={`header ${isHeaderSticky ? "sticky" : ""}`}
      data-header=""
    >
      <div className="container">
        <h1>
          <a href="#" className="logo">
            Mehman<span className="span">.</span>
          </a>
        </h1>
        <nav
          className={`navbar ${isNavbarActive ? "active" : ""}`}
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
            onClick={toggleSearch}
          >
            {/* Add your search icon here */}
          </button>
          <a href="#R">
            <button className="btn btn-hover">Réservation</button>
          </a>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            data-menu-toggle-btn=""
            onClick={toggleNavbar}
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
