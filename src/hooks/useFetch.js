import React from "react";

const useFetch = (URL) => {
  const [error, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const request = async () => {
    let data;
    let fetching;

    try {
      setLoading(true);
      fetching = await fetch(URL);
      const json = await fetching.json();
      data = json;
    } catch (msgError) {
      setError(true);
    } finally {
      setLoading(false);
    }

    return data;
  };
  return { request, isLoading, error };
};

export default useFetch;
