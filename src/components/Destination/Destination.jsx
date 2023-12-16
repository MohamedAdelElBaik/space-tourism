import data from "../../db/data.json";
import { useState } from "react";

const navItems = data.destinations.map((item) => item.name);

function Destination() {
  const [navResult, setNavResult] = useState(navItems[0]);
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
  return <section className="destination--head">{children}</section>;
}

function Title() {
  return (
    <h1 className="title numbered-title fs-500">
      <span>01 </span>pic your destiantion
    </h1>
  );
}
function Image({ contentDate }) {
  return (
    <div className="image-container">
      <img src={contentDate.images.png} alt={contentDate.name} />
    </div>
  );
}

function Container({ children }) {
  return <div className="destination--content grid">{children}</div>;
}

function Nav({ navResult, setNavResult }) {
  return (
    <nav>
      <ul
        className="destination--nav lsn text-light flex underline-indicators uppercase"
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
    <article className="flow" style={{ "--flow-space": "2rem" }}>
      <h2 className="uppercase fs-800 ff-serif">{contentDate.name}</h2>
      <p className="text-box text-light">{contentDate.description}</p>
      <hr
        style={{
          border: "1px solid hsl(var(--clr-light)/0.25)",
          borderRadius: "10%",
        }}
      />
      <div className="details uppercase">
        <div>
          <h3 className="fs-200 ff-sans-cond text-light">Avg. distance</h3>
          <p className="fs-500 ff-serif" style={{ fontSize: "1.75em" }}>
            {contentDate.distance}
          </p>
        </div>
        <div>
          <h3 className="fs-200 ff-sans-cond text-light">Est. travel time</h3>
          <p className="ff-serif" style={{ fontSize: "1.75em" }}>
            {contentDate.travel}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Destination;
