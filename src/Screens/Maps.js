import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { DivWraper } from "../styles/Maps";

const Maps = ({ data }) => {
  // const { response } = React.useContext(GlobalContext);
  if (data) return <DivWraper></DivWraper>;
};

export default Maps;
