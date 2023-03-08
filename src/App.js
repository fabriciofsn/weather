import React from "react";
import Header from "./components/Header";
import { GlobalData } from "./hooks/GlobalContext";

const App = () => {
  return (
    <GlobalData>
      <Header />
    </GlobalData>
  );
};

export default App;
