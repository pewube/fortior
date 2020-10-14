import React, { useEffect, useRef, useState } from "react";

const OfferProteinsPage = () => {
  const [img, showImg] = useState({
    0: "",
    1: "",
    2: "",
  });

  const ref0 = useRef(null),
    ref1 = useRef(null),
    ref2 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const topPosition = (image) => image.getBoundingClientRect().top;
    const bottomPosition = (image) => image.getBoundingClientRect().bottom;

    const showImages = () => {
      const refs = [ref0.current, ref1.current, ref2.current];

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
    <article className="activity">
      <div className="activity-container">
        <header className="activity__header">
          <h1 className="activity__header__title">Produkty proteinowe</h1>
        </header>

        <section className="activity__products">
          <article className="activity__products__item">
            <figure className="activity__products__item__figure">
              <img
                src="/assets/img/activity/proteinpro.png"
                alt="Batony ProteinPro"
                ref={ref0}
                className={
                  img[0]
                    ? "activity__products__item__img"
                    : "activity__products__item__img activity__products__item__img--hidden"
                }
              />
            </figure>
            <section className="activity__products__item__text">
              <p className="activity__products__item__par">
                <span>ProteinPro</span> to batony, które powstały w oparciu o
                białko będące jednym z budulców mięśni i ważnym składnikiem
                odbudowy i regeneracji organizmu. Najczęstszym źródłem białka są
                proteiny z mleka - mające doskonałe właściwości absorbcyjne.
              </p>
              <p className="activity__products__item__par">
                Duża grupa aktywnych konsumentów, poszukuje możliwości szybkiego
                i łatwego sposobu na odzyskanie energii po treningu. Część
                konsumentów chce po prostu schudnąć a inni szukają zdrowej i
                smacznej przekąski.
              </p>
              <p className="activity__products__item__par">
                <span>ProteinPro</span> jest najszybciej rosnącą marką produktów
                proteinowych w Szwecji. Szeroka gama wysokoproteinowych
                produktów o zróżnicowanych smakach pozwala cieszyć się pełną
                energią. Batony <span>ProteinPro</span> zwierają w swoim
                składzie aż 50% protein.
              </p>
              <p className="activity__products__item__par">
                Batony <span>ProteinPro</span> dostępne są w czterech
                popularnych smakach: czekoladowym, kokosowym,
                jogurtowo-truskawkowym oraz toffi-karmel.
              </p>
            </section>
          </article>
          <article className="activity__products__item">
            <figure className="activity__products__item__figure">
              <img
                src="/assets/img/activity/bigbite.png"
                alt="Batony Big Bite ProteinPro"
                ref={ref1}
                className={
                  img[1]
                    ? "activity__products__item__img"
                    : "activity__products__item__img activity__products__item__img--hidden"
                }
              />
            </figure>
            <section className="activity__products__item__text">
              <p className="activity__products__item__par">
                <span>Big Bite ProteinPro</span> to batony, które stanowią
                rozwinięcie linii <span>ProteinPro</span>.
              </p>
              <p className="activity__products__item__par">
                Duży baton o wzbogaconej recepturze, stanowi doskonałą przekąskę
                po wysiłu fizycznym. Składniki najwyższej jakości pomogą w
                szybkim odzyskaniu energii i siły.
              </p>
            </section>
          </article>
          <article className="activity__products__item">
            <figure className="activity__products__item__figure">
              <img
                src="/assets/img/activity/aminopro.png"
                alt="Napoje AminoPro w puszkach"
                ref={ref2}
                className={
                  img[2]
                    ? "activity__products__item__img"
                    : "activity__products__item__img activity__products__item__img--hidden"
                }
              />
            </figure>
            <section className="activity__products__item__text">
              <p className="activity__products__item__par">
                Produkty <span>AminoPro</span> zawierają aminokwasy, które z
                kolei stanowią składniki białka. Istnieje łącznie 20 różnych
                aminokwasów o różnych charakterystykach. Niektóre przyspieszają
                budowę i regenerację mięśni, a inne zwiększają wydajność i
                przeciwdziałają zmęczeniu.
              </p>
              <p className="activity__products__item__par">
                Spożycie aminokwasów daje pozytywne efekty, czy chodzi o
                chodzenie, ćwiczenia na siłowni czy ćwiczenia wytrzymałościowe.
              </p>
              <p className="activity__products__item__par">
                <span>AminoPro</span> to gotowe do spożycia napoje w puszkach, w
                czterech smakach. To oczywisty wybór w każdym dniu z treningiem.
              </p>
            </section>
          </article>
        </section>
      </div>
    </article>
  );
};

export default OfferProteinsPage;
