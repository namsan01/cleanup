import styled from "@emotion/styled";
import React from "react";

const DiaryMain = props => {
  const Contents = styled.div`
    width: 100%;
    max-height: 1108px;
    display: flex;
    flex-direction: column;
    // border: 1px solid black;
    padding: 110px 0;
    gap: 50px;
  `;
  return <Contents>{props.children}</Contents>;
};

export default DiaryMain;
