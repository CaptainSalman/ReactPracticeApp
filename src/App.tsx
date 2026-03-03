import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import axios, { CanceledError } from "axios";
import apiClient from "./services/api-client";

interface User {
  id: number;
  name: string;
}
const App = () => {
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isloading, setIsLoading] = useState(false);

  // implementation with async or await
  // useEffect(() => {
  //   // Fetch users from an API or other source
  //   const fetchUser = async () => {
  //     try{
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/xusers",
  //       );
  //       setUsers(res.data);
  //     }
  //     catch(err){
  //       setError((err as AxiosError).message);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  useEffect(() => {
    // Fetch users from an API or other source
    const controller = new AbortController();
    setIsLoading(true);
    // get -> promise -> res / err
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if(err instanceof CanceledError){
          return;
        }
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
      return () => {
        controller.abort();
      };
  }, []);

  return (
    <>
      {error && <p className="text-danger">Error: {error}</p>}
      {isloading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
