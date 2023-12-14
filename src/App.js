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

  const ok1 = () => {
    alert("아니오");
  };

  const ok2 = () => {
    alert("네");
  };
  return (
    <Wrap maxw={1024}>


      <SubBar></SubBar>
      <ErrorPage></ErrorPage>

      <Routes>
        <Route path="/diary/add" element={<DiaryAdd />}></Route>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>

      <Confirm
        type={1}
        txt={
          <>
            <span>저장</span>하고 나가시겠습니까?
          </>
        }
        onOk={ok1}
      ></Confirm>
      <Confirm
        txt={
          <>
            작성을 <span>취소</span> 하시겠습니까?
          </>
        }
        onOk={ok2}
      ></Confirm>
      <Confirm
        txt={
          <>
            수정을 <span>취소</span> 하시겠습니까?
          </>
        }
      ></Confirm>
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
