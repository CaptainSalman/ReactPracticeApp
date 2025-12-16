import { useState, type FormEvent } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: '',
  });
  const handleSumbit = (event: FormEvent) => {
    console.log(person);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSumbit}>
      {/* div.mb-3 > label.form-label + input.form-control[type="text"] */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          id="name"
          value={person.name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input onChange={(event)=> {
          setPerson({...person, age: Number(event.target.value)})
        }} id="age" value={person.age} type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
