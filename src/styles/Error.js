import styled, { keyframes } from "styled-components";

const anim = keyframes`
  from{
    opacity: 0;
    transform: translate3d(0,-30px,0);
  }
  to{
  opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const Bg = styled.div`
  animation: ${anim} 0.3s ease;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  max-height: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  p {
    margin: 10px 0;
  }
`;

export const H1Alert = styled.h1`
  color: #ffc107;
`;

export const BtnElement = styled.button`
  background-color: #3085d6;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: 80px;
  height: 30px;
  margin: 20px 0;
`;
