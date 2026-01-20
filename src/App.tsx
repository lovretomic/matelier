import "./App.scss";
import LogoSmall from "./assets/icons/logo-small.svg?react";
import PhoneIcon from "./assets/icons/phone.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";
import PersonIcon from "./assets/icons/person.svg?react";
import RedoIcon from "./assets/icons/redo.svg?react";
import ClipboardIcon from "./assets/icons/clipboard.svg?react";
import MindIcon from "./assets/icons/mind.svg?react";
import CheckmarkIcon from "./assets/icons/checkmark.svg?react";
import SupportIcon from "./assets/icons/support.svg?react";
import TextIcon from "./assets/icons/text.svg?react";
import MathTrace from "./assets/tracings/math.svg?react";

import Card from "./components/Card";

function App() {
  return (
    <>
      <header className="header"></header>
      <section className="hero"></section>
      <section className="why">
        <div>
          <MathTrace className="traces" />
        </div>

        <div className="content">
          <h1 className="title">
            Zašto upisati <br /> naše pripreme?
          </h1>
          <Card
            text="pripreme vode profesorice iz prirodoslovno-matematičke gimnazije"
            icon={PersonIcon}
            color="yellow"
          />
          <Card
            text="sustavno i temeljito ponavljanje gradiva"
            icon={RedoIcon}
            color="pastel-blue"
          />
          <Card
            text="priprema ciljano za prijemne ispite"
            icon={ClipboardIcon}
            color="pink"
          />
          <Card
            text="rad u manjim grupama (od pet do 12 učenika)"
            icon={PersonIcon}
            color="yellow"
          />
          <Card
            text="fokus na razumijevanje, ne „bubanje“ na pamet"
            icon={MindIcon}
            color="pink"
          />
          <Card
            text="mnoštvo primjera, zadataka i strategija rješavanja"
            icon={CheckmarkIcon}
            color="yellow"
          />
          <Card
            text="podrška, motivacija i individualni pristup"
            icon={SupportIcon}
            color="pink"
          />
          <Card
            text="redovito praćenje stečenog znanja i povratne informacije roditeljima"
            icon={TextIcon}
            color="pastel-blue"
          />
        </div>
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
