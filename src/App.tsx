import "./App.scss";
import LogoSmall from "./assets/icons/logo-small.svg?react";
import PhoneIcon from "./assets/icons/phone.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";

import LocationPinIcon from "./assets/icons/location-pin.svg?react";

import GeographyTracing from "./assets/tracings/geography.svg?react";

function App() {
  return (
    <>
      <header className="header"></header>
      <section className="hero"></section>
      <section className="why"></section>
      <section className="methods"></section>
      <section className="goal"></section>
      <section className="who"></section>
      <section className="packages"></section>
      <section className="location">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.7662589974481!2d15.970276874384956!3d45.812043529664045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e335d05a35%3A0x8e7b0e973cb2dfc7!2sOsnovna%20%C5%A1kola%20Josipa%20Jurja%20Strossmayera!5e0!3m2!1sen!2shr!4v1768836864912!5m2!1sen!2shr"
            style={{
              overflow: "hidden",
              border: 0,
            }}
            loading="lazy"
          />
          <div className="address-wrapper">
            <LocationPinIcon className="icon" />
            <span className="address">
              Varšavska 18, 10000 Zagreb
              <span className="secondary"> (OŠ Josipa Jurja Strossmayera)</span>
            </span>
          </div>
        </div>
        <div className="content-wrapper">
          <h2>Termini i lokacija</h2>
          <div className="address-tag">
            <LocationPinIcon className="icon" />
            <span className="address">
              Varšavska 18, 10000 Zagreb (OŠ Josipa Jurja Strossmayera)
            </span>
          </div>
          <p className="paragraph">
            Pripreme iz Paketa 1 odvijaju se jednom tjedno od 17:30 do 18 h. Za
            učenike koji imaju nastavu u smjenana, pripreme će se prilagoditi
            njihovoj smjeni (ujutro i poslijepodne).
          </p>
          <p>
            Pripreme iz Paketa 2 odvijat će se svakodnevno od 12. lipnja 2026.,
            tj. nakon završetka nastave.
          </p>
          <GeographyTracing className="tracing" />
        </div>
      </section>
      <footer className="footer">
        <div className="logo-wrapper">
          <LogoSmall className="logo" />
          <h1 className="subtitle">
            Pripreme za prijemne <br /> ispite iz matematike
          </h1>
        </div>

        <div className="contacts">
          <h2 className="label">Kontakt</h2>
          <div className="items-wrapper">
            <div
              className="item"
              onClick={() => {
                window.location.href = "tel:0989234897";
              }}
            >
              <div className="icon-div">
                <PhoneIcon className="icon" />
              </div>
              <span className="text">098 923 4897</span>
            </div>

            <div
              className="item"
              onClick={() => {
                window.location.href = "mailto:matelierpripreme@gmail.com";
              }}
            >
              <div className="icon-div">
                <EmailIcon className="icon" />
              </div>
              <span className="text">matelierpripreme@gmail.com</span>
            </div>

            <div
              className="item"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/matelier_pripreme/",
                  "_blank"
                );
              }}
            >
              <div className="icon-div">
                <InstagramIcon className="icon" />
              </div>
              <span className="text">@matelier_pripreme</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
