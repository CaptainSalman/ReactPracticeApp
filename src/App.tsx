import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
const App = () => {
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch users from an API or other source
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

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
