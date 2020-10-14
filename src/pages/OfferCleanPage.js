import React, { useEffect, useRef, useState } from "react";

const OfferCleanPage = () => {
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
    <article className="clean">
      <div className="clean-container">
        <header className="clean__header">
          <h1 className="clean__header__title">Utrzymanie czystości</h1>
        </header>

        <section className="clean__products">
          <article className="clean__products__item">
            <header className="clean__products__item__header">
              <h2 className="clean__products__item__header__title">
                Rękawice nitrylowe Hands&Care
              </h2>
            </header>
            <figure className="clean__products__item__figure">
              <img
                ref={ref0}
                src="/assets/img/clean/handscare.png"
                alt="Rękawice nitrylowe Hands'n'Care"
                className={
                  img[0]
                    ? "clean__products__item__img"
                    : "clean__products__item__img clean__products__item__img--hidden"
                }
              />
            </figure>
            <section className="clean__products__item__text">
              <p className="clean__products__item__par">
                Rękawice <span>Hands&Care</span> wykonane są z nitrylu,
                syntetycznego materiału, który jest obojętny dla skóry
                człowieka. Jest to bardzo ważna cecha rękawic, ponieważ wg
                danych statystycznych około 6% populacji ma alergię na lateks.
                Objawia się to zaczerwienieniem dłoni, swędzeniem i uniemożliwia
                korzystanie z rękawic zawierających lateks. Nitryl jest
                materiałem syntetycznym, który pozbawiony jest wszelkich
                alergenów.
              </p>
              <p className="clean__products__item__par">
                Rękawice nitrylowe mogą być stosowane zarówno przy pracy w
                kuchni, jak również w pracach porządkowych, pielegnacyjnych i
                większości innych lekkich prac, w których konieczna jest ochrona
                dłoni.
              </p>
            </section>
          </article>
          <article className="clean__products__item">
            <header className="clean__products__item__header">
              <h2 className="clean__products__item__header__title">
                Rękawice nitrylowe safeHand Coats
              </h2>
            </header>
            <figure className="clean__products__item__figure">
              <img
                ref={ref1}
                src="/assets/img/clean/safehand.png"
                alt="Rękawice nitrylowe SafeHand Coats"
                className={
                  img[1]
                    ? "clean__products__item__img"
                    : "clean__products__item__img clean__products__item__img--hidden"
                }
              />
            </figure>
            <section className="clean__products__item__text">
              <p className="clean__products__item__par">
                Jednorazowe rękawice diagnostyczne i ochronne z kauczuku
                nitrylowego (NBR), bezpudrowe, niejałowe.
              </p>
              <p className="clean__products__item__par">
                Rękawice polecane przy nadwrażliwości skóry, efektywnie łagodząc
                podrażnienia sprawiają, że skóra dłoni jest elastyczna i dobrze
                odżywiona, pozostawiają uczucie jedwabistości i miękkości.
              </p>
              <p className="clean__products__item__par">
                Opatentowana technologia pokrywania rękawic w pełni naturalnym
                koloidalnym wyciągiem z owsa umożliwiła osiągnięcie wyrobu,
                który nie tylko chroni i zabezpiecza, ale również posiada
                aktywny system terapeutyczny. Składowe ekstraktu pozyskiwane są
                z certyfikowanych upraw znajdujących się w Szwecji oraz
                Finlandii. β-glukan jako jedna z frakcji owsa wzbogacająca
                preparat zawarty w rękawicach wykazuje duże podobieństwo pod
                względem własności strukturalnych do kwasu hialuronowego.
              </p>

              <p className="clean__products__item__par">
                Dobroczynne działanie owsa wykorzystywano już w czasach
                starożytnych, gdzie doceniano jego skuteczność w leczeniu
                bezsenności, stanów lękowych, a przede wszystkim dysfunkcji
                skóry związanej z podrażnieniem. Arabowie i Egipcjanie używali
                owsa do poprawy urody, Rzymianie i Grecy korzystali z kąpieli
                owsianych w celach leczniczych przy schorzeniach skórnych.
              </p>

              <p className="clean__products__item__par">
                Formuła pod postacią "koloidalnej owsianki" została zatwierdzona
                i zaklasyfikowana przez (FDA) U.S. Food and Drug Administration
                wg USP (Farmakopei Amerykańskiej) jako środek ochronny
                przeznaczony do zabezpieczenia skóry.
              </p>
              <p className="clean__products__item__par">
                Przygotowanie koloidalnego wyciągu z owsa USP zostało
                wystandaryzowane i ujednolicone przez FDA amerykańską agencję
                rządową Agencję Żywności i Leków. <span>SafeHand Coats</span>{" "}
                zawierają środek, będący tą samą formułą, którą wykorzystuje się
                również przy produkcji kosmetyków w związku z czym, po te
                rękawice, powinny śmiało sięgać osoby o skórze wrażliwej i
                podatnej na alergie oraz osoby często korzystające z tego
                rodzaju ochrony podczas swojej pracy.
              </p>
            </section>
            <figure className="clean__products__item__figure-info">
              <img
                src="/assets/img/clean/safehand-coats-dzialanie.jpg"
                alt="Oddziaływanie rękawic standardowych oraz safeHand Coats na skórę"
                className="clean__products__item__img-info"
              />
            </figure>
          </article>
          <article className="clean__products__item">
            <header className="clean__products__item__header">
              <h2 className="clean__products__item__header__title">
                Rękawice nitrylowe Home&Care Gentleman's
              </h2>
            </header>
            <figure className="clean__products__item__figure">
              <img
                ref={ref2}
                src="/assets/img/clean/gentlemans.png"
                alt="Rękawice nitrylowe Home'n'Care Gentleman's"
                className={
                  img[2]
                    ? "clean__products__item__img"
                    : "clean__products__item__img clean__products__item__img--hidden"
                }
              />
            </figure>
            <section className="clean__products__item__text">
              <p className="clean__products__item__par">
                Jednorazowe rękawice <span>Gentleman's</span> to produkt
                najwyższej jakości przeznaczony do zastosowań domowych i
                profesjonalnych.
              </p>
              <p className="clean__products__item__par">
                Rękawice przeznaczone do:
              </p>
              <ul className="clean__products__item__list">
                <li className="clean__products__item__list__item">
                  <span>prac w ogrodzie</span> - przy sadzeniu i pielęgnacji
                  roślin, zbiorze owoców. Dzięki zastosowaniu rękawic Twoje
                  dłonie pozostaną czyste i nie będą wymagać długotrwałego
                  szorowania w celu pozbycia się śladów ziemi czy soku z owoców.
                </li>
                <li className="clean__products__item__list__item">
                  <span>majsterkowania</span> - gdzie wymagana jest precyzja i
                  zachowanie czystości bez pozostawiania tłustych śladów palców
                  na malowanych czy lakierowanych powierzchniach.
                </li>
                <li className="clean__products__item__list__item">
                  <span>remontów</span> - zachowaj czyste dłonie i oszczędź
                  sobie ciężkiego domywania rąk zabrudzonych farbą czy szpachlą.
                </li>
                <li className="clean__products__item__list__item">
                  <span>prac motoryzacyjnych</span> - dolewania oleju, płynów do
                  spryskiwaczy, konserwacji i czyszczenia łańcuchów w
                  motocyklach i rowerach, smarowania i innych pracach w których
                  łatwo o trudne do usunięcia zabrudzenia
                </li>
                <li className="clean__products__item__list__item">
                  <span>czyszczenia i sprzątania</span> bez konieczności
                  narażania dłoni na kontakt ze żrącymi lub wysuszającymi
                  substancjami chemicznymi
                </li>
              </ul>
              <p className="clean__products__item__par">
                Doskonała jakość i najwyższej jakości materiał z którego zostały
                wykonane rękawice <span>Gentleman's</span>, zapewnią komfort
                użytkowania i pełną ochronę dłoni przed środkami chemicznymi,
                smarami, farbami, sokami i wieloma innymi trudno usuwalnymi lub
                szkodliwymi substancjami.
              </p>
            </section>
          </article>
        </section>
      </div>
    </article>
  );
};

export default OfferCleanPage;
