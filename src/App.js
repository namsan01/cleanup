import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./components/Common";
import DiaryAddPage from "./pages/DiaryAddPage";
import DiaryEditPage from "./pages/DiaryEditPage";
import DiaryPage from "./pages/DiaryPage";
import Main from "./pages/Main";
import IntroPage from "./pages/IntroPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Wrap maxw={1024}>
      <Routes>
        <Route path="/" exact element={<IntroPage />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diary" element={<DiaryPage />}></Route>
        <Route path="/diary/add" element={<DiaryAddPage />}></Route>
        <Route path="/diary/edit" element={<DiaryEditPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
