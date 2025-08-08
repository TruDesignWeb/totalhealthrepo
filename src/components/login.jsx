import { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      {/* <h2 className = "login-title">Login</h2> */}
      <form className = "login-form" onSubmit={handleLogin}>
        <input 
          className = "email-input"
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          className="password-input"
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}