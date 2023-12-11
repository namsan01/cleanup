import styled from "@emotion/styled";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import FeedList from "./components/FeedList";

const App = () => {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;

  return (
    <Wrap maxw={1024}>
      <Routes>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
      <FeedList></FeedList>
      <Footer></Footer>
    </Wrap>
  );
};

export default App;
