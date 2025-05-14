
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme was previously stored
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    // Check system preference as fallback
    if (!storedTheme) {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return systemPreference;
    }
    
    return storedTheme;
  });

  // Update the document class whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, setTheme, toggleTheme };
}
