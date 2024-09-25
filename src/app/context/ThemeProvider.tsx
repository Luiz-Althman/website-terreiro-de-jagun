'use client';

import React, { createContext, useContext, useState } from 'react';

// Criar o contexto
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
    open: boolean;
    setOpen: (value: boolean) => void;
}

// Criar um hook personalizado para acessar o contexto mais facilmente
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light');
    const [open, setOpen] = useState<boolean>(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, open, setOpen }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};
