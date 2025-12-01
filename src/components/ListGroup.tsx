import React from "react";
const ListGroup = () => {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  items = [];

  return (
    <>
      <h1>My List Group</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found.</p>}
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
