import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DiaryAdd from "./pages/DiaryAdd";
import FeedList from "./components/FeedList";
import Footer from "./components/Footer";
import List from "./components/MainList";
import Header from "./components/Header";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import CreateEditList from "./components/CreateEditList";
import MenuTab from "./components/MenuTab";

const App = () => {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;

  return (
    <Wrap maxw={1024}>
      <Routes>
        <Route path="/diary/add" element={<DiaryAdd />}></Route>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
      {/* <MenuTab></MenuTab> */}
      {/* <FeedList></FeedList> */}
      {/* <DiaryAdd></DiaryAdd> */}
    </Wrap>
  );
};

export default App;
