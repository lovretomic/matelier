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
          PRIPREME ZA PRIJEMNE ISPITE IZ MATEMATIKE
        </h1>
      </div>
      <div className="footer-content">
        <div className="footer-contacts">
          <h2>kontakt</h2>
          <div className="icon-div">
            <PhoneIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
