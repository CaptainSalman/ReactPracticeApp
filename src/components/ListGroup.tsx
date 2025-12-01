import React from "react";
import { MouseEvent } from "react";
const ListGroup = () => {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>My List Group</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found.</p>}
        {items.map((item, index) => (
          <li
            key={item}
            className="list-group-item"
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
