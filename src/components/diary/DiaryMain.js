import styled from "@emotion/styled";
import React from "react";

const DiaryMain = props => {
  const MainWrap = styled.div`
    width: 100%;
    max-height: 1108px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 50px 0;
    border: 1px solid black;
  `;
  return <MainWrap>{props.children}</MainWrap>;
};

export default DiaryMain;
