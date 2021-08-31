import { useState } from "react";
// Guardando información de los likes en el localStorage
export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setLocalStorage];
}