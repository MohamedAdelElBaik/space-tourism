import "./index.css";
import logo from "./images/group-2.svg";
import Nav from "./components/Nav";
import { useState } from "react";
import Home from "./components/Home";
import Destination from "./components/Destination/Destination";

function App() {
  const [navResult, setNavResult] = useState("destination");

  let device = "desktop";
  // const windowWidth = Number(window.innerWidth);
  // let device = "mobile";
  // if (windowWidth >= 600) device = "tablet";
  // if (windowWidth >= 800) device = "desktop";

  const style = {
    backgroundImage: `url(./assets/${navResult}/${navResult}-background-${device}.svg)`,
  };

  return (
    <div className="app" style={style}>
      <Header>
        <Logo />
        <Nav navResult={navResult} setNavResult={setNavResult} />
      </Header>
      <Section className={navResult}>
        {navResult === "home" && <Home />}
        {navResult === "destination" && <Destination />}
        {navResult === "crew" && <h1>Not Yet</h1>}
        {navResult === "technology" && <h1>Not Yet</h1>}
      </Section>
    </div>
  );
}

function Header({ children }) {
  return <header className="app-header">{children}</header>;
}

function Logo() {
  return (
    <div>
      <img className="app--header--logo" src={logo} alt="logo"></img>
    </div>
  );
}

function Section({ children, className }) {
  return (
    <section
      className={`app--content ${className} flow`}
      style={{ "--flow-space": "2em" }}
    >
      {children}
    </section>
  );
}

export default App;
