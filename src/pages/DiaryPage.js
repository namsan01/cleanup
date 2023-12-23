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

  const handleClickMain = () => {
    navigate(`/main`);
  };

  const [userId, setUserId] = useState("2");
  const [diaryId, setDiaryId] = useState(1);
  const [diaryList, setDiaryList] = useState([]);

  const reloadGetDiary = () => {
    getDiary(userId, diaryId, setDiaryList);
  };

  useEffect(() => {
    reloadGetDiary();
    // diaryList(setDiaryList);
  }, []);

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text={"내 청소일기"} type={1}></Header>
      <DiaryMain>
        {diaryList.map(item => (
          <FeedList
            key={item.diaryId}
            item={item}
            // page 에 있는 변수라서
            userId={userId}
            reloadGetDiary={reloadGetDiary}
          ></FeedList>
        ))}
        {/* <FeedList>
          {diary.map((item, index) => {
            return (
              <div key={index}>
                <FeedList><h2>{item}</h2></FeedList>
              </div>
            );
          })}
        </FeedList> */}

        <MainAddBt>
          <Link to="/add">
            <img
              className="MainAddBt"
              src={process.env.PUBLIC_URL + "../assets/images/bt_main_add.svg"}
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
