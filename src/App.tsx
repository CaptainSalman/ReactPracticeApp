import { useEffect, useState } from "react";
import type { User } from "./services/userService";
import userService from "./services/userService";
import { CanceledError } from "./services/api-client";


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
    setIsLoading(true);
    // get -> promise -> res / err
    const { request, cancel } = userService.getAll<User>();
    request
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
        cancel();
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
