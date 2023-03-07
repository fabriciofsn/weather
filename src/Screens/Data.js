import React from "react";
import useFetch from "../hooks/useFetch";

const Data = () => {
  const [response, setResponse] = React.useState("");
  const { request } = useFetch(
    "https://api.openweathermap.org/data/2.5/weather?q=aracaju&appid=a448ce24c0332de60c32afff7f64718a&lang=pt"
  );

  React.useEffect(() => {
    request().then((data) => {
      setResponse(data);
    });
  }, []);

  return <div></div>;
};

export default Data;
