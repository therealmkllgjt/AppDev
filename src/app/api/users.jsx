'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getLoggedInUser } from '@/lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = getLoggedInUser();
    if (!loggedInUser) {
      router.push('/login');
    } else {
      setUser(loggedInUser);
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
    </div>
  );
}