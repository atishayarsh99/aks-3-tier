import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  
  
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Formbox = styled.div`
  width: 50%;
  padding: 1.5rem 1.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Formhead = styled.div`
  font-size: 1rem;
  color: black;
`;
export const LoginText = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: black;
  margin-top: 1rem;
`;
export const ATCLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`;
export const Formbody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 1rem 0;
  height: 100%;
`;
export const Image = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#0a001b, #000000);
  img {
    width: 30%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Submit = styled.input.attrs({ type: "submit", value: "Submit" })`
  padding: 0.5rem 1rem;
  color: white;
  background-color: #00d05a;
  width: 100px;
  border: none;
  margin: auto;
  border-radius: 5px;
  &:hover {
    transform: scale(0.96);
  }
`;
export const Value = styled.div`
  font-size: 1rem;
  color: white;
`;
export const social = styled.span`
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: #00d05a;
  }
`;
