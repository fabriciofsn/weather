import React from "react";

const useFetch = (URL) => {
  const [error, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const request = async () => {
    let data;

    try {
      setLoading(true);
      const requesting = await fetch(URL);
      const json = await requesting.json();
      data = json;
    } catch (err) {
      setError(true);
      throw new Error(err);
    } finally {
      setLoading(false);
    }

    if (data.cod == 200) {
      return data;
    } else {
      return setError(true);
    }
  };
  return { request, isLoading, error, setError };
};

export default useFetch;
