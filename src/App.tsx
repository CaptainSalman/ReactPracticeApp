import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 3
  })

  const handleClick = () => {
    setDrink({...drink, price: 9});
  }

  return (
    <div>
      <Button buttonLabel="Click me" onClick={handleClick}/>
      <h2>{drink.price}</h2>
    </div>
  );
};

export default App;