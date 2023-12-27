import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ListMain = styled.div`
  width: 918px;
  height: 120px;
  margin-top: ${props => (props.mgt ? "10px" : "50px")};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => (props.mgb ? "10px" : "45px")};
  padding: 10px 0;
  border: 1px solid #c5c6d0;
  transition: background-color 0.3s ease;
  ${({ backgroundColor }) =>
    css`
      background-color: ${backgroundColor};
    `}
`;
export const ListContent = styled.div`
  width: 100%;
  height: 92px;
  margin: 0 auto;
  padding: 10px 32px 10px 22px;
  display: flex;
  justify-content: space-between;
`;
export const ListDiv = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;
export const ListImg = styled.div`
  display: flex;
  align-items: center;
`;
export const ListText = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ListTitle = styled.div`
  font-size: 24px;
  margin: auto;
  color: #8f909a;
  line-height: 0;
  font-weight: 500;
`;
export const ListDate = styled.div`
  font-size: 20px;
  margin: auto;
  color: #8f909a;
  line-height: 0;
  font-weight: 400;
`;
export const CheckboxDiv = styled.div`
  /* margin: auto 7px; */
`;

export const checkboxStyles = css`
  appearance: none;
  border-radius: 0.35rem;
  width: 30px;
  height: 30px;
  margin: auto;
  cursor: pointer;
  background-color: #dae2ff;
  transition: background-color 0.3s;
  background-image: url("../assets/images/bt_checkicon.svg");
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: #a8b1d1;
    transition: 0.7s;
  }

  &:checked {
    border-color: transparent;
    background-color: #0055d5;
    transition: 0.7s;
  }
`;

export const ListCheckbox = styled.input`
  ${checkboxStyles}
`;
export const ListEditButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  &:hover {
    background-color: #dae2ff;
    transition: 0.7s;
  }
`;

export const ListDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  &:hover {
    background-color: #dae2ff;
    transition: 0.7s;
  }
`;

export const EditDelete = styled.div`
  position: absolute;
  cursor: pointer;
  transform: translate(-110px, 0px);
`;
