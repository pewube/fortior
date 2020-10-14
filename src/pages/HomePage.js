import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [section, showSection] = useState({
    0: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const showElements = () => {
      showSection((state) => ({ ...state, 0: "true" }));
    };

    setTimeout(() => showElements(), 200);
  }, []);

  return (
    <article className="home-page">
      <Link
        to="/oferta/soki-owocowe"
        className={
          section[0]
            ? "home-page__link home-page__link--health"
            : "home-page__link home-page__link--health home-page__link--hidden"
        }>
        <h1 className="home-page__link__title">Zdrowie</h1>
        <div className="home-page__link__bg home-page__link__bg--health"></div>
      </Link>
      <Link
        to="/oferta/produkty-proteinowe"
        className={
          section[0]
            ? "home-page__link home-page__link--active"
            : "home-page__link home-page__link--active home-page__link--hidden"
        }>
        <h1 className="home-page__link__title">Aktywność</h1>
        <div className="home-page__link__bg home-page__link__bg--active"></div>
      </Link>
      <Link
        to="/oferta/produkty-czystosci"
        className={
          section[0]
            ? "home-page__link home-page__link--house"
            : "home-page__link home-page__link--house home-page__link--hidden"
        }>
        <h1 className="home-page__link__title">Czystość</h1>
        <div className="home-page__link__bg home-page__link__bg--house"></div>
      </Link>

      <Link
        to="/oferta/produkty-medyczne"
        className={
          section[0]
            ? "home-page__link home-page__link--prof"
            : "home-page__link home-page__link--prof home-page__link--hidden"
        }>
        <h1 className="home-page__link__title">Zawodowcy</h1>
        <div className="home-page__link__bg home-page__link__bg--prof"></div>
      </Link>
    </article>
  );
};

export default HomePage;
