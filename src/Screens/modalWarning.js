import React from "react";
import { Bg, BtnElement } from "../styles/ModalWarning";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const ModalWarning = ({ warning }) => {
  const handleClick = () => warning(false);

  return (
    <Bg>
      <BiCodeAlt size={25} />
      <h1>Atenção!</h1>
      <p>Este sistema ainda está em desenvolvimento.</p>
      <div>
        <a target="_blank" href="https://github.com/fabriciofsn/weather">
          <AiFillGithub
            size={25}
            color="#3085d6"
            title="
          Link Para o Repositório"
          />
        </a>
      </div>
      <BtnElement onClick={handleClick}>Ok</BtnElement>
    </Bg>
  );
};

export default ModalWarning;
