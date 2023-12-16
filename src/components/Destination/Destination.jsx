import data from "../../db/data.json";
import { useState } from "react";

const navItems = data.destinations.map((item) => item.name);

function DestinationContent() {
  const [navResult, setNavResult] = useState(navItems[1]);
  const contentDate = data.destinations.find((item) => item.name === navResult);

  return (
    <>
      <Header>
        <Title />
        <Image contentDate={contentDate} />
      </Header>

      <Container>
        <Nav navResult={navResult} setNavResult={setNavResult}></Nav>
        <Content contentDate={contentDate} />
      </Container>
    </>
  );
}

function Header({ children }) {
  return (
    <div className="flex" style={{ flexDirection: "column", "--gap": "6rem" }}>
      {children}
    </div>
  );
}

function Title() {
  return (
    <h1 className="numbered-title">
      <span>01 </span>pic your destiantion
    </h1>
  );
}
function Image({ contentDate }) {
  return (
    <img
      src={contentDate.images.png}
      alt={contentDate.name}
      style={{ paddingLeft: "5rem", width: "30rem" }}
    />
  );
}

function Container({ children }) {
  return (
    <div style={{ width: "450px" }} className="grid">
      {children}
    </div>
  );
}

function Nav({ navResult, setNavResult }) {
  return (
    <nav>
      <ul
        className="lsn text-light flex underline-indicators uppercase"
        style={{ "--underline-gap": "0.5em" }}
      >
        {navItems.map((item) => (
          <li
            className={navResult === item ? "active" : ""}
            onClick={() => setNavResult(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Content({ contentDate }) {
  return (
    <article className="flow" style={{ "--flow-space": "1rem" }}>
      <h2 className="uppercase fs-800 ff-serif">{contentDate.name}</h2>
      <p className="text-light">{contentDate.description}</p>
      <hr
        style={{
          border: "2px solid hsl(var(--clr-dark)/0.75)",
          borderRadius: "10%",
        }}
      />
      <div
        className="flex uppercase"
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <h3 className="fs-200 ff-sans-cond text-light">Avg. distance</h3>
          <p className="fs-500 ff-serif">{contentDate.distance}</p>
        </div>
        <div>
          <h3 className="fs-200 ff-sans-cond text-light">Est. travel time</h3>
          <p className="fs-500 ff-serif">{contentDate.travel}</p>
        </div>
      </div>
    </article>
  );
}

export default DestinationContent;
