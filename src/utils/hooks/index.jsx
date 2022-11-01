import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading };
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}
