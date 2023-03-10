import React from "react";
import { Bg, H1Alert, H2Alert } from "../styles/Error";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Error = ({ showError }) => {
  const closeModal = () => showError(false);

  return (
    <Bg>
      <p>
        <AiOutlineCloseCircle size={30} color="#ffc107" onClick={closeModal} />
      </p>
      <H1Alert>Atenção!</H1Alert>
      <H2Alert>
        Ocorreu um erro na requisição. Verifique as informações passadas!
      </H2Alert>
    </Bg>
  );
};

export default Error;
