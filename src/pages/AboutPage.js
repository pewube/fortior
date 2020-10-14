import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [section, showSection] = useState({
    0: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const showElements = () => {
      showSection((state) => ({ ...state, 0: "true" }));
    };

    setTimeout(() => showElements(), 600);
  }, []);

  return (
    <article className="about">
      <div
        className={
          section[0]
            ? "about-container"
            : "about-container about-container--hidden"
        }>
        <header className="about__header">
          <h1 className="about__header__title">O nas</h1>
        </header>

        <section className="about__text">
          <p className="about__par">
            Postanowiliśmy połączyć pasję oraz doświadczenie tworząc produkty,
            które są symbiozą tradycyjnych receptur i nowoczesnych technik
            wytworzenia.
          </p>
          <p className="about__par">
            Działamy od roku 2010 w zakresie sprzedaży oraz w obszarach
            związanych z zagadnieniami consultingu. Obserwując zapotrzebowanie
            rynku, ciągle uzupełniamy portfolio o nowe produkty. Kładziemy
            nacisk na wysoką jakość produktów, naturalność, nowoczesne metody
            wytwarzania i niebanalny design. Działamy w myśl zasady "wyjątkowe
            produkty odzwierciedla wrażliwość wyjątkowych ludzi".
          </p>
          <p className="about__par">
            Przy wprowadzaniu nowej marki na rynek kierujemy się przede
            wszystkim wysoką jakością produktu, oryginalnym designem oraz
            potrzebami rynku. Doświadczenie zawodowe zdobyte na przestrzeni lat
            umożliwia nam trafne selekcjonowanie narzędzi handlowo –
            marketingowych tak aby produkty objęte naszą opieką mogły trafić w
            Państwa gusty.
          </p>
        </section>
      </div>
    </article>
  );
};

export default AboutPage;
