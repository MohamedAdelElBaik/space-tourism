import "./index.css";
import logo from "./images/group-2.svg";
import Nav from "./components/Nav";
import { useState } from "react";
// import HomeContent from "./components/HomeContent";

function App() {
  const [navResult, setNavResult] = useState("home");

  return (
    <div className="app">
      <Header>
        <Logo />
        <Nav setNavResult={setNavResult} />
      </Header>
      {/* {navResult === "home" && <HomeContent />} */}
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

export default App;
