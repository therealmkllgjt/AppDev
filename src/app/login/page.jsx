'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    setError(''); // Clear previous errors

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();

      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.username === password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/dashboard');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded-xl bg-white">
      {/* ... (rest of your login form code) ... */}
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}