import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import OfferCleanPage from "../pages/OfferCleanPage";
import OfferJuicesPage from "../pages/OfferJuicesPage";
import OfferMedicalPage from "../pages/OfferMedicalPage";
import OfferProteinsPage from "../pages/OfferProteinsPage";

const Page = ({
  state,
  handleContactMail,
  handleContactTitle,
  handleContactMessage,
  handleContactSubmit,
}) => {
  return (
    <section className="page">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/oferta/soki-owocowe" component={OfferJuicesPage} />
        <Route
          path="/oferta/produkty-proteinowe"
          component={OfferProteinsPage}
        />
        <Route path="/oferta/produkty-czystosci" component={OfferCleanPage} />
        <Route path="/oferta/produkty-medyczne" component={OfferMedicalPage} />
        <Route path="/o-nas" component={AboutPage} />
        <Route
          path="/kontakt"
          render={(props) => (
            <ContactPage
              {...props}
              mail={state.contactMail}
              mailValid={state.contactMailValid}
              title={state.contactTitle}
              titleValid={state.contactTitleValid}
              message={state.contactMessage}
              messageValid={state.contactMessageValid}
              handleContactMail={handleContactMail}
              handleContactTitle={handleContactTitle}
              handleContactMessage={handleContactMessage}
              handleContactSubmit={handleContactSubmit}
              mailSent={state.contactMailSent}
              responseError={state.contactMailResponseError}
            />
          )}
        />
        <Route component={HomePage} />
      </Switch>
    </section>
  );
};

export default Page;
