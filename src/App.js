import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DiaryAdd from "./pages/DiaryAdd";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Diary from "./pages/Diary";

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
      {/* <SubBar></SubBar>
      <ErrorPage></ErrorPage> */}
      <Header text="메인화면"></Header>
      <Routes>
        {/* <Route path="/diary/add" element={<DiaryAdd />}></Route> */}
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
        <Route path="/" element={<Diary />}></Route>
      </Routes>

      {/* <Confirm
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
      ></Confirm> */}
    </Wrap>
  );
};

export default App;
