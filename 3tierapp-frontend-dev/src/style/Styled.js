import styled from "styled-components";

export const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const SectionBox = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const LeftBox = styled.div`
  width: 10%;
`;
export const RightBox = styled.div`
  min-height: 100vh;
  background: #f0f8ff;
  width: 100%;
  padding: 2rem;
`;
