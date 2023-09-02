import React, { useState } from "react";
import { GrSecure } from "react-icons/gr";
import { Button } from "../styles/Buttons";
import { Input } from "../styles/Inputs";
import { authLogin } from "../services/firebase";

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoad] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      await authLogin(email, password);
      console.log('Logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="App">
      <main style={{ height: '100vh', justifyContent: 'center' }}>
        <form onSubmit={handleLogin}>
          <h1><GrSecure /> Painel de edição</h1>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" disabled={!email || !password}>
              {loading ? 'Carregando...' : 'Entrar'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
