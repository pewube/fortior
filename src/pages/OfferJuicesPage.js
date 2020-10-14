import React, { useEffect, useRef, useState } from "react";

const OfferJuicesPage = () => {
  const [img, showImg] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });

  const ref0 = useRef(null),
    ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null),
    ref4 = useRef(null),
    ref5 = useRef(null),
    ref6 = useRef(null),
    ref7 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const topPosition = (image) => image.getBoundingClientRect().top;
    const bottomPosition = (image) => image.getBoundingClientRect().bottom;

    const showImages = () => {
      const refs = [
        ref0.current,
        ref1.current,
        ref2.current,
        ref3.current,
        ref4.current,
        ref5.current,
        ref6.current,
        ref7.current,
      ];

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
    <article className="health">
      <div className="health-container">
        <header className="health__header">
          <h1 className="health__header__title">Soki owocowe</h1>
          <figure className="health__header__logo">
            <img
              ref={ref0}
              src="/assets/img/health/logo-only.png"
              alt="Logo Only"
              className={
                img[0]
                  ? "health__header__logo__only"
                  : "health__header__logo__only health__header__logo__only--hidden"
              }
            />
          </figure>
        </header>
        <section className="health__how-we-do-it">
          <h2 className="health__how-we-do-it__title">
            Only <span>tradycyjnie</span>:
          </h2>
          <p className="health__how-we-do-it__par">
            tradycyjne metody produkcji bez dodatków chemicznych.
          </p>
          <h2 className="health__how-we-do-it__title">
            Only <span>naturalnie</span>:
          </h2>
          <p className="health__how-we-do-it__par">
            używamy tylko świeżych owoców bez dodatków aromatów.
          </p>
          <h2 className="health__how-we-do-it__title">
            Only <span>nowocześnie</span>:
          </h2>
          <p className="health__how-we-do-it__par">
            stosujemy nowoczesne i wygodne opakowania, w których zamykamy naturę
            i tradycję.
          </p>
          <figure className="health__how-we-do-it__figure">
            <img
              ref={ref1}
              src="/assets/img/health/logo-fruits.png"
              alt="Soczyste owoce"
              className={
                img[1]
                  ? "health__how-we-do-it__img"
                  : "health__how-we-do-it__img health__how-we-do-it__img--hidden"
              }
            />
          </figure>
          <h2 className="health__how-we-do-it__title">
            Tak powstają nasze soki:
          </h2>
          <section className="health__animation">
            <div className="health__animation__frame health__animation__frame--1">
              <svg
                width="100"
                height="100"
                version="1.1"
                viewBox="0 0 26.458 26.458"
                xmlns="http://www.w3.org/2000/svg">
                <g fillRule="evenodd">
                  <path
                    d="m13.145 9.0705c-.50874-.14955-.95015-.1645-1.5337-.1645-2.3267 0-3.9128.70287-4.9303 2.0712-1.0624 1.4282-1.2344 3.7985-.56859 5.6828.606 1.6899 2.8504 5.6902 5.0575 5.451 1.1222-.11964 1.6609-.68791 2.9851-.44116 1.429.26918 2.1846 1.2786 4.7133-1.5478 2.3193-2.5946 3.4639-7.582.47133-10.035-1.0324-.85241-2.6709-1.2113-4.1148-1.1366-.65089.02991-.84541.26171-1.3916.3963.19452-.70287 1.414-1.989 2.02-2.5572.33667-.32152.74067-.59819.75563-.80007-.51622-.0673-.84541.1645-1.0998.38882-.25437.22432-.53867.55332-.7257.80007-.24689.31405-.41896.54584-.62096.89728-.17208.29909-.33667.75521-.50874 1.0094-.31422-2.5797-.68082-4.4565-2.7831-5.6603-.20948-.11964-1.7881-.91223-1.9452-.92719-.39652-.04487-.26185.67296-.20948 1.1066.05985.41873.12718.7926.20948 1.1814.35911 1.6301.65837 2.4825 2.2594 3.3947.27682.15702.61348.329.93519.44864.32918.12712.808.23928 1.025.44116z"
                    fill="#68973b"
                  />
                  <path
                    d="m12.299.23975c7.4665-.56828 13.452 5.2266 13.923 12.016.51622 7.4848-5.1772 13.452-12.038 13.93-7.5039.52341-13.429-5.1444-13.946-12.016-.56111-7.5147 5.1772-13.399 12.06-13.93zm-.17956-.18693c-6.9279.61314-12.734 6.6249-12.068 14.304.59852 6.8717 6.6511 12.674 14.305 12.016 6.8979-.59819 12.696-6.6174 12.053-14.282-.57607-6.8567-6.6436-12.711-14.29-12.038z"
                    fill="#6a953e"
                  />
                </g>
              </svg>

              <p>1. zbiór owoców</p>
            </div>
            <div className="health__animation__frame health__animation__frame--2">
              <svg
                width="100"
                height="100"
                version="1.1"
                viewBox="0 0 26.458 26.458"
                xmlns="http://www.w3.org/2000/svg">
                <g fillRule="evenodd">
                  <path
                    d="m3.871 7.0726 18.707-.0075c-.187-.42611-1.2491-1.3082-1.6979-1.6596-.59091-.46349-1.3015-.93446-2.0944-1.3307-4.3832-2.168-9.3124-1.5923-13.18 1.3157-.36651.2766-1.6007 1.3606-1.7353 1.682z"
                    fill="#69963c"
                  />
                  <path
                    d="m12.136 18.66c-2.6329.54573-.94246 3.8276.05236 4.1042.39643.10466.62831-.11961.99482-.12709.41139-.0075.60587.2467 1.0098.07476 1.3913-.5831 2.3113-3.7902-.08976-4.0743-.47123-.05233-.63579.12709-.94994.0598-.38147-.07475-.56847-.13456-1.0173-.03738z"
                    fill="#69973b"
                  />
                  <path
                    d="m6.8181 18.66c-2.6254.56815-.88262 3.8874.1122 4.1042.38147.08223.62083-.14204.99482-.12709.41139.0075.59839.2467 1.0023.0598 1.3987-.62796 2.244-3.8051-.12716-4.0668-.47871-.04485-.62831.13456-.95742.0598-.37399-.08971-.62083-.11961-1.0247-.02991z"
                    fill="#69973b"
                  />
                  <path
                    d="m17.514 18.653c-2.6479.48592-1.0023 3.7827.0075 4.1042.41139.12709.60587-.11213.97986-.11961.41887-.0075.59839.23922 1.0247.08223 1.3389-.4934 2.3636-3.7528-.04487-4.0743-.44879-.06729-.67319.10466-.94994.0598-.41887-.0598-.53107-.14204-1.0173-.05234z"
                    fill="#69973b"
                  />
                  <path
                    d="m26.191 14.421c-.59839 6.7879-6.5972 12.425-14.144 11.789-6.7693-.57563-12.446-6.601-11.803-14.129.59091-6.7954 6.6047-12.499 14.204-11.812 6.7543.62048 12.402 6.6235 11.743 14.152zm-13.92-14.368c-2.9471.29903-4.9741 1.084-7.1657 2.7511-3.4033 2.5791-5.393 6.915-5.0714 11.415.49367 6.9823 6.5823 12.768 14.219 12.2 6.9264-.50835 12.701-6.5861 12.147-14.196-.2244-3.0949-1.3613-5.3451-3.1191-7.5729-1.2491-1.5774-3.4632-3.0426-5.3481-3.7678-1.653-.63543-3.71-1.0316-5.6623-.8298z"
                    fill="#68943d"
                  />
                  <path
                    d="m12.727 12.373h.60587l-.0075-2.153-.59839-.0075z"
                    fill="#69963c"
                  />
                  <path
                    d="m11.156 12.365.60587.01495-.0075-2.168-.59839.0075z"
                    fill="#69963c"
                  />
                  <path
                    d="m14.298 12.373.60587-.0075-.0075-2.138-.59839-.01495z"
                    fill="#69963c"
                  />
                  <path
                    d="m11.156 14.885.59839.0075v-2.1605l-.59839.0075z"
                    fill="#69963c"
                  />
                  <path
                    d="m6.4441 12.38.59839-.01495-.0075-2.138-.59839-.01495z"
                    fill="#69953a"
                  />
                  <path
                    d="m14.298 14.892.59839-.0075v-2.1381l-.59839-.01495z"
                    fill="#69973b"
                  />
                  <path
                    d="m12.727 17.404h.59091l.0075-2.153h-.59091z"
                    fill="#69963c"
                  />
                  <path
                    d="m11.156 17.397.59091.0075.0075-2.1605-.59091.0075z"
                    fill="#69963c"
                  />
                  <path
                    d="m19.018 17.397h.59839v-2.1231l-.59091-.02991z"
                    fill="#6a963c"
                  />
                  <path
                    d="m14.298 17.404h.59091l.0075-2.153-.58343-.0075z"
                    fill="#69963c"
                  />
                  <path
                    d="m8.0074 17.382.59839.02242v-2.1455l-.59091-.0075z"
                    fill="#69973b"
                  />
                  <path
                    d="m15.869 17.374.59839.02991v-2.1455h-.59091z"
                    fill="#69973b"
                  />
                  <path
                    d="m12.727 14.885.59839.0075v-2.1605h-.57595z"
                    fill="#69963c"
                  />
                  <path
                    d="m6.4366 17.367.59839.03738v-2.1455h-.59091z"
                    fill="#69973b"
                  />
                  <path
                    d="m9.5857 17.389.59091.0075.0075-2.1231-.59091-.02243z"
                    fill="#69973b"
                  />
                  <path
                    d="m17.447 17.382.59091.01495v-2.1306l-.58343-.01495z"
                    fill="#69973b"
                  />
                  <path
                    d="m6.4366 14.892.59839-.0075v-2.1455l-.56847-.0075z"
                    fill="#69973b"
                  />
                  <path
                    d="m19.018 14.885.57595.0075.02244-2.1381-.58343-.02242z"
                    fill="#6b983e"
                  />
                  <path
                    d="m19.018 12.365h.58343l.01497-2.138-.56847-.01495z"
                    fill="#69973b"
                  />
                  <path
                    d="m15.876 14.885.56099.0075.02992-2.153h-.58343z"
                    fill="#69973b"
                  />
                  <path
                    d="m12.727 9.8536.58343.0075.01496-1.9661h-.59091z"
                    fill="#69963c"
                  />
                  <path
                    d="m11.156 9.8536.58343.0075.01496-1.9661-.59091.0075z"
                    fill="#69963c"
                  />
                  <path
                    d="m19.018 9.8461.59091.0075.0075-1.9287-.59091-.02991z"
                    fill="#6a963c"
                  />
                  <path
                    d="m14.305 9.8611.58343-.0075.0075-1.9512-.59091-.0075z"
                    fill="#69963c"
                  />
                  <path
                    d="m8.0149 9.8387.58343.01495.01496-1.9437-.59839-.0075z"
                    fill="#69973b"
                  />
                  <path
                    d="m15.869 9.8312.59091.02991.0075-1.9512h-.59091z"
                    fill="#69973b"
                  />
                  <path
                    d="m6.4441 9.8312.58343.02991.0075-1.9512h-.59091z"
                    fill="#69973b"
                  />
                  <path
                    d="m9.5857 9.8461.59091.0075.0075-1.9287-.59091-.02242z"
                    fill="#69973b"
                  />
                  <path
                    d="m17.447 9.8387.58343.01495.0075-1.9362-.59091-.01495z"
                    fill="#69973b"
                  />
                  <path
                    d="m8.0373 12.336.54603-.0075.0075-2.0483-.53855-.01495z"
                    fill="#69953a"
                  />
                  <path
                    d="m9.6006 12.343.53107-.0075.01496-2.0633-.53107-.0075z"
                    fill="#69953a"
                  />
                  <path
                    d="m15.921 12.343.53107-.0075-.0075-2.0633h-.53107z"
                    fill="#68973b"
                  />
                  <path
                    d="m8.0523 14.825.53107-.01495v-2.0409h-.53855z"
                    fill="#69953a"
                  />
                  <path
                    d="m17.477 12.336h.52359l.0075-2.0633-.52359-.0075z"
                    fill="#69953a"
                  />
                  <path
                    d="m9.6156 14.832.51611-.0075.0075-2.0558-.52359-.0075z"
                    fill="#69953a"
                  />
                  <path
                    d="m17.492 13.345v.76252l-.0075.72514.51611-.0075v-2.0558h-.51611z"
                    fill="#69953a"
                  />
                  <path
                    d="m17.484 12.769h.51611v2.0558l-.51611.0075.0075-.72514v-.76252zm-.02244 2.1231.56099.01495c.08227-.3065.06732-1.839.02244-2.1754l-.59839-.02242c-.05236.35883-.06732 1.8988.01496 2.1829z"
                    fill="#9cb483"
                  />
                  <path
                    d="m8.0448 12.769h.53855v2.0409l-.53107.01495zm-.01496 2.1231.56099.01495c.09724-.32146.0748-1.8241.02244-2.1829l-.60587-.0075c-.04487.35883-.05984 1.8764.02244 2.1754z"
                    fill="#9bb67c"
                  />
                  <path
                    d="m17.484 10.265.52359.0075-.0075 2.0633h-.52359zm-.0374 2.1081.59091.01495c.05984-.33641.06732-1.8764-.0075-2.1754l-.56847-.0075c-.08228.3065-.06732 1.8465-.01496 2.168z"
                    fill="#9cb483"
                  />
                  <path
                    d="m8.0523 10.265.53855.01495-.0075 2.0483-.54603.0075zm-.0374 2.1081.59091.01495c.05984-.33641.06732-1.8839-.01496-2.1754l-.56847-.0075c-.0748.31398-.06732 1.839-.0075 2.168z"
                    fill="#9aba78"
                  />
                  <path
                    d="m9.6156 12.762.52359.0075-.0075 2.0558-.51611.0075zm-.0075 2.1306.56099.0075.02992-2.1605-.61335-.02991c-.05236.36631-.0748 1.8988.02244 2.1829z"
                    fill="#9cb483"
                  />
                  <path
                    d="m9.6156 10.265.53107.0075-.01496 2.0633-.53107.0075zm-.02992 2.1156.59091.0075.02244-2.168-.59839-.02242c-.08976.29903-.0748 1.8614-.01496 2.1829z"
                    fill="#9cb483"
                  />
                  <path
                    d="m15.914 10.272h.53107l.0075 2.0633-.53107.0075zm-.05984 2.0932.61335.02991c.06732-.32893.0748-1.8988-.01496-2.1829l-.56847-.0075z"
                    fill="#9bb67c"
                  />
                </g>
              </svg>
              <p>2. sortowanie i mycie</p>
            </div>
            <div className="health__animation__frame health__animation__frame--3">
              <svg
                width="100"
                height="100"
                version="1.1"
                viewBox="0 0 26.458 26.458"
                xmlns="http://www.w3.org/2000/svg">
                <g fillRule="evenodd">
                  <path
                    d="m16.549 15.179c.0075-.0075.02245-.02243.03741-.0299.02993-.03738.05237-.05982.09726-.0972.4788-.47105.80797-.88977.93515-1.6749.20199-1.316-.55361-1.5627-1.0025-1.8842l2.1621.0075c-.3591.24674-.56109.25422-.80797.65798-.19451.32899-.26184.80752-.20199 1.2337.14214.88977 1.0773 1.8169 1.0773 1.8169.0075-.01495.02245.02991.02993.05234l-2.4015-.0075zm-4.3616-.32151c.38902-.37385.64338-.93463.72568-1.4805.19451-1.3608-.57606-1.5777-.995-1.8842l2.177.0075c-.53117.35142-1.2269.69536-.995 1.944.15711.84491.68079 1.3384 1.1072 1.802l-2.4239.0075zm-5.0947.39628c.38154-.46358.98752-.75518 1.1371-1.8842.17207-1.2561-.44887-1.5104-.98752-1.8767l2.1621.0075c-.37406.2617-.53865.23179-.80797.65798-.53117.82995-.05985 2.0711.54613 2.7067l.35162.39628zm4.9601-5.9143v.6505c-2.5137.0972-5.783 0-8.4538.01495l-.01496 1.4805 1.0923.0075c-.0075.01495-.02993.0075-.03741.02991l-.16459.11963c-.20947.12711-.41147.24674-.56857.50844-.20199.33647-.26932.815-.19451 1.2487.07481.44115.41895 1.0991.7182 1.4206l.38902.43367-1.2045.01495-.0075.57573c1.197.14954 19.002.04486 19.152.03738l-.0075-.61312-1.586-.01495.17207-.17197c.78553-.76266 1.3242-1.8992.79301-2.8787-.23192-.43367-.44888-.44862-.83042-.70284l1.4214-.02991v-1.4356c-2.8204-.08973-5.8952.05234-8.5735-.03738v-2.0263c-.50872.22431-1.6683 1.1814-2.0947 1.3683z"
                    fill="#6a973d"
                  />
                  <path
                    d="m.22449 13.908c-.41895-7.3873 5.394-13.347 12.344-13.69 7.4064-.36638 13.332 5.376 13.676 12.36.3591 7.3873-5.4164 13.324-12.352 13.646-7.4214.34394-13.264-5.3386-13.668-12.315zm11.738-13.847c-6.8304.63555-12.658 6.7667-11.895 14.423.68079 6.849 6.6882 12.591 14.401 11.896 6.8603-.62807 12.628-6.7069 11.933-14.371-.62094-6.8938-6.7331-12.666-14.439-11.948z"
                    fill="#68943c"
                  />
                  <path
                    d="m9.5611 3.2308h2.4763l.01496 2.0113c.68079-.32899 1.4364-1.0094 2.0947-1.3833l.01496-.6206 2.3715-.0075v-1.1589h-6.9575z"
                    fill="#68973b"
                  />
                  <path
                    d="m11.91 16.458c-.20199.40376-.41895.9122-.5985 1.3234-.66583 1.5178 2.1172 1.4132 1.2943-.05234-.3965-.70284-.22444-.22431-.69575-1.2711z"
                    fill="#68973b"
                  />
                  <path
                    d="m12.112 21.811c-.17207.49348-.42643.88977-.5985 1.3608-.55361 1.4505 2.1097 1.3384 1.3242-.10468-.1197-.22431-.24688-.33647-.37406-.57573-.1197-.22431-.20947-.51592-.35162-.68041z"
                    fill="#68973b"
                  />
                  <path
                    d="m7.8254 16.458c-.16459.48601-.41895.89725-.60598 1.3533-.58353 1.4879 2.1097 1.3608 1.3242-.07477-.11222-.20936-.26184-.3589-.3965-.61312-.12718-.22431-.17955-.46358-.32169-.66546z"
                    fill="#68973b"
                  />
                  <path
                    d="m15 19.254c-.13466.46358-.3965.87482-.57605 1.3234-.56109 1.4206 2.0573 1.3982 1.3391-.05234-.16459-.35142-.30673-.35142-.53865-.9122-.12718-.31404-.11222-.25422-.22444-.3589z"
                    fill="#68973b"
                  />
                  <path
                    d="m17.918 16.48c-.03741.33647-.42643.97949-.56857 1.3234-.65087 1.5178 2.0873 1.4505 1.3017-.03738-.1197-.21684-.26184-.35142-.3965-.61312-.1197-.23179-.20947-.50844-.33666-.67293z"
                    fill="#68973b"
                  />
                  <path
                    d="m15.868 16.503c-.14214.47853-.43391.91968-.60598 1.3683-.56857 1.458 2.1172 1.3533 1.3167-.11963-.1197-.21684-.24688-.32151-.38154-.56826-.11222-.22431-.19451-.49348-.32917-.68041z"
                    fill="#68973b"
                  />
                  <path
                    d="m8.9401 19.194c-.1197.48601-.43391.91968-.5985 1.3833-.49376 1.3907 2.0873 1.3234 1.3466-.11963-.17207-.33647-.26932-.2916-.53865-.91968l-.17207-.29908c-.0075-.01495-.02245-.02991-.03741-.04486z"
                    fill="#68973b"
                  />
                  <path
                    d="m13.055 19.172c-.19451.41124-.42643.9122-.60598 1.3309-.25436.59069.1197 1.1515.74064 1.1141.53865-.03738.86782-.53087.57605-1.1216-.23192-.47105-.34414-.40376-.71072-1.3234z"
                    fill="#68973b"
                  />
                  <path
                    d="m14.125 21.796c-.13466.47105-.41895.89725-.5985 1.3683-.20947.56078.19451 1.0617.74812 1.0468.56857-.02243.89026-.58321.5985-1.1515-.1571-.30656-.2768-.33647-.53865-.9122z"
                    fill="#68973b"
                  />
                  <path
                    d="m11.02 19.187c-.16459.48601-.3965.86734-.59102 1.3234-.64339 1.5328 2.0573 1.3982 1.3092-.0075-.12718-.23179-.26184-.36638-.3965-.6206-.1197-.22431-.21696-.49348-.32169-.69536z"
                    fill="#68973b"
                  />
                  <path
                    d="m17.027 19.202c-.15711.4561-.43391.90472-.61346 1.3384-.26184.63555.14214 1.1589.77805 1.1141.61346-.04486.80049-.71032.50124-1.2188-.20199-.34394-.52369-.7477-.66583-1.2337z"
                    fill="#68973b"
                  />
                  <path
                    d="m16.145 21.789c-.15711.47853-.38902.86734-.58354 1.316-.65835 1.5328 2.0499 1.4356 1.3017-.0075-.11222-.21683-.26184-.36638-.3965-.61312-.11222-.21683-.20947-.47105-.32169-.69536z"
                    fill="#68973b"
                  />
                  <path
                    d="m13.87 16.54c-.1571.46358-.40398.86734-.58354 1.316-.2394.59816.1571 1.0991.73316 1.0842.59102-.02243.86782-.61312.5985-1.1365-.10474-.21684-.25436-.3589-.36658-.57573-.06733-.11963-.11222-.20936-.16459-.33647z"
                    fill="#68973b"
                  />
                  <path
                    d="m9.8753 16.473c-.10474.41124-.41147.91968-.58354 1.316-.65835 1.5403 2.0499 1.4281 1.3017-.0075-.11222-.22431-.26184-.36638-.3965-.6206-.1197-.21684-.20947-.4561-.32169-.68789z"
                    fill="#68973b"
                  />
                  <path
                    d="m10.092 21.841c-.0075.01495-.02245.02243-.02993.04486l-.5985 1.2636c-.21696.60564.20947 1.0767.7556 1.0543.53117-.02243.8753-.50844.61346-1.0916-.12718-.27665-.35162-.47105-.54613-.9122-.02993-.0673-.02993-.0972-.07481-.17945z"
                    fill="#68973b"
                  />
                  <path
                    d="m12.052 8.6068c.62094-.28413 1.4813-1.0244 2.1022-1.3833v-.93463l-1.3167.85986c-.81545.56078-.80049.24674-.78553 1.458z"
                    fill="#69963b"
                  />
                  <path
                    d="m12.052 5.9823.0075.94211c.41147-.17945 1.5711-1.0916 2.0798-1.3758l.0075-.94211c-.3965.15702-1.586 1.1216-2.0947 1.3758z"
                    fill="#68973b"
                  />
                </g>
              </svg>
              <p>3. tłoczenie i filtracja</p>
            </div>
            <div className="health__animation__frame health__animation__frame--4">
              <svg
                width="100"
                height="100"
                version="1.1"
                viewBox="0 0 26.458 26.458"
                xmlns="http://www.w3.org/2000/svg">
                <g fillRule="evenodd">
                  <path
                    d="m15.804 23.579 2.2376-11.04-9.3844.02244 2.1927 11.017z"
                    fill="#69973b"
                  />
                  <path
                    d="m11.823.28105c2.0131-.23186 3.9888.037397 5.7324.65819 1.8036.64323 2.9186 1.3987 4.1384 2.3785 2.4546 1.982 4.1384 5.2805 4.4902 8.5041.8232 7.5991-4.8718 13.583-11.502 14.323-7.6483.85265-13.71-4.8616-14.406-11.541-.44153-4.196 1.0702-7.442 3.0309-9.8205 1.7137-2.0718 4.5875-4.0539 8.5163-4.5026zm.69598-.26178c-7.087.36649-12.917 6.4099-12.498 13.957.38915 7.0232 6.4434 12.88 13.994 12.423 7.0271-.41885 12.894-6.4473 12.415-14.016-.44153-6.9858-6.391-12.76-13.912-12.364z"
                    fill="#6a953c"
                  />
                  <path
                    d="m11.673 9.1517c.22451.22438.53134 1.1444 1.7063 1.1818.86062.02991 1.594-.56096 1.7736-1.1818.26941.2543.30683.71803 1.0178 1.0247 1.0178.43381 2.2975-.09723 2.5594-1.2565.16464-.71803-.07484-1.0696-.3667-1.5707-.913-1.5707-1.8335-3.3508-2.7315-4.8691-.11225-.18699-.0898-.22438-.25444-.2543-.11225.15707.0898.39641.20954.61331.12722.22438.24696.42633.3667.64323.25444.44129.49392.86013.73339 1.2939.48644.89753.96538 1.7352 1.4593 2.5954.28438.5086.55379.81526.37418 1.5408-.39663 1.623-2.7764 1.6156-3.173 0-.0898-.36649-.02245-.3291-.18709-.41885-.05987.082274-.0075-.029921-.07484.16455-.12722.41137-.03742.52356-.47147.97233-.92048.96485-2.4621.47868-2.7689-.77038-.02245-.097232 0-.044878-.02994-.15707-.0075-.014957-.01496-.029921-.01496-.05236l-.06735-.15707c-.11225.05236-.097287-.014957-.17961.35901-.32928 1.6006-2.6567 1.7577-3.1656.11219-.22451-.71055.052382-1.0696.3218-1.5707.87558-1.653 1.8485-3.261 2.7166-4.8915.11225-.20194.11974-.17203 0-.26926-.14219.014959-.26193.32909-.35173.50112-.12722.23186-.23948.42633-.3667.65071l-2.1702 3.9043c-.26193.48616-.53882.86013-.38166 1.5931.12722.5834.44902.93493.83816 1.1818 1.0776.68811 2.4172-.02244 2.6791-.91249z"
                    fill="#6a953c"
                  />
                </g>
              </svg>
              <p>4. delikatna pasteryzacja</p>
            </div>
            <div className="health__animation__frame health__animation__frame--5">
              <svg
                width="100"
                height="100"
                version="1.1"
                viewBox="0 0 26.458 26.458"
                xmlns="http://www.w3.org/2000/svg">
                <g fillRule="evenodd">
                  <path
                    d="m5.7243 9.0718-1.1078.0075-.0075.56107h17.148v-.55359l-1.1303-.01496.83833-4.2118-3.78-.0075.80839 4.2043-2.1183.02244.83085-4.2192-3.7725-.01496.80839 4.2118-2.1407.01496.84582-4.2043-3.78-.01496.81588 4.2192-2.1108.0075c-.03743-.57603.76348-3.3889.79342-4.2267l-3.7426-.0075z"
                    fill="#68973b"
                  />
                  <path
                    d="m5.7317 20.6-1.1003.0075-.01497.53863 17.111.02244.03742-.55359-1.1377-.0075.83833-4.2192-3.78-.0075.80839 4.2043-2.1183.02244.83085-4.2192-3.7725-.0075.80091 4.2043-2.1108.02244.82336-4.2118-3.765-.01496.80091 4.2192-2.1108.0075c-.02994-.6284.76348-3.3814.79342-4.2267h-3.7426z"
                    fill="#6a973d"
                  />
                  <path
                    d="m5.7243 14.78-1.1078.02244v.52366l17.111.02244.02994-.55359-1.1377-.0075.84582-4.2192-3.7725-.0075.80091 4.2043-2.1258.02244.83833-4.2118-3.765-.01496.80091 4.2192-2.1333.0075.83833-4.2118-3.765-.01496.80091 4.2192-2.1258.0075.83085-4.2043-3.7575-.02244z"
                    fill="#68973b"
                  />
                  <path
                    d="m.21521 13.912c-.41917-7.3912 5.3968-13.353 12.35-13.698 7.4028-.36657 13.338 5.3788 13.675 12.366.35928 7.3837-5.4117 13.331-12.358 13.653-7.4178.33664-13.271-5.3414-13.668-12.321zm12.306-13.892c-7.0959.37405-12.912 6.4037-12.5 13.959.38174 7.0545 6.4297 12.86 13.997 12.441 7.0136-.38901 12.852-6.4261 12.418-13.967-.39671-7.0171-6.3998-12.837-13.915-12.433z"
                    fill="#68943d"
                  />
                </g>
              </svg>
              <p>5. magazyn i sprzedaż</p>
            </div>
          </section>
        </section>
        <section className="health__flavors">
          <h2 className="health__flavors__title">Nasze smaki:</h2>
          <article className="health__flavors__item">
            <figure className="health__flavors__item__figure">
              <img
                ref={ref2}
                src="/assets/img/health/flavor-apple.png"
                alt="Butelka i kubek soku jabłkowego"
                className={
                  img[2]
                    ? "health__flavors__item__img"
                    : "health__flavors__item__img health__flavors__item__img--hidden"
                }
              />
            </figure>
            <section className="health__flavors__item__text">
              <p className="health__flavors__item__par">
                Znacie powiedzenie "Jabłko pada niedaleko od jabłoni"?
              </p>
              <p className="health__flavors__item__par">
                Wyobraź sobie sad pełen soczystych owoców, które swój
                niesamowity smak zawdzięczają mikroklimatowi Beskidu Sądeckiego
                - krainy kwitnących sadów.
              </p>
              <p className="health__flavors__item__par">
                Wyobraź sobie, że ze świeżych jabłek wyciskamy dla Ciebie kropla
                po kropli naturalny sok jabłkowy.
              </p>
              <p className="health__flavors__item__par">
                Sok <span>Only</span> to sto procent tego co najlepsze dla
                Twojego organizmu. Zadbaj o siebie i o Twoją rodzinę! Zacznij od
                wypracowania prostych nawyków. Pij codziennie zdrowy sok{" "}
                <span>Only 100%</span>.
              </p>
            </section>
          </article>
          <article className="health__flavors__item">
            <figure className="health__flavors__item__figure">
              <img
                src="/assets/img/health/flavor-pear.png"
                alt="Butelka i kubek soku jabłkowo-gruszkowego"
                ref={ref3}
                className={
                  img[3]
                    ? "health__flavors__item__img"
                    : "health__flavors__item__img health__flavors__item__img--hidden"
                }
              />
            </figure>
            <section className="health__flavors__item__text">
              <p className="health__flavors__item__par">
                Czy można zatrzymać lato?
              </p>
              <p className="health__flavors__item__par">
                Oczywiście! Nic nas przed tym nie powstrzyma. Wystarczy połączyć
                najsłodsze jabłka z najlepszymi odmianami gruszek.
              </p>
              <p className="health__flavors__item__par">
                W soku jabłkowo – gruszkowym zamknęliśmy promienie słońca i
                witaminy. Takie połączenie smakuje równie dobrze w upalne dni
                jak i mroźne poranki.
              </p>
              <p className="health__flavors__item__par">
                Rozkoszuj się pełnią smaku!
              </p>
            </section>
          </article>
          <article className="health__flavors__item">
            <figure className="health__flavors__item__figure">
              <img
                src="/assets/img/health/flavor-raspberry.png"
                alt="Butelka i kubek soku jabłkowo-malinowego"
                ref={ref4}
                className={
                  img[4]
                    ? "health__flavors__item__img"
                    : "health__flavors__item__img health__flavors__item__img--hidden"
                }
              />
            </figure>
            <section className="health__flavors__item__text">
              <p className="health__flavors__item__par">
                Jabłko z maliną kusi pozytywną energią!
              </p>
              <p className="health__flavors__item__par">
                Dlaczego? Ponieważ jest pełne witamin i przeciwutleniaczy.
              </p>
              <p className="health__flavors__item__par">
                Połączenie jabłka i malin działa niczym dobry kosmetyk na
                procesy starzenia. Wzmacnia system odpornościowy organizmu,
                pozwala zachować zdrowie i urodę.
              </p>
              <p className="health__flavors__item__par">
                Jeśli szukasz smaku, który sprawi, że będziesz tryskał energią
                to koniecznie spróbuj tego połączenia. Poczujesz jak owocowa
                siła napełnia Cię niespożytą siłą witalną.
              </p>
            </section>
          </article>
          <article className="health__flavors__item">
            <figure className="health__flavors__item__figure">
              <img
                src="/assets/img/health/flavor-cherry.png"
                alt="Butelka i kubek soku jabłkowo-wiśniowego"
                ref={ref5}
                className={
                  img[5]
                    ? "health__flavors__item__img"
                    : "health__flavors__item__img health__flavors__item__img--hidden"
                }
              />
            </figure>
            <section className="health__flavors__item__text">
              <p className="health__flavors__item__par">
                Sok <span>Only</span> z dojrzałą wiśnią to wspomnienie polskiego
                lata, szumiących łan zboża i mnogości w sadach słodkich
                owoców...
              </p>
              <p className="health__flavors__item__par">
                Mamy pyszną wiadomość dla wszystkich - polskie lato zamknęliśmy
                w dla Ciebie w wygodnym opakowaniu!
              </p>
              <p className="health__flavors__item__par">
                Apetyczny mix wiśniowy doprawiliśmy porcją słodkiego jabłka by
                oprócz zaspokajania pragnienia dodać pełni witamin oraz zdrowego
                błonnika!
              </p>
            </section>
          </article>
          <article className="health__flavors__item">
            <figure className="health__flavors__item__figure">
              <img
                src="/assets/img/health/flavor-bcurrant.png"
                alt="Butelka i kubek soku jabłkowo-porzeczkowego"
                ref={ref6}
                className={
                  img[6]
                    ? "health__flavors__item__img"
                    : "health__flavors__item__img health__flavors__item__img--hidden"
                }
              />
            </figure>
            <section className="health__flavors__item__text">
              <p className="health__flavors__item__par">
                Porzeczka z soczystym jabłkiem kryje w sobie wyjątkowy smak, a
                także nieocenione źródło witamin, w tym witaminy C,
                wzmacniającej odporność organizmu.
              </p>
              <p className="health__flavors__item__par">
                Sok <span>Only</span> to sto procent tego co najlepsze dla
                Twojego organizmu.
              </p>
              <p className="health__flavors__item__par">
                Rozkoszuj się pysznym smakiem i kaskadą zdrowych składników. To
                prosty sposób na wyśmienitą przekąskę w ciągu dnia by delektować
                się zdrowym sokiem dla całej rodziny.
              </p>
              <p className="health__flavors__item__par">
                Zadbaj o siebie i o Twoją rodzinę!
              </p>
            </section>
          </article>
          <article className="health__flavors__item">
            <figure className="health__flavors__item__figure">
              <img
                src="/assets/img/health/flavor-orange.png"
                alt="Butelka i kubek soku jabłkowo-pomarańczowego"
                ref={ref7}
                className={
                  img[7]
                    ? "health__flavors__item__img"
                    : "health__flavors__item__img health__flavors__item__img--hidden"
                }
              />
            </figure>
            <section className="health__flavors__item__text">
              <p className="health__flavors__item__par">
                Pełnia smaku i witamin czy dawka energii i zdrowia?
              </p>
              <p className="health__flavors__item__par">
                Teraz nie musisz wybierać. Ukryliśmy dla Ciebie wszystkie
                dobrodziejstwa tego zaskakującego połącznia, soczystości i
                dojrzałości owoców.
              </p>
              <p className="health__flavors__item__par">
                Masz ochotę zrobić coś Tylko dla siebie?
              </p>
              <p className="health__flavors__item__par">
                <span>Only</span> znalazł rozwiązanie!
              </p>
              <p className="health__flavors__item__par">
                Pyszne połączenie polskiego smaku z nutą egzotyki, które
                zaspokoi nie tylko pragnienie, ale i część dziennego
                zapotrzebowania organizmu na witaminy i inne wartościowe
                składniki. Na dodatek ma niewiele kalorii i zero konserwantów!
              </p>
            </section>
          </article>
        </section>
      </div>
    </article>
  );
};

export default OfferJuicesPage;
