import React from "react";
import { Bg, BtnElement } from "../styles/Error";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Error = ({ showError }) => {
  const closeModal = () => showError(false);

  return (
    <Bg>
      <AiOutlineCloseCircle color="#F37B7B" size={35} />
      <h1>Atenção!</h1>
      <p>Ocorreu um erro na sua requisição, tente novamente</p>
      <BtnElement onClick={closeModal}>Ok</BtnElement>
    </Bg>
  );
};

export default Error;
