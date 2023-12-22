import PageTitle from "../PageTitle";
import data from "../../db/data.json";
import { useState } from "react";

function Technology() {
  const [numNavRes, setNumNavRes] = useState(0);
  const dataTechnology = data.technology;

  return (
    <>
      <PageTitle num={3} className={"technology--title"}>
        space launch 101
      </PageTitle>
      <NumberNav
        data={dataTechnology}
        numNavRes={numNavRes}
        setNumNavRes={setNumNavRes}
      />
      <Content data={dataTechnology[numNavRes]} />

      <Image data={dataTechnology[numNavRes]} />
    </>
  );
}

function NumberNav({ data, numNavRes, setNumNavRes }) {
  return (
    <section className={`technology--nav number-indicator`}>
      {data.map((__, index) => (
        <button
          className={`${numNavRes === index ? "active" : ""} pointer`}
          onClick={() => setNumNavRes(index)}
        >
          {index + 1}
        </button>
      ))}
    </section>
  );
}

function Content({ data }) {
  return (
    <section className="technology--content ">
      <h2 className="uppercase fs-300 ff-sana-cond text-light letter-spacing-2">
        THE TERMINOLOGY…
      </h2>
      <h3 className="name uppercase ff-serif ">{data.name}</h3>
      <p className="fs-400 text-light">{data.description}</p>
    </section>
  );
}

function Image({ data }) {
  return (
    <picture className="technology--image">
      <source media="(max-width: 50rem)" srcSet={data.images.landscape} />
      <img src={data.images.portrait} alt={data.name} />
    </picture>
  );
}

export default Technology;
