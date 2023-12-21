import PageTitle from "../PageTitle";
import data from "../../db/data.json";
import { useState } from "react";

const crewData = data.crew;

function Crew() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <PageTitle className={"crew--title"} num={2}>
        Meet your crew
      </PageTitle>
      <Img selectedIndex={selectedIndex} />
      <NavDoted
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Content selectedIndex={selectedIndex} />
    </>
  );
}

function Img({ selectedIndex }) {
  return (
    <div className="crew--image flex-column" style={{ "--gap": "0em" }}>
      <img
        src={crewData[selectedIndex].images.png}
        alt={crewData[selectedIndex].name}
      />
      <hr />
    </div>
  );
}

function NavDoted({ selectedIndex, setSelectedIndex }) {
  return (
    <div
      className="crew--dots dot-indicators flex"
      style={{
        "--dot-width": "0.9rem",
        "gap": "1em",
        "justifyContent": "center",
      }}
    >
      {crewData.map((__, index) => (
        <button
          className={`${selectedIndex === index ? "active" : ""}`}
          onClick={() => setSelectedIndex(index)}
        ></button>
      ))}
    </div>
  );
}

function Content({ selectedIndex }) {
  return (
    <section className="crew--content flex-column">
      <h3
        className="ff-serif fs-500 uppercase"
        style={{ color: "hsl(var(--clr-white) / 0.5)" }}
      >
        {crewData[selectedIndex].role}
      </h3>
      <h4 className="ff-serif fs-700 text-white uppercase">
        {" "}
        {crewData[selectedIndex].name}
      </h4>
      <p className="fs-400 text-light">{crewData[selectedIndex].bio}</p>
    </section>
  );
}
export default Crew;
