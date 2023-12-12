import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import FeedList from "./components/FeedList";
import List from "./components/MainList";
import Header from "./components/Header";
import SubBar from "./components/SubBar";

const App = () => {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;

  return (
    <Wrap maxw={1024}>
      <SubBar></SubBar>
      <Routes>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
