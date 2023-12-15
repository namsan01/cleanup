import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DiaryMain from "../components/diary/DiaryMain";
import DiaryAdd from "./DiaryAdd";
import FeedList from "../components/FeedList";

const Diary = () => {
  // const DiaryMain =
  return (
    <div>
      <Header text={"내 청소일기"}></Header>
      {/* Header property 에 type={1} 추가요망 */}
      <DiaryMain>
        <FeedList></FeedList>
        <FeedList></FeedList>
      </DiaryMain>
      <Footer></Footer>
    </div>
  );
};

export default Diary;
