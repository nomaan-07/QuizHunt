import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error("Error reading from local storage:", error.message);
      return initialState;
    }
  });

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [value, key],
  );

  return [value, setValue];
}
