import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: 'San Francisco',
      state: 'CA'
    }
  })

  const handleClick = () => {
    setCustomer({
      ...customer, 
      address: {
        ...customer.address, 
        city: 'Los Angeles'
      }
    });
  }

  return (
    <div>
      <Button buttonLabel="Click me" onClick={handleClick}/>
      <h2>{customer.address.city}</h2>
    </div>
  );
};

export default App;