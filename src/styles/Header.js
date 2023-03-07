import styled from "styled-components";

export const HeaderElement = styled.header`
  width: 100%;
  background-color: #007dd1;

  &::after {
    content: "Clima e previsão do tempo";
    color: white;
    padding: 0 1%;
    background-color: #004586;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

export const Div = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fed3da;
  }
  div {
    width: 100%;
    max-width: 500px;
    display: flex;
  }
  div input {
    outline: none;
    margin: 0 5px;
    width: 100%;
    height: 30px;
    font-size: 1rem;
    padding: 0.5rem;

    &::placeholder {
      opacity: 0.5;
      font-size: 0.8rem;
    }
  }

  button {
    background-color: #198754;
    color: white;
    border: 1px solid #fed3da;
    border-radius: 4px;
    cursor: pointer;
    padding: 0 0.5rem;
  }
`;
