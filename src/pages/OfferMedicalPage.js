import React, { useEffect, useRef, useState } from "react";

const OfferMedicalPage = () => {
  const [img, showImg] = useState({
    0: "",
  });

  const ref0 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const topPosition = (image) => image.getBoundingClientRect().top;
    const bottomPosition = (image) => image.getBoundingClientRect().bottom;

    const showImages = () => {
      const refs = [ref0.current];

      refs.forEach((ref, i) => {
        if (topPosition(ref) < window.innerHeight && bottomPosition(ref) > 0) {
          showImg((state) => ({ ...state, [i]: "true" }));
        } else {
          showImg((state) => ({ ...state, [i]: "" }));
        }
      });
    };

    setTimeout(() => showImages(), 500);
    window.addEventListener("scroll", showImages);
    return () => window.removeEventListener("scroll", showImages);
  }, []);

  return (
    <article className="prof">
      <div className="prof-container">
        <header className="prof__header">
          <h1 className="prof__header__title">
            Produkty do zastosowań medycznych
          </h1>
        </header>
        <section className="prof__products">
          <article className="prof__products__item">
            <header className="prof__products__item__header">
              <h2 className="prof__products__item__header__title">
                Rękawice nitrylowe So Soft
              </h2>
            </header>
            <figure className="prof__products__item__figure">
              <img
                src="/assets/img/prof/sosoft.png"
                alt="Rękawice So Soft"
                ref={ref0}
                className={
                  img[0]
                    ? "prof__products__item__img"
                    : "prof__products__item__img prof__products__item__img--hidden"
                }
              />
            </figure>

            <section className="prof__products__item__text">
              <p className="prof__products__item__par">
                Rękawice bezpudrowe, wykonane z nitrylu (kauczuku
                butadienowo-nitrylowego NBR), syntetyczne. Dobre dopasowanie do
                dłoni użytkownika.
              </p>
              <p className="prof__products__item__par">
                <strong>Rozmiary:</strong> XS - XL
              </p>
              <p className="prof__products__item__par">
                <strong>Kolor:</strong> chabrowy
              </p>
              <p className="prof__products__item__par">
                <strong>Ilość:</strong> Opakowanie jednostkowe zawiera 100 sztuk
                rękawic.
              </p>
              <p className="prof__products__item__par">
                <strong>Cechy:</strong>
              </p>
              <ul className="prof__products__item__list">
                <li className="prof__products__item__list__item">
                  bardzo dobra ochrona przed czynnikami zewnętrznymi,
                </li>
                <li className="prof__products__item__list__item">elastyczne</li>
                <li className="prof__products__item__list__item">
                  mocne i wytrzymałe,
                </li>
                <li className="prof__products__item__list__item">
                  wzmocniony, rolowany mankiet.
                </li>
              </ul>
              <p className="prof__products__item__par">
                <strong>Zastosowanie:</strong>
              </p>
              <ul className="prof__products__item__list">
                <li className="prof__products__item__list__item">medyczne,</li>
                <li className="prof__products__item__list__item">
                  weterynaryjne,
                </li>
                <li className="prof__products__item__list__item">
                  gabinety kosmetyczne,
                </li>
                <li className="prof__products__item__list__item">
                  prace porządkowe w gospodarstwie domowym.
                </li>
              </ul>
              <p className="prof__products__item__par">
                <strong>Parametry:</strong>
              </p>
              <ul className="prof__products__item__list">
                <li className="prof__products__item__list__item">
                  wyrób medyczny klasy I,
                </li>
                <li className="prof__products__item__list__item">
                  teksturowane końcówki palców ułatwiające chwytanie,
                </li>
                <li className="prof__products__item__list__item">
                  MDD i PPE kat. I,
                </li>
                <li className="prof__products__item__list__item">
                  grubość na palcu 0,10 ±0,02 mm,
                </li>
                <li className="prof__products__item__list__item">
                  grubość na dłoni min. 0,06mm,
                </li>

                <li className="prof__products__item__list__item">
                  EN 455 (1 i 2) środek ochrony indywidualnej kategorii I z
                  przeznaczeniem do minimalnego ryzyka,
                </li>
                <li className="prof__products__item__list__item">
                  ASTM D6319,
                </li>
                <li className="prof__products__item__list__item">
                  EN 374-2 - przebadane na przenikalność substancji chemicznych
                  zgodnie z normą,
                </li>
                <li className="prof__products__item__list__item">
                  ISO 11193-1:2002 i NFPA 1999. Standard w odzieży ochronnej dla
                  operacji (Emergency Medical edycja 2008),
                </li>
                <li className="prof__products__item__list__item">
                  wyprodukowano wg GMP, ISO 9001, ISO 13485 oraz systemu jakości
                  CMDR,
                </li>
                <li className="prof__products__item__list__item">AQL 1.5.</li>
              </ul>
              <p className="prof__products__item__par">
                <strong>Warunki i sposób przechowywania:</strong>
              </p>
              <p className="prof__products__item__par">
                Rękawice należy przechowywać w chłodnym, suchym i dobrze
                wentylowanym miejscu w temperaturze 10°C-30°C. Otwarte
                opakowanie powinno być chronione przed bezpośrednim działaniem
                promieni słonecznych, światła fluorescencyjnego i promieni RTG.
                Niewłaściwe przechowywanie zmniejszy trwałość produktu. Użyte
                rękawice należy zutylizować zgodnie z lokalnymi przepisami.
              </p>
            </section>
          </article>
        </section>
      </div>
    </article>
  );
};

export default OfferMedicalPage;
