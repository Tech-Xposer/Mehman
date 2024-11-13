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
              Financial experts support or help you to to find out which way you
              can raise your funds more.
            </p>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-pinterest" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>
            <li>
              <p className="footer-list-item">+1 (062) 109-9222</p>
            </li>
            <li>
              <p className="footer-list-item">Info@YourGmail24.com</p>
            </li>
            <li>
              <address className="footer-list-item">
                153 Williamson Plaza, Maggieberg, MT 09514
              </address>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Opening Hours</p>
            </li>
            <li>
              <p className="footer-list-item">Monday-Friday: 08:00-22:00</p>
            </li>
            <li>
              <p className="footer-list-item">Tuesday 4PM: Till Mid Night</p>
            </li>
            <li>
              <p className="footer-list-item">Saturday: 10:00-16:00</p>
            </li>
          </ul>
          <div className="footer-bottom">
            <div className="container">
              <p className="copyright-text">
                © 2022{" "}
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
