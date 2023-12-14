import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DiaryAdd from "./components/DiaryAdd";
import FeedList from "./components/FeedList";
import Footer from "./components/Footer";
import MainList from "./components/MainList";
import Header from "./components/Header";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import CreateEditList from "./components/CreateEditList";
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
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
      <MainList></MainList>
      <FeedList></FeedList>
      <Confirm></Confirm>
      <Footer></Footer>
      <DiaryAdd></DiaryAdd>
    </Wrap>
  );
};

export default App;
