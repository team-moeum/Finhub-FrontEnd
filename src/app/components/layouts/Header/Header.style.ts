import styled from "@emotion/styled";

export const header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  padding: 0 16px;
`;

export const link = styled.div`
  width: 44px;
  height: 44px;
  
  a {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 44px;
    height: 44px;
    fill: black;
  }
`;
