import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) alert('Erro no login: ' + error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (user)
    return (
      <main className="p-4">
        <h1>Olá, {user.email}</h1>
        <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Logout</button>
      </main>
    );

  return (
    <main className="p-4">
      <h1>Bem-vindo ao Kori V2</h1>
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Login com Google</button>
    </main>
  );
}
