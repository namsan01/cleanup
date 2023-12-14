import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DiaryAdd from "./components/DiaryAdd";
import FeedList from "./components/FeedList";
import Footer from "./components/Footer";
import List from "./components/MainList";
import Header from "./components/Header";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import CreateEditList from "./components/CreateEditList";

const App = () => {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;

  return (
    <Wrap maxw={1024}>
      <Header text="메인화면"></Header>
      <Header text="청소화면"></Header>
      <CreateEditList text="수정"></CreateEditList>
      <CreateEditList text="작성"></CreateEditList>
      <Routes>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
