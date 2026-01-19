import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

interface User {
  id: number;
  name: string;
}
const App = () => {
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  // implementation with async or await
  useEffect(() => {
    // Fetch users from an API or other source
    const fetchUser = async () => {
      try{
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers",
        );
        setUsers(res.data);
      }
      catch(err){
        setError((err as AxiosError).message);
      }
    };

    fetchUser();
  }, []);

  // useEffect(() => {
  //   // Fetch users from an API or other source

  //   // get -> promise -> res / err
  //   axios
  //     .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // }, []);

  return (
    <>
      {error && <p className="text-danger">Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
