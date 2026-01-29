import "./App.scss";
import React, { useRef, useState, useEffect } from "react";
import {
  formsLink,
  phoneNumber,
  sections,
  teachers,
  type Teacher,
} from "./data";
import { useIsOverflowing } from "./hooks/useIsOverflowing";

import LogoSmall from "./assets/icons/logo-small.svg?react";
import LogoBig from "./assets/icons/logo-big.svg?react";

import ArrowRightIcon from "./assets/icons/arrow-right.svg?react";
import CalendarIcon from "./assets/icons/calendar.svg?react";
import ClockIcon from "./assets/icons/clock.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
import FlagIcon from "./assets/icons/flag.svg?react";
import HamburgerMenuIcon from "./assets/icons/hamburger.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";
import LocationPinIcon from "./assets/icons/location-pin.svg?react";
import MindIcon from "./assets/icons/mind.svg?react";
import NumbersIcon from "./assets/icons/numbers.svg?react";
import PhoneIcon from "./assets/icons/phone.svg?react";
import PersonIcon from "./assets/icons/person.svg?react";
import RedoIcon from "./assets/icons/redo.svg?react";
import ShieldIcon from "./assets/icons/shield.svg?react";
import SupportIcon from "./assets/icons/support.svg?react";
import TextIcon from "./assets/icons/text.svg?react";
import ThickArrowRightIcon from "./assets/icons/thick-arrow-right.svg?react";
import ThumbsUpIcon from "./assets/icons/thumbs-up.svg?react";
import WarningIcon from "./assets/icons/warning.svg?react";

import Arrow1Tracing from "./assets/tracings/arrow-1.svg?react";
import Arrow2Tracing from "./assets/tracings/arrow-2.svg?react";
import BookAndGlassesTracing from "./assets/tracings/book-and-glasses.svg?react";
import BulbAndNotesTracing from "./assets/tracings/bulb-and-notes.svg?react";
import BulbAndNotes2Tracing from "./assets/tracings/bulb-and-notes-2.svg?react";
import CosineTracing from "./assets/tracings/cosine.svg?react";
import Dot1Tracing from "./assets/tracings/dot-1.svg?react";
import Dot2Tracing from "./assets/tracings/dot-2.svg?react";
import Dot3Tracing from "./assets/tracings/dot-3.svg?react";
import Dot4Tracing from "./assets/tracings/dot-4.svg?react";
import GeographyTracing from "./assets/tracings/geography.svg?react";
import MathTracing from "./assets/tracings/math.svg?react";
import PencilTracing from "./assets/tracings/pencil.svg?react";
import TargetTracing from "./assets/tracings/target.svg?react";

import Card from "./components/Card";
import MobileMenu from "./components/MobileMenu";
import Popup from "./components/Popup";
import StickyNote from "./components/StickyNote";
import toast, { Toaster } from "react-hot-toast";

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
        {teacher.bio.map((paragraph, index) => (
          <p className="paragraph" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setIsScrolling(true);

    setTimeout(() => {
      setIsScrolling(false);
    }, 1500);

    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });

    setHeaderVisible(false);
  };

  useEffect(() => {
    if (isScrolling) return;

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
  }, [isScrolling]);

  const [openPopupId, setOpenPopupId] = useState<string | null>(null);

  function openPopup(id: string) {
    setOpenPopupId(id);
  }

  function closePopup() {
    setOpenPopupId(null);
  }

  const handlePhoneClick = async () => {
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
      navigator.userAgent,
    );

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      try {
        await navigator.clipboard.writeText(phoneNumber);
        toast.success("Broj mobitela kopiran u međuspremnik 📋");
      } catch (error) {
        console.error("Failed to copy phone number: ", error);
      }
    }
  };

  return (
    <>
      <Toaster />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        sections={sections}
        onNavigate={(id: string) => scrollToSection(id)}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <header className={`header ${headerVisible ? "show" : "hide"}`}>
        <a href="#section-hero">
          <LogoSmall className="logo" />
        </a>
        <nav className="navigation">
          {sections.map((section, index) => (
            <a
              className="item"
              key={index}
              href={`#${section.id}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </a>
          ))}
          <button
            className="apply-button"
            onClick={() => window.open(formsLink, "_blank")}
          >
            Prijavi se
          </button>
        </nav>
        <button className="hamburger-menu">
          <HamburgerMenuIcon onClick={() => setIsMobileMenuOpen(true)} />
        </button>
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
          text="Prelazak iz osnovne u srednju školu važna je prekretnica. Uz dobru pripremu, samopouzdanje i pravilno usmjerenje, svaki učenik može pokazati svoje znanje i postići odličan rezultat. Naš je cilj pomoći im da matematiku razumiju, zavole i – svladaju."
        />
      </section>
      <section className="why" id="section-why">
        <MathTracing className="traces" />

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
            text="gradivo sustavno i temeljito ponavljamo"
            icon={RedoIcon}
            color="pastel-blue"
          />
          <Card
            text="radimo u manjim grupama (od 5 do 12 učenika)"
            icon={PersonIcon}
            color="pink"
          />
          <Card
            text="fokus usmjeravamo na razumijevanje"
            icon={MindIcon}
            color="yellow"
          />
          <Card
            text="pružamo podršku, motivaciju i individualni pristup"
            icon={SupportIcon}
            color="pink"
          />
          <Card
            text="redovito pratimo stečeno znanje, a roditeljima dajemo povratne informacije"
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
            osnovnoškolskog kurikula potrebne za uspješno polaganje prijemnog
            ispita iz matematike. Učenike učimo:
          </p>
        </div>
        <div className="cards-wrapper">
          <CosineTracing className="cosine" />
          <div className="vertical-line" />
          <div className="card-wrapper">
            <Dot1Tracing className="dot" />
            <Card
              text="Kako organizirati rješenje korak po korak"
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
            Pripreme vode profesorice matematike iz prirodoslovno-matematičke
            gimnazije, s višegodišnjim iskustvom u nastavi te u radu s
            talentiranim učenicima i natjecateljima.
          </p>
        </div>
        <div className="teacher-cards-wrapper">
          {teachers.map((teacher) => (
            <React.Fragment key={teacher.fullName}>
              <Popup
                id={teacher.fullName}
                openId={openPopupId}
                onClose={closePopup}
                key={teacher.fullName + "-popup"}
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
                  onClick={() => openPopup(teacher.fullName)}
                >
                  Pročitaj više
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="packages" id="section-packages">
        <Popup id="package-1" openId={openPopupId} onClose={closePopup}>
          <div className="package-popup">
            <h3>Paket 1</h3>
            <h4>Polugodišnje pripreme</h4>
            <p>
              Započnite pripreme za prijemne ispite na vrijeme i bez stresa!
            </p>
            <p>
              Upisujemo <b>polugodišnje pripreme iz matematike</b> koje počinju
              <b> u veljači 2026. godine</b> i traju <b>24 tjedna</b>. Pripreme
              su namijenjene učenicima koji žele{" "}
              <b>
                postići najbolji rezultat i samouvjereno pristupiti prijemnom
                ispitu.
              </b>
            </p>
            <ul>
              <li>
                Rad u <b>malim grupama</b> omogućuje <b>individualni pristup</b>{" "}
                svakom učeniku.
              </li>
              <li>
                <b>Redovitim, kontinuiranim i praćenim radom</b> razvijamo
                sigurnost i razumijevanje, a ne samo "brzo ponavljanje".
              </li>
              <li>
                Program uključuje i <b>simulaciju ispita</b> – priliku da
                učenici provjere svoje znanje u stvarnim uvjetima.
              </li>
            </ul>
            <p>
              <b>
                Broj mjesta je ograničen – rezervirajte svoje mjesto na vrijeme!
              </b>
            </p>
          </div>
        </Popup>

        <Popup id="package-2" openId={openPopupId} onClose={closePopup}>
          <div className="package-popup">
            <h3>Paket 2</h3>
            <h4>Brze pripreme</h4>
            <p>
              Za sve učenike koji žele{" "}
              <b>učvrstiti znanje i postići vrhunski rezultat</b> organiziramo{" "}
              <b>
                intenzivne, brze pripreme u lipnju, nakon završetka nastavne
                godine.
              </b>
            </p>
            <ul>
              <li>
                Idealan izbor za učenike koji žele{" "}
                <b>
                  ponoviti gradivo, razjasniti nejasnoće i utvrditi sigurnost u
                  rješavanju zadataka.
                </b>
              </li>
              <li>
                Rad u <b>malim grupama</b> omogućuje{" "}
                <b>maksimalnu posvećenost svakom učeniku.</b>
              </li>
              <li>
                <b>Ciljano usmjerenim vježbama i simulacijom ispita</b> učenici
                stječu sigurnost i rutinu potrebnu za uspjeh na prijemnom.
              </li>
              <li>
                Program je dinamičan i usmjeren na <b>rezultat</b> – savršen
                završni korak prije ispita!
              </li>
            </ul>
            <p>
              <b>
                Broj mjesta je ograničen – rezervirajte svoje mjesto na vrijeme!
              </b>
            </p>
          </div>
        </Popup>
        <Popup id="package-3" openId={openPopupId} onClose={closePopup}>
          <div className="package-popup">
            <h3>Simulacija</h3>
            <h4>Prijemnog ispita</h4>
            <p>
              Simulacije prijemnih ispita iz matematike osmišljene su kako bi
              učenici iskusili <b>stvarne uvjete pisanja</b> prijemnog ispita.
            </p>
            <p>
              Traju <b>60 minuta</b>, a koncept zadataka sličan je onome na{" "}
              <b>pravom prijemnom ispitu</b>. Nakon pisanja, učenici dobivaju{" "}
              <b>povratnu informaciju</b> i <b>detaljnu analizu</b> ispita, uz
              objašnjenje rješenja i savjete za poboljšanje rezultata.
            </p>
          </div>
        </Popup>

        <h2 className="title">Paketi</h2>
        <div className="sticky-notes-wrapper">
          <StickyNote
            title="Paket 1"
            subtitle="Polugodišnje pripreme"
            listItems={[
              { icon: ClockIcon, text: "36 školskih sati" },
              { icon: CalendarIcon, text: "blok-sat jednom tjedno" },
              { icon: FlagIcon, text: "od veljače 2026." },
            ]}
            price={345}
            action={() => openPopup("package-1")}
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
            action={() => openPopup("package-2")}
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
            action={() => openPopup("package-3")}
          />
        </div>
        <button
          className="apply-button"
          onClick={() => window.open(formsLink, "_blank")}
        >
          Prijavi se!
          <ThickArrowRightIcon className="icon" />
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
              19 h. Za učenike koji imaju nastavu u smjenama pripreme će se
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
        <LogoBig className="logo" />

        <div className="content-wrapper">
          <div className="content-block">
            <h2 className="label">Kontakt</h2>
            <div className="items-wrapper">
              <div
                className="item"
                onClick={handlePhoneClick}
                role="button"
                tabIndex={0}
              >
                <div className="icon-div">
                  <PhoneIcon className="icon" />
                </div>

                <span className="text">{phoneNumber}</span>
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
          <nav className="content-block">
            <h2 className="label">Pročitaj opet</h2>
            <div className="items-wrapper">
              {sections.map((section, index) => (
                <div
                  className="item transparent"
                  onClick={() => scrollToSection(section.id)}
                  key={index}
                >
                  <div className="icon-div">
                    <ArrowRightIcon className="icon" />
                  </div>
                  <span className="text">{section.label}</span>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
