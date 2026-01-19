import "./App.scss";
import LogoSmall from "./assets/icons/logo-small.svg?react";
import PhoneIcon from "./assets/icons/phone.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";
import StickyNote from "./components/StickyNote";

function App() {
  return (
    <>
      <header className="header"></header>
      <section className="hero"></section>
      <section className="why"></section>
      <section className="methods"></section>
      <section className="goal"></section>
      <section className="who"></section>
      <section className="packages">
        <h2 className="title">Paketi</h2>
        <div className="sticky-notes-wrapper">
          <StickyNote
            title="Paket 1"
            subtitle="Polugodišnje pripreme"
            listItems={[
              { icon: PhoneIcon, text: "36 školskih sati" },
              { icon: PhoneIcon, text: "blok sat jednom tjedno" },
              { icon: PhoneIcon, text: "od veljače 2025." },
            ]}
          />
          <StickyNote
            title="Paket 2"
            subtitle="Brze pripreme"
            listItems={[
              { icon: PhoneIcon, text: "30 školskih sati" },
              { icon: PhoneIcon, text: "svakodnevno po tri školska sata" },
              { icon: PhoneIcon, text: "nakon završetka nastavne godine" },
            ]}
          />
          <StickyNote
            title="Simulacija"
            subtitle="prijemnog ispita"
            listItems={[
              {
                icon: PhoneIcon,
                text: "uključuje povratnu informaciju i individualne konzultacije",
              },
            ]}
          />
        </div>
      </section>
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
