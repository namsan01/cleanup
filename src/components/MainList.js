import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";

const List = () => {
  const ListWrap = styled.section`
    background: ${({ checked }) => (!checked ? "#ffffff" : "#e4e2e6")};
    width: 918px;
    height: 120px;
    margin: 0 auto;
    padding: 10px 0;
    border: 1px solid #c5c6d0;
  `;
  const ListContent = styled.section`
    width: 100%;
    height: 92px;
    margin: 0 auto;
    padding: 10px 32px 10px 22px;
    display: flex;
    justify-content: space-between;
  `;
  const ListDiv = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
  `;
  const ListImg = styled.div`
    display: flex;
    align-items: center;
  `;
  const ListText = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const ListTitle = styled.div`
    font-size: 24px;
    margin: auto;
    color: #8f909a;
    line-height: 0;
    font-weight: 500;
  `;
  const ListDate = styled.section`
    font-size: 20px;
    margin: auto;
    color: #8f909a;
    line-height: 0;
    font-weight: 400;
  `;
  const CheckboxDiv = styled.section`
    margin: auto 7px;
  `;

  const checkboxStyles = css`
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

    &:checked {
      border-color: transparent;
      background-repeat: no-repeat;
      background-color: #0055d5;
    }
  `;
  const ListCheckbox = styled.input`
    ${checkboxStyles}
  `;

  return (
    <ListWrap>
      <ListContent>
        <ListDiv>
          <ListImg>
            <img src="../assets/images/bt_calendar.svg" />
          </ListImg>
          <ListText>
            <ListTitle>세탁기 청소</ListTitle>
          </ListText>
        </ListDiv>
        <ListDiv>
          <ListDate>23.12.02</ListDate>
          <CheckboxDiv>
            <ListCheckbox type="checkbox"></ListCheckbox>
          </CheckboxDiv>
          <ListImg>
            <img src="../assets/images/bt_scissors.svg" />
          </ListImg>
        </ListDiv>
      </ListContent>
    </ListWrap>
  );
};

export default List;
