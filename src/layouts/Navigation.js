import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../scss/_Navigation.scss";

const Navigation = (props) => {
  let location = useLocation();
  const layoutColor = props.layoutColor(location.pathname);

  return (
    <nav
      className={
        props.state.navigation ? "navigation navigation--active" : "navigation"
      }>
      <div
        className={
          layoutColor
            ? `navigation-container navigation-container--${layoutColor}`
            : "navigation-container"
        }>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              to="/oferta/soki-owocowe"
              className="navigation__link navigation__link--juice"
              onClick={props.onClick}>
              Soki owocowe
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/oferta/produkty-proteinowe"
              className="navigation__link navigation__link--protein"
              onClick={props.onClick}>
              Produkty proteinowe
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/oferta/produkty-czystosci"
              className="navigation__link navigation__link--clean"
              onClick={props.onClick}>
              Utrzymanie czystości
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/oferta/produkty-medyczne"
              className="navigation__link navigation__link--medical"
              onClick={props.onClick}>
              Do zastosowań medycznych
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/o-nas"
              className="navigation__link navigation__link--about"
              onClick={props.onClick}>
              O nas
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/kontakt"
              className="navigation__link navigation__link--contact"
              onClick={props.onClick}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
