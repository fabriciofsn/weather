import React, { useEffect } from "react";
import Data from "../Screens/Data";
import { Div, HeaderElement, DivForm, DivSlignSpin } from "../styles/Header";
import { VscSearch } from "react-icons/vsc";
import { GlobalContext } from "../hooks/GlobalContext";
import useFetch from "../hooks/useFetch";
import spin from "../Loader/loader.svg";

const Header = () => {
  const inputElement = React.useRef();
  const [inputValue, setInputValue] = React.useState("");
  const { response } = React.useContext(GlobalContext);
  const { isLoading, setLoading } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (Object.keys(response).length > 0) {
      setInputValue(response.city.name);
      setLoading(false);
    }
  }, [response]);

  const handleClick = () => {
    if (inputElement.current.value) {
      setInputValue(inputElement.current.value);
      inputElement.current.value = "";
      inputElement.current.focus();
    }
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
      <DivSlignSpin>
        {isLoading && <img src={spin} alt="loader" />}
      </DivSlignSpin>
      {inputValue && <Data value={{ inputValue }} />}
    </div>
  );
};

export default Header;
