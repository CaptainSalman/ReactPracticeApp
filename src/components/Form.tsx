import { use, useRef, type FormEvent } from "react";

const Form = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = {
        name: '', age : 0
    }
    const handleSumbit = (event: FormEvent) => {
        event.preventDefault();
        person.name = nameRef.current?.value ?? '';     
        person.age = Number(ageRef.current?.value ?? '0');  
        console.log(person); 
    }
  return (
    <form onSubmit={handleSumbit}> 
      {/* div.mb-3 > label.form-label + input.form-control[type="text"] */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;
