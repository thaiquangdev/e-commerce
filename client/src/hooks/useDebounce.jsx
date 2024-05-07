import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebouneValue] = useState(value);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouneValue(value);
    }, delay);
    return () => {
      clearTimeout(time);
    };
  }, [value, delay]);
  return debounceValue;
};

export default useDebounce;
