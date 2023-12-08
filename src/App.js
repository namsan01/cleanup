import styled from "@emotion/styled";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;
  return (
    <Wrap maxw={960}>
      <Routes>
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
