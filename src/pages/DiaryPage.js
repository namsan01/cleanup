import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedList from "../components/FeedList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiaryMain from "../components/diary/DiaryMain";
import { MainAddBt, Wrap } from "../styles/basic";
import { getDiary } from "../api/diary/diary_api";

const Diary = () => {
  // navigate 로 path 전달!
  const navigate = useNavigate();
  // main 탭으로 가기

  const [userId, setUserId] = useState("2");
  const [diaryId, setDiaryId] = useState(1);
  const [diaryList, setDiaryList] = useState([]);

  const reloadGetDiary = () => {
    // axios.get 에서 userId, diaryId, 그리고 setDiaryList 다이어리 목록을 불러온다?
    getDiary(userId, diaryId, setDiaryList);
  };

  // 화면 준비되면 그때 반영
  useEffect(() => {
    reloadGetDiary();
  }, []);

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text={"내 청소일기"} type={1}></Header>
      <DiaryMain>
        <div style={{ paddingBottom: "150px" }}>
          {diaryList.map(item => (
            <FeedList
              key={item.diaryId}
              item={item}
              userId={userId}
              reloadGetDiary={reloadGetDiary}
            ></FeedList>
          ))}
        </div>

        <MainAddBt>
          <Link to="/add">
            <img
              className="MainAddBt"
              src={process.env.PUBLIC_URL + "/assets/images/bt_diary_add.svg"}
              alt=""
            />
          </Link>
        </MainAddBt>
      </DiaryMain>
      <Footer type={2}></Footer>
    </Wrap>
  );
};

export default Diary;
