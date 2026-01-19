import "./App.scss";
import LogoSmall from "./assets/icons/logo-small.svg?react";
import PhoneIcon from "./assets/icons/phone.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";
import PersonIcon from "./assets/icons/person.svg?react";
import RedoIcon from "./assets/icons/redo.svg?react";

import Card from "./components/Card";

function App() {
  return (
    <>
      <header className="header"></header>
      <section className="hero"></section>
      <section className="why">
        <Card
          text="pripreme vode profesorice iz prirodoslovno-matematičke gimnazije"
          icon={<PersonIcon />}
          color="yellow"
        />
        <Card
          text="sustavno i temeljito ponavljanje gradiva"
          icon={<RedoIcon />}
          color="pastel-blue"
          variant="medium"
        />
        <Card
          title="big MF"
          text="Prelazak iz osnovne u srednju školu važna je prekretnica. Uz dobru pripremu, samopouzdanje i pravilno usmjerenje, svaki učenik može pokazati svoje znanje i postići odličan rezultat. Naš cilj je pomoći im da matematiku razumiju, zavole i – savladaju."
          icon={<RedoIcon />}
          color="pink"
          variant="large"
        />
      </section>
      <section className="methods"></section>
      <section className="goal"></section>
      <section className="who"></section>
      <section className="packages"></section>
      <section className="location"></section>
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
                  "_blank",
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
