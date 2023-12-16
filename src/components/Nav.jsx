function Nav({ navResult, setNavResult }) {
  const listItemContent = [
    ["0", "home"],
    ["1", "destination"],
    ["2", "crew"],
    ["3", "technology"],
  ];

  return (
    <nav className="nav-bar-container fs--300">
      <List>
        {listItemContent.map((item) => (
          <ListItem
            className={navResult === item[1] ? "active" : ""}
            num={item[0]}
            setNavResult={setNavResult}
          >
            {item[1]}
          </ListItem>
        ))}
      </List>
    </nav>
  );
}

function List({ children }) {
  return (
    <ul className="nav-bar underline-indicators uppercase lsn">{children}</ul>
  );
}

function ListItem({ children, num, setNavResult, className }) {
  return (
    <li className={className} onClick={() => setNavResult(children)}>
      <span className="nav-bar--item--num mar-r">0{num}</span>
      {children}
    </li>
  );
}

export default Nav;
