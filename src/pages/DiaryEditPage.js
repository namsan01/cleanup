import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DiaryEdit from "../components/DiaryEdit";
import styled from "@emotion/styled";

const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  max-height: ${props => props.maxh + "px"};
`;

const DiaryEditPage = () => {
  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="수정하기"></Header>
      <DiaryEdit></DiaryEdit>
      <Footer type={2}></Footer>
    </Wrap>
  );
};

export default DiaryEditPage;
