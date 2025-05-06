'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}> {/* Link to the user details page */}
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}