import "./App.scss";
import LogoSmall from "./assets/icons/logo-small.svg?react";
import PhoneIcon from "./assets/icons/phone.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";

function App() {
  return (
    <footer className="footer">
      <div className="footer-title">
        <LogoSmall className="logo" />
        <h1 className="footer-title-text">
          PRIPREME ZA PRIJEMNE <br /> ISPITE IZ MATEMATIKE
        </h1>
      </div>
      <div className="footer-content">
        <div className="footer-contacts">
          <h2 className="footer-h2">KONTAKT</h2>
          <div className="contact-items">
            <div className="contact">
              <div className="icon-div">
                <PhoneIcon className="contact-icon" />
              </div>
              <span className="footer-text">098 923 4897</span>
            </div>

            <div className="contact">
              <div className="icon-div">
                <EmailIcon className="contact-icon" />
              </div>
              <span className="footer-text">matelierpripreme@gmail.com</span>
            </div>

            <div className="contact">
              <div className="icon-div">
                <InstagramIcon className="contact-icon" />
              </div>
              <span className="footer-text">@matelier_pripreme</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
