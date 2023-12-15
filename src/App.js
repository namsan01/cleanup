import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Diary from "./pages/Diary";
import CreateEditList from "./components/CreateEditList";
import Main from "./pages/Main";
import { Wrap } from "./components/Common";
import DiaryEdit from "./pages/DiaryEdit";
import Footer from "./components/Footer";
import DiaryAddPage from "./pages/DiaryAddPage";

const App = () => {
  

  return (
    <Wrap maxw={1024}>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diary/add" element={<DiaryAdd />}></Route>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      {/* <SubBar></SubBar>
      <ErrorPage></ErrorPage> */}
      <DiaryEdit></DiaryEdit>
      {/* <Header text="메인화면"></Header> */}
      <Routes>
        {/* <Route path="/diary/add" element={<DiaryAdd />}></Route> */}
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
        <Route path="/" element={<Diary />}></Route>
      </Routes>
        <Route path="/diary/add" element={<DiaryAddPage />}></Route>
        <Route path="*" element={<h1>파일이 없네요.</h1>} />

      </Routes>
    </Wrap>
  );
};

export default App;
