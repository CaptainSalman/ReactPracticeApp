import { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [category, setCategory] = useState<string>("");
  return (
    <div>
      <select className="form-select" onChange={(event) => {setCategory(event.target.value)}}>
        <option></option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
      <ProductList category={category} />
    </div>
  )
};

export default App;