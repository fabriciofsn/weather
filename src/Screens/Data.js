import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import spin from "../Loader/loader.svg";
import {
  DivWraper,
  DivInfos,
  H2Title,
  DivColorzied,
  DivUseful,
  DivSpin,
} from "../styles/Data";
import Error from "./Error";
import Maps from "./Maps";
import ModalWarning from "./modalWarning";

const Data = ({ value }) => {
  const [data, setData] = React.useState("");
  const [warning, setWarning] = React.useState(true);

  const { request, isLoading, error, setError } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value.inputValue}&appid=a448ce24c0332de60c32afff7f64718a&lang=pt`
  );
  useEffect(() => {
    request().then((response) => {
      setData(response);
    });
  }, [value]);

  const conveterToCelsius = (value) => {
    return (value - 273.15).toFixed(0);
  };

  return (
    <div>
      <DivSpin>{isLoading && <img src={spin} alt="loader" />}</DivSpin>
      {warning && <ModalWarning warning={setWarning} />}
      {error && <Error showError={setError} />}
      <DivWraper>
        <DivInfos>
          <H2Title>Clima em: {data && data.name}</H2Title>
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
        <DivInfos>{<Maps data={data} />}</DivInfos>
      </DivWraper>
    </div>
  );
};

export default Data;
