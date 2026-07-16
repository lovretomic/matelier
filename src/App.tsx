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
      <header
        className={`header ${headerVisible ? "show" : "hide"}`}
        role="banner"
      >
        <a href="#section-hero" aria-label="Povratak na vrh stranice">
          <LogoSmall className="logo" />
        </a>
        <nav className="navigation" role="navigation">
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
        <button className="hamburger-menu" aria-label="Izbornik">
          <HamburgerMenuIcon onClick={() => setIsMobileMenuOpen(true)} />
        </button>
      </header>
      <main role="main">
        <section className="hero" ref={heroRef} id="section-hero">
          <div className="landing">
            <LogoBig className="icon" />
            <h1 className="title">
              Sigurnijim korakom <br /> u srednju školu <br /> i na fakultet
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
          <Card
            variant="large"
            icon={(props) => (
              <div style={{ transform: "translateX(1px) translateY(3px)" }}>
                <FlagIcon {...props} />
              </div>
            )}
            color="yellow"
            title="Pripreme za državnu maturu iz matematike – A razina"
            text="Uspjeh na državnoj maturi ne ovisi samo o znanju, već i o dobroj pripremi. Bez obzira ciljate li tehnički, prirodoslovni ili neki drugi fakultet, dobar rezultat na A razini državne mature iz matematike otvara vrata željenom fakultetu. Matematika na državnoj maturi traži više od pamćenja formula – traži razumijevanje, logičko razmišljanje i sigurnost u rješavanju zadataka."
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
              Pripreme za prijemni ispit iz matematike obuhvaćaju sve ključne
              sadržaje iz osnovoškolskog kurikula potrebne za uspješno polaganje
              prijemnog ispita iz matematike za prirodoslovne gimnazije.
            </p>
            <p className="description">
              Pripreme za A razinu državne mature iz matematike obuhvaćaju sve
              nastavne cjeline obuhvaćene aktualnim ispitnim katalogom za A
              razinu mature.
            </p>
            <p className="description">
              Sustavno prolazimo kroz gradivo rješavajući razne tipove zadataka
              kao i one s prethodnih prijemnih ispita/državnih matura. Kroz
              redovite kratke provjere znanja i domaće zadaće kontinuirano
              pratimo rad i napredak učenika te ih učimo kako učinkovito
              pristupiti ispitu – s manje stresa i više sigurnosti.
            </p>
            <p className="description">Učenike učimo:</p>
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
                sigurnost koja ostaje i nakon naših priprema te otvara vrata
                željenoj budućnosti.
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
              <h3>PRIPREME ZA PRIJEMNE ISPITE U GIMNAZIJAMA</h3>
              <p>
                Upisujemo polugodišnje pripreme iz matematike koje počinju u
                siječnju 2027. godine i traju do sredine lipnja 2027. Pripreme
                su namijenjene učenicima koji žele postići najbolji rezultat i
                samouvjereno pristupiti prijemnom ispitu kroz polagano i
                temeljito usvajanje gradiva.{" "}
              </p>
              <p>
                <b>
                  Dosadašnje iskustvo pokazalo je da upravo ovakav oblik
                  priprema zaslužan za 100% upis naših dosadašnjih polaznika u
                  željenu gimnaziju!
                </b>
              </p>
              <p>Osim toga, naglašavamo da:</p>
              <ul>
                <li>
                  Radom u malim grupama (5-12 učenika) omogućujemo individualni
                  pristup svakom učeniku
                </li>
                <li>
                  Redovitim i praćenim radom kroz kratke provjere znanja
                  kontinuirano pratimo napredak učenika i razvijamo sigurnost i
                  razumijevanje gradiva
                </li>
                <li>
                  Program uključuje i simulaciju prijemnog ispita - priliku da
                  učenici provjere svoje znanje u stvarnim uvjetima (60 min
                  pisanja ispita s dozvoljenim priborom) te analizu napisanog
                </li>
              </ul>
              <p>
                Broj mjesta je ograničen – rezervirajte svoje mjesto i započnite
                pripreme na vrijeme i bez stresa!
              </p>
            </div>
          </Popup>
          <Popup id="package-2" openId={openPopupId} onClose={closePopup}>
            <div className="package-popup">
              <h3>PRIPREME ZA DRŽAVNU MATURU - A RAZINA</h3>
              <p>
                Upisujemo duge pripreme iz matematike koje počinju 12. listopada
                2027. godine i traju sve do kraja lipnja kada je očekivani
                ispita državne mature iz matematike. Pripreme su namijenjene
                maturantima koji žele postići najbolji rezultat i samouvjereno
                pristupiti prijemnom ispitu kroz polagano i temeljito
                ponavljanje gradiva.{" "}
                <b>
                  Dosadašnje iskustvo pokazalo je da upravo ovakav oblik
                  priprema zaslužan za 100% prolaznost naših maturanata na A
                  razini i to sa visokim prosjekom ocjena!
                </b>
              </p>
              <p>Osim toga, naglašavamo da:</p>
              <ul>
                <li>
                  Radom u malim grupama (5-12 učenika) omogućujemo individualni
                  pristup svakom učeniku
                </li>
                <li>
                  Redovitim i praćenim radom kroz kratke provjere znanja
                  kontinuirano pratimo napredak učenika i razvijamo sigurnost te
                  razumijevanje gradiva
                </li>
                <li>
                  Program uključuje i simulaciju ispita državne mature – priliku
                  da učenici provjere svoje znanje u stvarnim uvjetima (180 min
                  pisanja ispita sa dozvoljenim priborom) te analizu napisanog
                </li>
              </ul>
              <p>
                Broj mjesta je ograničen – rezervirajte svoje mjesto i započnite
                pripreme na vrijeme i bez stresa!
              </p>
            </div>
          </Popup>
          <Popup id="package-3" openId={openPopupId} onClose={closePopup}>
            <div className="package-popup">
              <h3>Simulacija ispita</h3>
              <p>
                Simulacije prijemnih ispita/državne mature iz matematike
                osmišljene su kako bi učenici iskusili stvarne uvjete pisanja
                ispita. Koncept zadataka sličan je po težini onome na pravom
                ispitu. Nakon pisanja, učenici dobivaju povratnu informaciju o
                svom rezultatu te detaljnu analizu ispita, uz objašnjena
                rješenja i savjete za eventualno poboljšanje rezultata.
              </p>
              <p>
                <b>Prijemni ispit iz matematike</b> za prirodoslovno-matematičke
                gimnazije piše se 60 minuta te je dozvoljeno korištenje samo
                kemijske olovke i jednog ravnala ili trokuta. Ispit se sastoji
                od 22 zadatka od kojih je 13 zadataka višestrukog izbora, a 9
                zadataka kratkog odgovora. Na ispitu je moguće maksimalno
                ostvariti 10 bodova (4 zadatka po 0.25 bodova i 18 zadataka po
                0.5 bodova). Postupak se nigdje ne boduje te je iznimno važno
                biti točan i siguran u svoje rješenje.
              </p>
              <p>
                <b>Ispit državne mature iz matematike na A razini</b> piše se
                180 minuta te je dozvoljeno korištenje kemijske olovke, jednog
                ravnala ili trokuta, znanstvenog kalkulatora te službeno
                objavljenih formula. Sastoji se od tri dijela: zadatci
                višestrukog izbora, zadatci kratkog odgovora te zadatci
                produženog odgovora. Na ispitu je moguće maksimalno ostvariti 60
                bodova. Zadnja skupina zadataka, popularno zvana „zadatci s
                postupkom“ često predstavlja najveći problem učenicima iz više
                razloga. Vrednovanje postupka rješavanja, umor koji se do tog
                trenutka već osjeti, težina „zadnjeg“ zadatka koji često
                iziskuje modeliranje i spajanje znanja iz više nastavnih
                sadržaja... Sve su to izazovi s kojima se na pripremama vješto
                suočavamo i učimo kako ih premostiti, a pritom biti precizni u
                onim početnim zadatcima koji iziskuju isključivo točno rješenje.
              </p>
            </div>
          </Popup>

          <h2 className="title">Programi</h2>
          <div className="sticky-notes-wrapper">
            <StickyNote
              title="PRIPREME ZA PRIJEMNE ISPITE U GIMNAZIJAMA"
              listItems={[
                { icon: ClockIcon, text: "40 školskih sati" },
                {
                  icon: CalendarIcon,
                  text: "blok sat jednom tjedno radnim danom",
                },
                { icon: FlagIcon, text: "od siječnja 2027." },
              ]}
              price={360}
              action={() => openPopup("package-1")}
            />

            <StickyNote
              title="PRIPREME ZA DRŽAVNU MATURU - A RAZINA"
              listItems={[
                { icon: ClockIcon, text: "70 školskih sati" },
                {
                  icon: CalendarIcon,
                  text: "blok sat jednom tjedno radnim danom",
                },
                { icon: FlagIcon, text: "od 12. listopada 2026." },
              ]}
              price={580}
              action={() => openPopup("package-2")}
            />

            <StickyNote
              title="SIMULACIJA ISPITA"
              listItems={[
                {
                  icon: FlagIcon,
                  text: "prijemni ispit za gimnazije (4 školska sata – 20€)",
                },
                {
                  icon: FlagIcon,
                  text: "ispit A razine državne mature (6 školskih sati – 30€)",
                },
                { icon: CalendarIcon, text: "od lipnja 2027." },
              ]}
              price={"20-30"}
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
              title="Karta"
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
                <span className="secondary">
                  {" "}
                  (OŠ Josipa Jurja Strossmayera)
                </span>
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
                Pripreme se drže jednom tjedno, radnim danom, po dva školska
                sata, ujutro ili popodne. Grupe se slažu prema turnusima u školi
                koje imaju učenici.
              </p>
              <p className="paragraph">
                Točni termini bit će objavljeni uskoro.
              </p>
            </div>
            <GeographyTracing className="tracing" />
          </div>
        </section>
      </main>
      <footer className="footer" role="contentinfo">
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
                aria-label="Broj telefona"
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
                role="button"
                aria-label="Instagram"
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
          <nav className="content-block" role="navigation">
            <h2 className="label">Pročitaj opet</h2>
            <div className="items-wrapper">
              {sections.map((section, index) => (
                <div
                  className="item transparent"
                  onClick={() => scrollToSection(section.id)}
                  key={index}
                  role="button"
                  aria-label={section.label}
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
