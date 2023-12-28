import React, { useState } from "react";
import { postDiary } from "../api/diaryapi";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "@emotion/styled";
import DiaryAdd from "../components/DiaryAdd";

const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  max-height: ${props => props.maxh + "px"};
`;

const DiaryAddPage = () => {

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="작성하기"></Header>
      <DiaryAdd></DiaryAdd>
      <Footer type={2}></Footer>
    </Wrap>
  );
};

export default DiaryAddPage;
