import { useEffect, useState } from "react";
import type { User } from "./services/userService";
import userService from "./services/userService";
import { CanceledError } from "./services/api-client";
import useUser from "./hooks/useUsers";


const App = () => {
  const {users, error, isloading} = useUser();

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
