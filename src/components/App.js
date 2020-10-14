import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../scss/_App.scss";
import Loader from "../layouts/Loader";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import Page from "../layouts/Page";
import Footer from "../layouts/Footer";

class App extends Component {
  state = {
    header: true,
    navigation: false,
    layoutWhite: [
      "/oferta/soki-owocowe",
      "/oferta/produkty-czystosci",
      "/oferta/produkty-medyczne",
    ],
    layoutTransparent: ["/o-nas", "/kontakt"],
    contactMail: "",
    contactMailValid: false,
    contactTitle: "",
    contactTitleValid: false,
    contactMessage: "",
    contactMessageValid: false,
    contactMailSent: false,
    contactMailResponseError: false,
  };

  pictures = [
    "/assets/img/logo-name-m.png",
    "/assets/img/logo-name.png",
    "/assets/img/logo-sign-m.png",
    "/assets/img/logo-sign.png",
    "/assets/img/home/home01t.jpg",
    "/assets/img/home/home02t.jpg",
    "/assets/img/home/home03t.jpg",
    "/assets/img/home/home04t.jpg",
    "/assets/img/health/logo-only.png",
    "/assets/img/health/logo-fruits.png",
    "/assets/img/health/flavor-apple.png",
    "/assets/img/health/flavor-pear.png",
    "/assets/img/health/flavor-raspberry.png",
    "/assets/img/health/flavor-cherry.png",
    "/assets/img/health/flavor-bcurrant.png",
    "/assets/img/health/flavor-orange.png",
    "/assets/img/clean/handscare.png",
    "/assets/img/clean/safehand.png",
    "/assets/img/clean/gentlemans.png",
    "/assets/img/clean/safehand-coats-dzialanie.jpg",
    "/assets/img/activity/proteinpro.png",
    "/assets/img/activity/bigbite.png",
    "/assets/img/activity/aminopro.png",
    "/assets/img/prof/sosoft.png",
    "/assets/img/about/bg-about-d.jpg",
    "/assets/img/contact/bg-contact-d.jpg",
  ];

  componentDidMount() {
    this.pictures.forEach((picture) => {
      new Image().src = picture;
    });

    window.addEventListener("load", () => {
      document.querySelector(".loader-container").remove();
    });

    window.addEventListener("scroll", () => {
      if (
        window.innerWidth < 768 &&
        window.innerHeight < 768 &&
        !this.state.navigation
      ) {
        this.handleHeaderHide();
      }
    });
  }

  handleNavigation = () => {
    this.setState({
      navigation: !this.state.navigation,
    });
  };

  handleHeaderLogo = () => {
    if (this.state.navigation) {
      this.setState({
        navigation: !this.state.navigation,
      });
    }
  };

  handleLayoutColor = (path) => {
    for (const el of this.state.layoutWhite) {
      if (el === path) {
        return "white";
      }
    }
    for (const el of this.state.layoutTransparent) {
      if (el === path) {
        return "transparent";
      }
    }
  };

  scrollStart = 0;
  handleHeaderHide = () => {
    let scrollValue = window.scrollY;

    if (scrollValue > this.scrollStart) {
      this.setState({
        header: false,
      });
    } else {
      this.setState({
        header: true,
      });
    }
    if (window.scrollY <= 10) {
      this.setState({
        header: true,
      });
    }
    this.scrollStart = scrollValue <= 0 ? 0 : scrollValue;
  };

  handleContactMail = (e) => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.setState({
      contactMail: e.target.value,
      contactMailValid: reg.test(e.target.value),
    });
  };

  handleContactTitle = (e) => {
    this.setState({
      contactTitle: e.target.value,
      contactTitleValid:
        e.target.value.length > 4 && e.target.value.length < 201,
    });
  };

  handleContactMessage = (e) => {
    this.setState({
      contactMessage: e.target.value,
      contactMessageValid:
        e.target.value.length > 9 && e.target.value.length < 2001,
    });
  };

  handleContactSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.contactMailValid &&
      this.state.contactTitleValid &&
      this.state.contactMessageValid
    ) {
      const formData = new FormData();
      formData.append("email", this.state.contactMail);
      formData.append("title", this.state.contactTitle);
      formData.append("message", this.state.contactMessage);

      const url = "contact.php";
      const method = "POST";

      fetch(url, {
        method: method.toUpperCase(),
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "ok") {
            this.setState({
              contactMailSent: true,
            });
          }

          if (res.status === "error") {
            this.setState({
              contactMailResponseError: true,
            });
          }
        });
    }
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Loader />
          <Header
            onClickLogo={this.handleHeaderLogo}
            onClickBurger={this.handleNavigation}
            state={this.state}
            layoutColor={this.handleLayoutColor}
          />
          <main className="main">
            <Navigation
              onClick={this.handleNavigation}
              state={this.state}
              layoutColor={this.handleLayoutColor}
            />
            <Page
              state={this.state}
              handleContactMail={this.handleContactMail}
              handleContactTitle={this.handleContactTitle}
              handleContactMessage={this.handleContactMessage}
              handleContactSubmit={this.handleContactSubmit}
            />
          </main>
          <Footer state={this.state} layoutColor={this.handleLayoutColor} />
        </div>
      </Router>
    );
  }
}

export default App;
