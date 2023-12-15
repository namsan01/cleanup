import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DiaryAdd from "./pages/DiaryAdd";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import CreateEditList from "./components/CreateEditList";
import Main from "./pages/Main";
import { Wrap } from "./components/Common";

const App = () => {
  

  return (
    <Wrap maxw={1024}>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diary/add" element={<DiaryAdd />}></Route>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
