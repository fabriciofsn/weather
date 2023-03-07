import React from "react";
import Data from "../Screens/Data";
import { Div, HeaderElement } from "../styles/Header";

const Header = () => {
  const inputElement = React.useRef();

  const [inputValue, setInputValue] = React.useState("");

  const handleClick = () => {
    setInputValue(inputElement.current.value);
  };

  return (
    <div>
      <HeaderElement>
        <Div>
          <h1>Clima Tempo</h1>
          <div>
            <input
              ref={inputElement}
              type="text"
              placeholder="Busque por uma cidade"
            />
            <button onClick={handleClick}>Pesquisar</button>
          </div>
        </Div>
      </HeaderElement>
      {inputValue && <Data value={{ inputValue }} />}
    </div>
  );
};

export default Header;
