import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../scss/_Header.scss";

const Header = (props) => {
  let location = useLocation();
  const layoutColor = props.layoutColor(location.pathname);
  if (props.state.header) {
    return (
      <header
        className={layoutColor ? `header header--${layoutColor}` : "header"}>
        <div className="header-container">
          <NavLink
            exact
            to="/"
            className="header__link"
            onClick={props.onClickLogo}>
            <figure className="header__logo">
              <img
                src="/assets/img/logo-sign.png"
                alt="Logo Fortior"
                className="header__logo__img--sign"
              />
              <img
                src="/assets/img/logo-name.png"
                alt="Logo Fortior"
                className="header__logo__img--name"
              />
            </figure>
          </NavLink>
          <div
            onClick={props.onClickBurger}
            className={
              props.state.navigation
                ? "header__burger header__burger--active"
                : "header__burger"
            }>
            <div className="header__burger__layer header__burger__layer--1"></div>
            <div className="header__burger__layer header__burger__layer--2"></div>
            <div className="header__burger__layer header__burger__layer--3"></div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header
        className={
          layoutColor === "white"
            ? "header header--hide header--white"
            : "header header--hide"
        }>
        <div className="header-container">
          <NavLink
            exact
            to="/"
            className="header__link"
            onClick={props.onClickLogo}>
            <figure className="header__logo">
              <img
                src="/assets/img/logo-sign-m.png"
                alt="Logo Fortior"
                className="header__logo__img--sign"
              />
              <img
                src="/assets/img/logo-name-m.png"
                alt="Logo Fortior"
                className="header__logo__img--name"
              />
            </figure>
          </NavLink>
          <div
            onClick={props.onClickBurger}
            className={
              props.state.navigation
                ? "header__burger header__burger--active"
                : "header__burger"
            }>
            <div className="header__burger__layer header__burger__layer--1"></div>
            <div className="header__burger__layer header__burger__layer--2"></div>
            <div className="header__burger__layer header__burger__layer--3"></div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
