import React from "react";
import useFetch from "./useFetch";

export const GlobalContext = React.createContext();

export const GlobalData = ({ children }) => {
  const [response, setResponse] = React.useState({});
  const [data, setData] = React.useState({
    latitude: null,
    logintude: null,
  });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setData({
        latitude: position.coords.latitude,
        logintude: position.coords.longitude,
      });
    });
  }, []);

  const { request } = useFetch(`
  https://api.openweathermap.org/data/2.5/forecast?lat=${data.latitude}&lon=${data.logintude}&appid=ffdbebb0e23e8896dbe5cdb7d1dbafb7
  `);

  React.useEffect(() => {
    if (data.latitude && data.logintude) {
      request().then((response) => setResponse(response));
    }
  }, [data]);

  return (
    <GlobalContext.Provider value={{ response }}>
      {children}
    </GlobalContext.Provider>
  );
};
