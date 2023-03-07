import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import spin from "../Loader/loader.svg";
import {
  DivWraper,
  DivInfos,
  H2Title,
  DivColorzied,
  DivUseful,
} from "../styles/Data";

const Data = ({ value }) => {
  const [data, setData] = React.useState("");
  const { request, isLoading } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value.inputValue}&appid=a448ce24c0332de60c32afff7f64718a&lang=pt`
  );

  useEffect(() => {
    request().then((response) => {
      setData(response);
    });
  }, [data]);

  const conveterToCelsius = (value) => {
    return (value - 273.15).toFixed(0);
  };

  return (
    <DivWraper>
      <DivInfos>
        <H2Title>{data && data.name}</H2Title>
        <DivColorzied>
          <span>
            Temp: {""}
            <p>{data && conveterToCelsius(data.main.temp)}º</p>
          </span>
          <span>
            Sensação:
            <p>{data && conveterToCelsius(data.main.feels_like)}º</p>
          </span>
          <span>
            Temp Max:
            <p>{data && conveterToCelsius(data.main.temp_max)}º</p>
          </span>
          <span>
            Temp Min:
            <p>{data && conveterToCelsius(data.main.temp_min)}º</p>
          </span>
        </DivColorzied>
        <DivUseful>
          <span>
            Clima:
            {data &&
              data.weather.map(({ description }) => {
                return <p key={description}>{description}</p>;
              })}
          </span>
        </DivUseful>
      </DivInfos>
    </DivWraper>
  );
};

export default Data;
