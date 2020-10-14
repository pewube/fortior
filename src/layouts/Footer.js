import React from "react";
import { useLocation } from "react-router-dom";

const Footer = (props) => {
  let location = useLocation();
  const layoutColor = props.layoutColor(location.pathname);

  return (
    <footer
      className={layoutColor === "white" ? "footer footer--white" : "footer"}>
      <div className="footer-container">
        <p>Fortior © 2020 Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
