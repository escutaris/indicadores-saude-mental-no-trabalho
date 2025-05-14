
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for saved theme preference or use OS preference
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    return savedTheme;
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply theme class before render to prevent flash
document.documentElement.classList.add(getInitialTheme());

createRoot(document.getElementById("root")!).render(<App />);
