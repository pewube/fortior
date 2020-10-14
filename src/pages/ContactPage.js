import React, { useEffect, useState } from "react";

const ContactPage = (props) => {
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

  const {
    mail,
    mailValid,
    title,
    titleValid,
    message,
    messageValid,
    handleContactMail,
    handleContactTitle,
    handleContactMessage,
    handleContactSubmit,
    mailSent,
    responseError,
  } = props;

  if (mailSent) {
    return (
      <article className="contact">
        <div className="contact-container">
          <header className="contact__header">
            <h1 className="contact__header__title">Dane kontaktowe</h1>
          </header>

          <section className="contact__data">
            <p>Fortior Sp. z o.o.</p>
            <p>ul. Stawowa 4</p>
            <p>41-200 Sosnowiec</p>
            <p>e-mail: kontakt@fortior.pl</p>
          </section>
          <section className="contact__data">
            <p>KRS 0000572252</p>
            <p>Regon 362296840</p>
            <p>NIP 644-351-25-06</p>
          </section>

          <form className="form" noValidate>
            <section className="form__status-panel">
              <p>Wiadomość została wysłana.</p>
              <p>Dziękujemy za kontakt.</p>
              <p>Postaramy się odpowiedzieć jak najszybciej.</p>
            </section>
          </form>
        </div>
      </article>
    );
  } else if (responseError) {
    return (
      <article className="contact">
        <div className="contact-container">
          <header className="contact__header">
            <h1 className="contact__header__title">Dane kontaktowe</h1>
          </header>

          <section className="contact__data">
            <p>Fortior Sp. z o.o.</p>
            <p>ul. Stawowa 4</p>
            <p>41-200 Sosnowiec</p>
            <p>e-mail: kontakt@fortior.pl</p>
          </section>
          <section className="contact__data">
            <p>KRS 0000572252</p>
            <p>Regon 362296840</p>
            <p>NIP 644-351-25-06</p>
          </section>

          <form className="form" noValidate>
            <section className="form__status-panel form__status-panel--error">
              <p>
                Niestety wysłanie wiadomości nie powiodło się. Spróbuj ponownie.
              </p>
            </section>
          </form>
        </div>
      </article>
    );
  } else {
    return (
      <article className="contact">
        <div
          className={
            section[0]
              ? "contact-container"
              : "contact-container contact-container--hidden"
          }>
          <header className="contact__header">
            <h1 className="contact__header__title">Dane kontaktowe</h1>
          </header>

          <section className="contact__data">
            <p>Fortior Sp. z o.o.</p>
            <p>ul. Stawowa 4</p>
            <p>41-200 Sosnowiec</p>
            <p>e-mail: kontakt@fortior.pl</p>
          </section>
          <section className="contact__data">
            <p>KRS 0000572252</p>
            <p>Regon 362296840</p>
            <p>NIP 644-351-25-06</p>
          </section>

          <form className="form" noValidate>
            <header className="form__title">
              Masz pytania ? Napisz do nas:
            </header>
            <input
              className={
                mail.length > 0 && !mailValid
                  ? "form__input-email form__input form__input--invalid"
                  : "form__input-email form__input"
              }
              type="email"
              placeholder="Twój adres e-mail"
              value={mail}
              onChange={handleContactMail}
              name="email"
              aria-label="Twój adres e-mail"
              aria-invalid={!mailValid ? "true" : "false"}
              required
            />
            <input
              className={
                title.length > 0 && !titleValid
                  ? "form__input-title form__input form__input--invalid"
                  : "form__input-title form__input"
              }
              type="text"
              placeholder="Tytuł wiadomości"
              value={title}
              onChange={handleContactTitle}
              name="title"
              aria-label="Tytuł wiadomości - min. 5, max. 200 znaków"
              aria-invalid={!titleValid ? "true" : "false"}
              minLength="5"
              maxLength="200"
              required
            />
            <textarea
              className={
                message.length > 0 && !messageValid
                  ? "form__input-message form__input form__input--invalid"
                  : "form__input-message form__input"
              }
              placeholder="Treść wiadomości"
              value={message}
              onChange={handleContactMessage}
              name="message"
              aria-label="Treść wiadomości - min. 10, max. 2000 znaków"
              aria-invalid={!messageValid ? "true" : "false"}
              minLength="10"
              maxLength="2000"
              required></textarea>
            <input
              className="form__input-robo"
              type="text"
              placeholder="Jeżeli jesteś człowiekiem nie wypełniaj tego pola"
              name="robo"
            />
            <button
              onClick={handleContactSubmit}
              className={
                !mailValid || !titleValid || !messageValid
                  ? "form__btn form__btn--busy"
                  : "form__btn"
              }
              type="submit"
              disabled={
                !mailValid || !titleValid || !messageValid ? true : false
              }>
              {!mailValid || !titleValid || !messageValid
                ? "Uzupełnij wszystkie pola"
                : "Wyślij wiadomość"}
            </button>
            <section
              className={
                (mail.length > 0 && !mailValid) ||
                (title.length > 0 && !titleValid) ||
                (message.length > 0 && !messageValid)
                  ? "form__status-panel form__status-panel--invalid"
                  : "form__status-panel"
              }>
              {mail.length > 0 && !mailValid ? (
                <p>Błąd. Nieprawidłowy adres mailowy.</p>
              ) : null}
              {title.length > 0 && !titleValid ? (
                <p>Błąd. Tytuł wiadomości musi zawierać od 5 do 200 znaków.</p>
              ) : null}
              {message.length > 0 && !messageValid ? (
                <p>
                  Błąd. Treść wiadomości musi zawierać od 10 do 2000 znaków.
                </p>
              ) : null}
            </section>
          </form>
        </div>
      </article>
    );
  }
};

export default ContactPage;
