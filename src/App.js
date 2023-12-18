import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./components/Common";
import DiaryPage from "./pages/DiaryPage";
import DiaryEdit from "./pages/DiaryEdit";
import DiaryAddPage from "./pages/DiaryAddPage";
import Confirm from "./components/Confirm";
import SubBar from "./components/SubBar";
import Main from "./pages/Main";

const App = () => {
  return (
    <Wrap maxw={1024}>
      <Routes>
        {/* diary 첫 화면 page */}
        <Route path="*" element={<h1>파일이 없네요.</h1>}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diary" element={<DiaryPage />}></Route>
        <Route path="/diary/add" element={<DiaryAddPage />}></Route>
        <Route path="/diary/edit" element={<DiaryEdit />}></Route>
        <Route path="/sub" element={<SubBar />}></Route>
      </Routes>
      {/* confirm 컴포넌트 나열 */}
      {/* <Confirm
          txt={
            <div>
              <span>저장</span>하고 나가시겠습니까?
            </div>
          }
          type={1}
        ></Confirm>
        <Confirm
          txt={
            <div>
              작성을 <span>취소</span>하고 나가시겠습니까?
            </div>
          }
        ></Confirm>
        <Confirm
          txt={
            <div>
              작성을 <span>취소</span>하고 나가시겠습니까?
            </div>
          }
        ></Confirm> */}
    </Wrap>
  );
};

export default App;
