function Nav({ setNavResult }) {
  const listItemContent = [
    ["0", "home"],
    ["1", "destination"],
    ["2", "crew"],
    ["3", "technology"],
  ];

  return (
    <nav>
      <List>
        {listItemContent.map((item) => (
          <ListItem num={item[0]} setNavResult={setNavResult}>
            {item[1]}
          </ListItem>
        ))}
      </List>
    </nav>
  );
}

function List({ children }) {
  return (
    <ul
      className="primary-navigation underline-indicators uppercase lsn flex"
      style={{
        backgroundColor: "hsl(var(--clr-white)/0.08)",
        "--gap": "4rem",
      }}
    >
      {children}
    </ul>
  );
}

function ListItem({ children, num, setNavResult }) {
  return (
    <li onClick={() => setNavResult(children)}>
      <span className="mar-r">0{num}</span>
      {children}
    </li>
  );
}

export default Nav;
