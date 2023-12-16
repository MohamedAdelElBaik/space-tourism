import "./index.css";
import logo from "./images/group-2.svg";
import Nav from "./components/Nav";
import { useState } from "react";
import HomeContent from "./components/HomeContent";
import DestinationContent from "./components/Destination/Destination";

function App() {
  const [navResult, setNavResult] = useState("home");

  return (
    <div className="app">
      <Header>
        <Logo />
        <Nav navResult={navResult} setNavResult={setNavResult} />
      </Header>
      <Section>
        {navResult === "home" && <HomeContent />}
        {navResult === "destination" && <DestinationContent />}
        {navResult === "crew" && <h1>Not Yet</h1>}
        {navResult === "technology" && <h1>Not Yet</h1>}
      </Section>
    </div>
  );
}

function Header({ children }) {
  return (
    <header
      className="app-header flex"
      style={{ justifyContent: "space-between", alignItems: "center" }}
    >
      {children}
    </header>
  );
}

function Logo() {
  return (
    <div>
      <img className="nav--logo" src={logo} alt="logo"></img>
    </div>
  );
}

function Section({ children }) {
  return <section className="page--content">{children}</section>;
}

export default App;
