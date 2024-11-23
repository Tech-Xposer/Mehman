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
          <Link href="" className="logo">
            Mehman<span className="span">.</span>
          </Link>
        </h1>
        <nav
        className={`navbar ${isActive ? "active" : ""}`}
          data-navbar=""
        >
          <ul className="navbar-list">
            <li className="nav-item">
              <Link href="/" className="navbar-link" data-nav-link="">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <a  className="navbar-link" data-nav-link="" >
                À propos de nous
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-link" data-nav-link="" onClick={()=>toggleMenu(true)}>
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
