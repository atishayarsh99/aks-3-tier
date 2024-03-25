import styled from "styled-components";

export const Navbox = styled.div`

  width: 100%;
  background: #fff;
  height: 60px;
  display: flex;
  
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 1rem 1rem;
  ${'' /* position: -webkit-sticky;
  position:sticky;
  top: 0; */}
  z-index:1;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  `;
export const Leftbox = styled.div`
  width: calc(70% - 550px);
  flex: 1 1 auto;
  display: flex;
  align-items: center;

  gap: 30px;
`;
export const Rightbox = styled.div`
  color: white;
  ul {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style-type: none;
    align-items: center;
    justify-content: space-evenly;

    li {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      position: relative;
    }
  }
`;

export const Flexcenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Inputarea = styled.input`
  width: 60%;
  background: #191c24;
  color: #606486;
  border: 1px solid #2c2e33;
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  outline: none;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Button = styled.button`
  cursor:pointer;
  color: white;
  padding: 0.2rem 1.5rem;
  border-radius: 5px;
  border:none;
  background-color:#00d05a;
  &:focus{
    border: none;
    outline: none;
  }
  &:active{
    transform:scale(0.94);
  }
  @media (max-width: 992px) {
    display: none;
  }
 
`;

export const Badge = styled.span`
  position: absolute;
  height: 5px;
  width: 5px;
  z-index: 11;
  padding: 4px;
  border-radius: 10px;
  background-color: #00d25b;
  left: 12px;
`;
