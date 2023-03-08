import styled from "styled-components";

export const DivWraper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const DivInfos = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 220px;
  padding: 1rem;
  border-radius: 4px;
  background-color: rgb(43, 83, 152);
  @media (max-width: 800px) {
    margin: 5px 0;
  }
`;

export const H2Title = styled.h2`
  color: white;
`;

export const DivColorzied = styled.div`
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  span {
    text-align: center;
  }
`;

export const DivUseful = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 600;
`;

export const DivSpin = styled.div`
  position: absolute;
  text-align: center;
`;
