import { useEffect, useState } from "react";
import { fetchData } from "./Utils/Api";

interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setLoading(true);
        const data = await fetchData();
        setUsers(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndHandleLoading();

    return () => {};
  }, []);

  return (
    <div>
      <h1>Render of Users list</h1>
      <hr />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ul>
        {users.map((user: UserInterface) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
