import { useEffect, useState } from "react";
import type { User } from "../services/userService";
import userService from "../services/userService";
import { CanceledError } from "../services/api-client";

const useUser = () => {
    const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isloading, setIsLoading] = useState(false); 

  useEffect(() => {
    setIsLoading(true);
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

  return { users, error, isloading };
}

export default useUser;