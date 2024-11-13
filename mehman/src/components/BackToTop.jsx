import React from "react";

const BackToTop = () => {
  return (
    <a
      href="#top"
      className="back-top-btn"
      aria-label="Back to top"
      data-back-top-btn=""
    >
      <ion-icon name="chevron-up" />
    </a>
  );
};

export default BackToTop;
