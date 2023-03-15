import styled from "styled-components";

export const HeaderElement = styled.header`
  width: 100%;
  background-color: #111747;

  &::after {
    content: "Clima e Previsão do Tempo";
    color: white;
    padding: 0 1%;
    background-color: #465193;
    max-width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivForm = styled.div`
  width: 100%;
  height: 40px;
  background-color: #465193;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Div = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 735px) {
    flex-direction: column;
  }

  h1 {
    color: #fed3da;
  }
  div {
    width: 100%;
    max-width: 500px;
    display: flex;
  }
  div input {
    border: none;
    background-color: transparent;
    outline: none;
    margin: 0 5px;
    width: 100%;
    height: 30px;
    font-size: 1rem;
    padding: 0.5rem;
    color: white;
    &::placeholder {
      opacity: 0.5;
      font-size: 0.8rem;
      color: white;
    }
  }

  button {
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    padding: 0 0.8rem;
  }
`;

export const DivSlignSpin = styled.div`
  text-align: center;
`;
