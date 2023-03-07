import React from "react";
import Data from "../Screens/Data";
import { Div, HeaderElement, DivForm } from "../styles/Header";
import { VscSearch } from "react-icons/vsc";

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
          <DivForm>
            <input
              ref={inputElement}
              type="text"
              placeholder="Busque por uma cidade"
            />
            <button onClick={handleClick}>
              <VscSearch size={20} />
            </button>
          </DivForm>
        </Div>
      </HeaderElement>

      {inputValue && <Data value={{ inputValue }} />}
    </div>
  );
};

export default Header;
