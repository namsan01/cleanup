import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
`;

export const MainAddBt = styled.div`
  .MainAddBt {
    position: fixed;
    left: 50%;
    top: 85%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    height: 88px;
    width: 88px;
    display: block;
    &:active {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }
`;
