import React, {createContext, useContext, useEffect, useState, useCallback} from 'react';

const ThemeContext = createContext({ theme: 'light', toggle: () => {}, set: () => {} });

export const ThemeProvider = ({ children }) => {
  const getInitial = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark'; 
};


  const [theme, setTheme] = useState(getInitial);

  const apply = useCallback((t) => {
    const root = document.documentElement;
    if (t === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', t);
  }, []);

  useEffect(() => { apply(theme); }, [theme, apply]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return (
    <ThemeContext.Provider value={{ theme, toggle, set: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
