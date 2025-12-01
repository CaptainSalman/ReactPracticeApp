import { useState } from "react";

const ListGroup = () => {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  return (
    <>
      <h1>My List Group</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found.</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => { setSelectedIndex(index); }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
