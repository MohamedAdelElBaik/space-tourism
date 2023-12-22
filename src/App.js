import "./index.css";
import logo from "./images/group-2.svg";
import Nav from "./components/Nav";
import { useState } from "react";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";

function App() {
  const [navResult, setNavResult] = useState("technology");

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
        {navResult === "crew" && <Crew />}
        {navResult === "technology" && <Technology />}
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
  let classRes = "app--content";
  if (className === "crew") classRes = "crew";
  if (className === "technology") classRes = "technology";

  return (
    <section className={`${classRes} flow`} style={{ "--flow-space": "2em" }}>
      {console.log(className)}
      {children}
    </section>
  );
}

export default App;
