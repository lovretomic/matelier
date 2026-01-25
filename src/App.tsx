import "./App.scss";
import { useRef, useState, useEffect } from "react";
import LogoSmall from "./assets/icons/logo-small.svg?react";
import PhoneIcon from "./assets/icons/phone.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";
import PersonIcon from "./assets/icons/person.svg?react";
import RedoIcon from "./assets/icons/redo.svg?react";
import MindIcon from "./assets/icons/mind.svg?react";
import SupportIcon from "./assets/icons/support.svg?react";
import TextIcon from "./assets/icons/text.svg?react";
import MathTrace from "./assets/tracings/math.svg?react";
import ThumbsUpIcon from "./assets/icons/thumbs-up.svg?react";
import ShieldIcon from "./assets/icons/shield.svg?react";
import NumbersIcon from "./assets/icons/numbers.svg?react";
import WarningIcon from "./assets/icons/warning.svg?react";
import LogoBig from "./assets/icons/logo-big.svg?react";

import Card from "./components/Card";
import StickyNote from "./components/StickyNote";
import ThickArrowRight from "./assets/icons/thick-arrow-right.svg?react";

import ClockIcon from "./assets/icons/clock.svg?react";
import CalendarIcon from "./assets/icons/calendar.svg?react";
import FlagIcon from "./assets/icons/flag.svg?react";

import Dot1Tracing from "./assets/tracings/dot-1.svg?react";
import Dot2Tracing from "./assets/tracings/dot-2.svg?react";
import Dot3Tracing from "./assets/tracings/dot-3.svg?react";
import Dot4Tracing from "./assets/tracings/dot-4.svg?react";
import CosineTracing from "./assets/tracings/cosine.svg?react";
import PencilTracing from "./assets/tracings/pencil.svg?react";

import LocationPinIcon from "./assets/icons/location-pin.svg?react";

import GeographyTracing from "./assets/tracings/geography.svg?react";
import { teachers, type Teacher } from "./data";

import BookAndGlassesTracing from "./assets/tracings/book-and-glasses.svg?react";
import BulbAndNotesTracing from "./assets/tracings/bulb-and-notes.svg?react";
import BulbAndNotes2Tracing from "./assets/tracings/bulb-and-notes-2.svg?react";
import Popup from "./components/Popup";
import { useIsOverflowing } from "./hooks/useIsOverflowing";

function TeacherPopupContent({ teacher }: { teacher: Teacher }) {
  const ref = useRef<HTMLDivElement>(null);
  const isOverflowing = useIsOverflowing(ref);

  return (
    <div className="popup-content-wrapper">
      <h1 className="popup-title">{teacher.fullName}</h1>
      <h4 className="popup-subtitle">{teacher.title}</h4>

      <div
        className={`popup-paragraphs ${isOverflowing ? "overflowing" : ""}`}
        ref={ref}
      >
        {teacher.bio.map((paragraph, j) => (
          <p className="paragraph" key={j}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

import TargetTracing from "./assets/tracings/target.svg?react";
import Arrow1Tracing from "./assets/tracings/arrow-1.svg?react";
import Arrow2Tracing from "./assets/tracings/arrow-2.svg?react";

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      const hero = heroRef.current;
      if (!hero) return;

      const inHero = currentScrollY < hero.offsetHeight - 50;

      if (inHero) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(!scrollingDown);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openPopupId, setOpenPopupId] = useState<string | null>(null);

  function openModal(id: string) {
    setOpenPopupId(id);
  }

  function closeModal() {
    setOpenPopupId(null);
  }

  return (
    <>
      <header className={`header ${headerVisible ? "show" : "hide"}`}>
        <LogoSmall className="logo" />
        <div className="text-wrapper">
          <a href="#section-why">Naše pripreme</a>
          <a href="#section-how">Način rada</a>
          <a href="#section-who">O nama</a>
          <a href="#section-packages">Paketi</a>
          <a href="#section-location">Lokacija</a>
          <div
            className="forms"
            onClick={() =>
              window.open(
                "https://forms.office.com/pages/responsepage.aspx?id=FvJamzTGgEurAgyaPQKQkW9Z9Um2rz5PsNIf7OZzxNhUNFlSOFlaSExNUDA5RlBUMFpITVdWTUs3RC4u&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAPi29FleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafMC6l5nB8q9vGIOTIUcsdpD7aPPQJVlz-oyxRk0oEmvqC7ZLCWo_wTiferng_aem_m2ySetS-X-0x6tsHRZVLgg&route=shorturl",
                "_blank",
              )
            }
          >
            Prijavi se
          </div>
        </div>
      </header>
      <section className="hero" ref={heroRef} id="section-hero">
        <div className="landing">
          <LogoBig className="icon" />
          <h1 className="title">
            Sigurnijim korakom <br /> u srednju školu
          </h1>
        </div>
        <Card
          variant="large"
          icon={(props) => (
            <div style={{ transform: "translateX(1px) translateY(3px)" }}>
              <FlagIcon {...props} />
            </div>
          )}
          color="pink"
          title="Pripreme za prijemne ispite iz matematike"
          text="Prelazak iz osnovne u srednju školu važna je prekretnica. Uz dobru pripremu, samopouzdanje i pravilno usmjerenje, svaki učenik može pokazati svoje znanje i postići odličan rezultat. Naš cilj je pomoći im da matematiku razumiju, zavole i – savladaju."
        />
      </section>
      <section className="why" id="section-why">
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
            text="rad u manjim grupama (od pet do 12 učenika)"
            icon={PersonIcon}
            color="pink"
          />
          <Card text="fokus na razumijevanje" icon={MindIcon} color="yellow" />
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
      <section className="how" id="section-how">
        <div className="text-wrapper">
          <PencilTracing className="pencil" />
          <h2 className="title">Način rada</h2>
          <p className="description">
            Program koji obrađujemo pokriva sve ključne sadržaje iz
            osnovnoškolskog kurikuluma potrebne za uspješno polaganje prijemnog
            ispita iz matematike. Učenike učimo:
          </p>
        </div>
        <div className="cards-wrapper">
          <CosineTracing className="cosine" />
          <div className="vertical-line" />
          <div className="card-wrapper">
            <Dot1Tracing className="dot" />
            <Card
              text="Kako organizirati rješenje korak-po-korak"
              icon={ThumbsUpIcon}
              color="yellow"
              variant="medium"
              className="card"
            />
          </div>
          <div className="card-wrapper">
            <Dot2Tracing className="dot" />
            <Card
              text="Kako prepoznati tip zadatka"
              icon={ShieldIcon}
              color="pastel-blue"
              variant="medium"
              className="card"
            />
          </div>
          <div className="card-wrapper">
            <Dot3Tracing className="dot" />
            <Card
              text="Kako izbjeći tipične pogreške"
              icon={NumbersIcon}
              color="pink"
              variant="medium"
              className="card"
            />
          </div>
          <div className="card-wrapper">
            <Dot4Tracing className="dot" />
            <Card
              text="Kako razviti sigurnost u rješavanju ispita"
              icon={WarningIcon}
              color="brick-red"
              variant="medium"
              className="card"
            />
          </div>
        </div>
      </section>
      <section className="goal" id="section-goal">
        <div className="content-wrapper">
          <Arrow1Tracing className="arrow" />
          <Arrow2Tracing className="arrow" />
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
      <section className="who" id="section-who">
        <BookAndGlassesTracing className="tracing-1" />
        <BulbAndNotesTracing className="tracing-2" />
        <div className="title-wrapper">
          <BulbAndNotes2Tracing className="tracing-3" />
          <h2 className="title">Tko vodi pripreme?</h2>
          <p className="description">
            Pripreme vode profesorice matematike iz prirodoslovno matematičke
            gimnazije, s višegodišnjim iskustvom u nastavi te u radu s
            talentiranim učenicima i natjecateljima.
          </p>
        </div>
        <div className="teacher-cards-wrapper">
          {teachers.map((teacher) => (
            <>
              <Popup
                id={teacher.fullName}
                openId={openPopupId}
                onClose={closeModal}
              >
                <TeacherPopupContent teacher={teacher} />
              </Popup>
              <div className="teacher-card" key={teacher.fullName}>
                <div
                  className="image-with-gradient"
                  style={
                    {
                      "--img-url": `url(${teacher.photoUrl})`,
                    } as React.CSSProperties
                  }
                />

                <h3 className="teacher-name">{teacher.fullName}</h3>
                <h4 className="teacher-title">{teacher.title}</h4>
                <button
                  className="button"
                  onClick={() => openModal(teacher.fullName)}
                >
                  Pročitaj više
                </button>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className="packages" id="section-packages">
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
      <section className="location" id="section-location">
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
