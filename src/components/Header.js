import React, { useEffect } from "react";
import Data from "../Screens/Data";
import { Div, HeaderElement, DivForm } from "../styles/Header";
import { VscSearch } from "react-icons/vsc";
import { GlobalContext } from "../hooks/GlobalContext";

const Header = () => {
  const inputElement = React.useRef();
  const [inputValue, setInputValue] = React.useState("");
  const { response, isLoading } = React.useContext(GlobalContext);

  useEffect(() => {
    if (Object.keys(response).length > 0) {
      setInputValue(response.city.name);
    }
  }, [response]);

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
