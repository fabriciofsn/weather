import React, { useEffect } from "react";
import Data from "../Screens/Data";
import { Div, HeaderElement, DivForm } from "../styles/Header";
import { VscSearch } from "react-icons/vsc";

const Header = () => {
  const inputElement = React.useRef();
  const [inputValue, setInputValue] = React.useState();

  const [cooders, setCooders] = React.useState({
    latitude: null,
    longitude: null,
  });
  const handleClick = () => {
    setInputValue(inputElement.current.value);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCooders({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  React.useEffect(() => {
    if (cooders.latitude && cooders.longitude) {
      fetch(`
      https://api.openweathermap.org/data/2.5/forecast?lat=${cooders.latitude}&lon=${cooders.longitude}&appid=ffdbebb0e23e8896dbe5cdb7d1dbafb7
      `)
        .then((response) => response.json())
        .then((response) => setInputValue(response.city.name));
    }
  }, [cooders]);

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
