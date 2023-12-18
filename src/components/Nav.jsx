import { useState } from "react";

function Nav({ navResult, setNavResult }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const listItemContent = [
    ["0", "home"],
    ["1", "destination"],
    ["2", "crew"],
    ["3", "technology"],
  ];

  return (
    <nav className="nav-bar-container ">
      <NavIcon isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <List isNavOpen={isNavOpen}>
        {listItemContent.map((item) => (
          <ListItem
            className={navResult === item[1] ? "active" : ""}
            num={item[0]}
            setNavResult={setNavResult}
            setIsNavOpen={setIsNavOpen}
          >
            {item[1]}
          </ListItem>
        ))}
      </List>
    </nav>
  );
}

function NavIcon({ setIsNavOpen, isNavOpen }) {
  return (
    <div
      className={`nav-icon ${isNavOpen ? "active" : ""}`}
      onClick={() => setIsNavOpen((res) => !res)}
    >
      <img
        src="./assets/home/close-icon.png"
        alt="close"
        className="dis-none"
      />
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function List({ children, isNavOpen }) {
  return (
    <ul
      className={`nav-bar ${
        isNavOpen ? "active" : ""
      } underline-indicators mob pointer uppercase lsn fs-400`}
    >
      {children}
    </ul>
  );
}

function ListItem({ children, num, setNavResult, className, setIsNavOpen }) {
  return (
    <li
      className={className}
      onClick={() => {
        setNavResult(children);
        setIsNavOpen((res) => !res);
      }}
    >
      <span className="nav-bar--item--num mar-r">0{num}</span>
      {children}
    </li>
  );
}

export default Nav;
