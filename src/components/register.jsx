import { useState } from 'react';
import axios from 'axios';
import '../styles/register.css'

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
      });
      setMsg(res.data.message);
      setEmail('');
      setPassword('');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2 className = "register-title">Create an Account</h2>
      <form className = "register-form" onSubmit={handleRegister}>
        <input
          className = "register-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className= "register-password"
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />

        <button type="submit">Register</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
