import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DiaryEdit from "../components/DiaryEdit";
import { patchDiary } from "../api/diaryapi";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import { getDiary } from "../api/diary/diary_api";

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
      <Footer></Footer>
    </Wrap>
  );
};

export default DiaryEditPage;
