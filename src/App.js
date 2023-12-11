import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import FeedList from "./components/FeedList";
import List from "./components/MainList";
import Header from "./components/Header";

const App = () => {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;

  return (
    <Wrap maxw={1024}>
      <Header></Header>
      <Routes>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
      <List></List>
      <FeedList></FeedList>
      <Footer></Footer>
    </Wrap>
  );
};

export default App;
