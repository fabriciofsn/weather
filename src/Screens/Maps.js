import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { DivWraper } from "../styles/Maps";

const Maps = ({ data }) => {
  const { response } = React.useContext(GlobalContext);
  if (data) console.log(data);
  return (
    <DivWraper>
      <div>
        <span>Vento: {data.wind.speed}Km</span> |
        <span>Umidade: {data.main.humidity}</span>
      </div>
      <div>
        <span>Nível do Mar: {data.main.sea_level}</span>
      </div>
    </DivWraper>
  );
};

export default Maps;
