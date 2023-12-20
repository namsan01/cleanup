import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedList from "../components/FeedList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiaryMain from "../components/diary/DiaryMain";
import { MainAddBt, Wrap } from "../styles/basic";

const Diary = () => {
  // navigate 로 path 전달!
  const navigate = useNavigate();
  // main 탭으로 가기
  const handleClickMain = () => {
    navigate(`/main`);
  };

  // // useState 는 화면 새로 고침
  // const [diary, setDiary] = useState([]);

  // getDiary(setDiary);
  // useEffect(() => {
  //   // 화면이 완료되면 get 호출
  //   const getdiary = getDiary();
  //   setDiary(getdiary);
  // }, []);

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text={"내 청소일기"} type={1}></Header>
      <DiaryMain>
        <FeedList title={"화장실 청소"}></FeedList>
        <FeedList title={"주방 청소"}></FeedList>
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
          <Link to="/diary/add">
            <img
              className="MainAddBt"
              src={process.env.PUBLIC_URL + "../assets/images/bt_main_add.svg"}
              alt=""
            />
          </Link>
        </MainAddBt>
      </DiaryMain>
      <Footer onClick={handleClickMain}></Footer>
    </Wrap>
  );
};

export default Diary;
