"use client";

import { useMenu } from "@/contexts/MenuContext";
import Link from "next/link";
import React, {  useEffect, useState } from "react";

const Navbar = () => {
  
  const {menuOpen, toggleMenu} = useMenu();
  const [isActive, setIsActive ] = useState(false)
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
          <Link href="/" className="logo">
            Mehman Indien<span className="span">.</span>
          </Link>
        </h1>
        <nav
        className={`navbar ${isActive ? "active" : ""}`}
          data-navbar=""
        >
          <ul className="navbar-list">
            <li className="nav-item">

              <Link className="navbar-link" href="/#promo">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
  <Link className="navbar-link" href="/#about">
    À propos de nous
  </Link>
</li>

            <li className="nav-item">
              <button className="navbar-link flex" data-nav-link="" onClick={()=>toggleMenu(true)}>
                À Emporter - <span className="text-red-500">10% Surplace</span>
              </button>
            </li>
            <li className="nav-item">
              <button href="#blog" className="navbar-link" data-nav-link="" onClick={()=>toggleMenu(true)}>
                Livraison à domicile
              </button>
            </li>
            <li className="nav-item">
  <Link href="/checkout" className="navbar-link">
    Panier
  </Link>
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
          <Link href="/#reservation" className="btn btn-hover">
            Réservation
          </Link>
          <button
            className={`nav-toggle-btn ${isActive?"active":""}`}
            aria-label="Toggle Menu"
            data-menu-toggle-btn=""
            onClick={()=>setIsActive(!isActive)}
            
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
