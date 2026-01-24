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
import StickyNote from "./components/StickyNote";
import ThickArrowRight from "./assets/icons/thick-arrow-right.svg?react";

import ClockIcon from "./assets/icons/clock.svg?react";
import CalendarIcon from "./assets/icons/calendar.svg?react";
import FlagIcon from "./assets/icons/flag.svg?react";

import LocationPinIcon from "./assets/icons/location-pin.svg?react";

import GeographyTracing from "./assets/tracings/geography.svg?react";

import TargetTracing from "./assets/tracings/target.svg?react";
import Arrow1Tracing from "./assets/tracings/arrow-1.svg?react";
import Arrow2Tracing from "./assets/tracings/arrow-2.svg?react";

function App() {
  return (
    <>
      <header className="header"></header>
      <section className="hero"></section>
      <section className="why">
        <MathTrace className="traces" />

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
      <section className="goal">
        <div className="content-wrapper">
          <Arrow1Tracing className="arrow-1" />
          <Arrow2Tracing className="arrow-2" />
          <TargetTracing className="tracing" />
          <div className="text-wrapper">
            <h1 className="title">Naš cilj</h1>
            <p className="text">
              Cilj nam nije samo „proći gradivo“, nego usaditi razumijevanje i
              sigurnost koja ostaje i nakon prijemnog ispita te čini prelazak iz
              osnovne škole u srednju „bezbolnim“.
            </p>
          </div>
        </div>
      </section>
      <section className="who"></section>
      <section className="packages">
        <h2 className="title">Paketi</h2>
        <div className="sticky-notes-wrapper">
          <StickyNote
            title="Paket 1"
            subtitle="Polugodišnje pripreme"
            listItems={[
              { icon: ClockIcon, text: "36 školskih sati" },
              { icon: CalendarIcon, text: "blok sat jednom tjedno" },
              { icon: FlagIcon, text: "od veljače 2025." },
            ]}
            price={345}
            action={() => {}}
          />
          <StickyNote
            title="Paket 2"
            subtitle="Brze pripreme"
            listItems={[
              { icon: ClockIcon, text: "30 školskih sati" },
              { icon: CalendarIcon, text: "svakodnevno po tri školska sata" },
              { icon: FlagIcon, text: "nakon završetka nastavne godine" },
            ]}
            price={285}
            action={() => {}}
          />
          <StickyNote
            title="Simulacija"
            subtitle="prijemnog ispita"
            listItems={[
              {
                icon: FlagIcon,
                text: "uključuje povratnu informaciju i individualne konzultacije",
              },
            ]}
            price={15}
          />
        </div>
        <button className="apply-button">
          Prijavi se!
          <ThickArrowRight className="icon" />
        </button>
      </section>
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
          <div className="text-wrapper">
            <h2 className="title">Termini i lokacija</h2>
            <div className="address-tag">
              <LocationPinIcon className="icon" />
              <span className="address">
                Varšavska 18, 10000 Zagreb{" "}
                <span className="secondary">
                  (OŠ Josipa Jurja Strossmayera)
                </span>
              </span>
            </div>
            <p className="paragraph">
              Pripreme iz <b>Paketa 1</b> odvijaju se jednom tjedno od 17:30 do
              18 h. Za učenike koji imaju nastavu u smjenana, pripreme će se
              prilagoditi njihovoj smjeni (ujutro i poslijepodne).
            </p>
            <p className="paragraph">
              Pripreme iz <b>Paketa 2</b> odvijat će se svakodnevno od 12.
              lipnja 2026., tj. nakon završetka nastave.
            </p>
          </div>
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
