import React, { createContext, useState } from 'react';

// Global state container
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [name, setName] = useState('Juan Dela Cruz');
  const [darkMode, setDarkMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Simulates saving: shows "Saving..." for 1 second, then updates the shared data
  const updateProfile = (newName, newDarkMode) => {
    if (newName.trim() === '') {
      setError('Name cannot be empty.');
      return;
    }
    setError('');
    setSaving(true);
    setTimeout(() => {
      setName(newName.trim());
      setDarkMode(newDarkMode);
      setSaving(false);
    }, 1000);
  };

  return (
    <AppContext.Provider value={{ name, darkMode, saving, error, updateProfile }}>
      {children}
    </AppContext.Provider>
  );
}