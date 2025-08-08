import { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
import { useAuth } from "../auth/authcontext"; // import the hook

export default function Login() {
  const { login } = useAuth(); // get the login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });

      // Save JWT token to context + localStorage
      login(res.data.token);

      alert("Login successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  }

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