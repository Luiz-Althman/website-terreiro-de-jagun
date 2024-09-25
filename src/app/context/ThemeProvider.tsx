'use client';

import React, { createContext, useContext, useState } from 'react';

// Criar o contexto
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
    open: false,
    setOpen: (value: boolean) => {},
});

// Criar um hook personalizado para acessar o contexto mais facilmente
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light');
    const [open, setOpen] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, open, setOpen }}>
            {children}
        </ThemeContext.Provider>
    );
};
