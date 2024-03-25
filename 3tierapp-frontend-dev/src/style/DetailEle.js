import styled, { keyframes } from "styled-components";

export const OverWrapper = styled.div(
  (props) => `
      display: flex;
      flex-direction: ${props.direction || "column"};
      justify-content: ${props.justifyContent || "flex-start"};
      align-items: ${props.alignItems || "flex-start"};
      position:${props.position ? props.position : "fixed"} ;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color:${props.backgroundColor || "rgba(0, 0, 0, 0.5)"};
      z-index: 999;
      cursor: pointer;
  `
);
export const rotate = keyframes`
 0% { 
    -webkit-transform: rotate(0deg) scale(0.8); 
    -moz-transform: rotate(0deg) scale(0.8);
  }
  50% { 
    -webkit-transform: rotate(360deg) scale(1.2); 
    -moz-transform: rotate(360deg) scale(1.2);
  }
  100% { 
    -webkit-transform: rotate(720deg) scale(0.8); 
    -moz-transform: rotate(720deg) scale(0.8);
  }
  `;
export const spinRight = keyframes`
   from {transform:rotate(360deg);}
    to {transform:rotate(0deg);}
  `;

export const ball1 = keyframes`
     0% {
    box-shadow: 30px 0 0 #f8b334;
  }
  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }
`;
export const ball2 = keyframes`
 0% {
    box-shadow: 30px 0 0 #97bf0d;
  }
  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -20px;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #97bf0d;
    margin-top: 0;
  }
`;

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  margin: auto;
  animation: ${rotate} 800ms linear infinite;

  &:before,
  &:after {
    content: "";
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }

  &:before {
    animation: ${ball1} 1s infinite;
    background-color: #cb2025;
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }
  &:after {
    animation: ${ball2} 1s infinite;
    background-color: #00a096;
    box-shadow: 30px 0 0 #97bf0d;
  }
`;
