import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-top"
        style={{
          backgroundImage: 'url("/assets/images/footer-illustration.png")',
        }}
      >
        <div className="container">
          <div className="footer-brand">
            <a href="" className="logo">
              Mehman<span className="span">.</span>
            </a>
            <p className="footer-text">
            Mehman ne se contente pas de servir des repas, ils créent des souvenirs inoubliables autour de chaque plat
            </p>
            <ul className="social-list">
              <li>
                <a href="https://www.facebook.com/RestaurantMehman?mibextid=LQQJ4d&rdid=lx0inB3ysIy5gnTH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FkTRW3iVtsL3faNSp%2F%3Fmibextid%3DLQQJ4d" className="social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mehmanindien/profilecard/?igsh=eTV6c2Q2YmtkZjc4" className="social-link">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>
            <li>
              <p className="footer-list-item">01 46 63 45 58</p>
            </li>
            <li>
              <p className="footer-list-item">restaurantmilane@Gmail.com</p>
            </li>
            <li>
              <address className="footer-list-item">
              3 avenue Louis georgeon 94230 Cachan 
              </address>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Opening Hours</p>
            </li>
            <li>
              <p className="footer-list-item">Horaires 12:00 à 14:30 et 19:00 à 23:00</p>
            </li>
          </ul>
          <div className="footer-bottom">
            <div className="container">
              <p className="copyright-text">
                © 2024{" "}
                <a
                  href="https://websolution-gules.vercel.app/"
                  className="copyright-link"
                >
                  Danzia
                </a>{" "}
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
