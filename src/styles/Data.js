import styled from "styled-components";

export const DivWraper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`;

export const DivInfos = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 80px;
  padding: 1rem;
  border-radius: 4px;
  background-color: #ccc;
`;

export const H2Title = styled.h2`
  color: #004586;
`;

export const DivColorzied = styled.div`
  color: #a20695;
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
  color: #a20695;
  font-weight: 600;
`;

export const DivSpin = styled.div`
  position: absolute;
  text-align: center;
`;
