import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from 'axios';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    console.log('fetching users');
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return {
    users,
    error,
    isloading,
    setUsers,
    setError,
  };
};

export default useUsers;
