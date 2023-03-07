import React from "react";
import { Div, HeaderElement } from "../styles/Header";

const Header = () => {
  const inputElement = React.useRef();
  return (
    <HeaderElement>
      <Div>
        <h1>Clima Tempo</h1>
        <div>
          <input
            ref={inputElement}
            type="text"
            placeholder="Busque por uma cidade"
          />
          <button>Pesquisar</button>
        </div>
      </Div>
    </HeaderElement>
  );
};

export default Header;
