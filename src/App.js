import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DiaryAdd from "./pages/DiaryAdd";
import FeedList from "./components/FeedList";
import Footer from "./components/Footer";
import MainList from "./components/MainList";
import Header from "./components/Header";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import CreateEditList from "./components/CreateEditList";
import MenuTab from "./components/MenuTab";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;

  return (
    <Wrap maxw={1024}>
      <SubBar></SubBar>
      <ErrorPage></ErrorPage>
      <Routes>
        <Route path="/diary/add" element={<DiaryAdd />}></Route>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
      {/* <MenuTab></MenuTab> */}
      {/* <FeedList></FeedList> */}
      {/* <DiaryAdd></DiaryAdd> */}
      <MainList></MainList>
      <FeedList></FeedList>
      <Confirm></Confirm>
      <Footer></Footer>
      <DiaryAdd></DiaryAdd>
      <Header text="메인화면"></Header>
      <Header text="청소화면"></Header>
      <CreateEditList text="수정"></CreateEditList>
      <CreateEditList text="작성"></CreateEditList>
    </Wrap>
  );
};

export default App;
