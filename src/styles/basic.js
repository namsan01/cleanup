import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
`;

export const MainAddBt = styled.div`
  img {
    position: fixed;
    bottom: 125px;
    left: 468px;
    height: 88px;
    width: 88px;
    display: block;
    &:active {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }
`;
