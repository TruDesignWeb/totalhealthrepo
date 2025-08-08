import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/index.css'
import './styles/global.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./auth/authcontext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
