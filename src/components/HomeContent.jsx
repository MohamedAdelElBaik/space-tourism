function HomeContent() {
  return (
    <>
      <ArticleContent>
        <Header />
        <Paragraph />
      </ArticleContent>
      <ExploreButton />
    </>
  );
}

function ArticleContent({ children }) {
  return (
    <article
      className="flex text-light"
      style={{
        flexDirection: "column",
        width: "30rem",
      }}
    >
      {children}
    </article>
  );
}
function Header() {
  return (
    <h1 className="fs-500 ff-sans-cond uppercase letter-spacing-1">
      so, you want to travel to <br />
      <span className="fs-900 ff-serif text-white">space</span>
    </h1>
  );
}
function Paragraph() {
  return (
    <p className="letter-spacing-3" style={{ lineHeight: "2rem" }}>
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>
  );
}

function ExploreButton() {
  return (
    <div>
      <button className="large-button uppercase" style={{ width: "250px" }}>
        explore
      </button>
    </div>
  );
}

export default HomeContent;
