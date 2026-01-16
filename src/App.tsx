import "./App.scss";
import LogoSmall from "./assets/icons/logo-small.svg?react";

function App() {
  return (
    <footer className="footer">
      <div className="footer-title">
        <LogoSmall className="logo" />
        <h1 className="title-text">
          PRIPREME ZA PRIJEMNE ISPITE IZ MATEMATIKE
        </h1>
      </div>
    </footer>
  );
}

export default App;
