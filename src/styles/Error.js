import styled, { keyframes } from "styled-components";

const anim = keyframes`
  from{
    opacity: 0;
    transform: translate3d(-30px,0,0);
  }
  to{
  opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const Bg = styled.div`
  animation: ${anim} 0.3s ease;
  background-color: rgb(16, 127, 99);
  text-align: center;
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  position: fixed;

  p {
    position: absolute;
    top: -15px;
    right: -10px;
    cursor: pointer;
  }
`;

export const H1Alert = styled.h1`
  color: #ffc107;
`;

export const H2Alert = styled.h2`
  color: #ffc107;
`;
