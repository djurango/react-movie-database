import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setTimeout(() => {
          setData(json);
        }, 1000);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, [url]);

  return { data, error };
};
