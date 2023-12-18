import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedList from "../components/FeedList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiaryMain from "../components/diary/DiaryMain";
import SubBar from "../components/SubBar";
import { MainAddBt } from "../styles/basic";

const Diary = () => {
  // navigate 로 path 전달!
  const navigate = useNavigate();
  const handleClickDiaryAdd = () => {
    // DiaryAddPage 로 가기
    navigate("/");
  };


  // const handleClickSubBar = () => {
  //   // SubBar 로 가기
  //   navigate("/sub");
  // };

  const handleClickSubBar = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header
        text={"내 청소일기"}
        type={1}
        // onClick={handleClickSubBar}
        handleClickSubBar={handleClickSubBar}
      >
        {/* <Link to="/sub"></Link> */}
        {/* <SubBar></SubBar> */}
      </Header>
      <DiaryMain>
        <FeedList title={"화장실 청소"}>
          <div>고길동</div>
        </FeedList>
        <FeedList title={"주방 청소"}>
          <div>고길동</div>
        </FeedList>
        <FeedList></FeedList>

        <MainAddBt>
          <Link to="/diary/add">
            <img
              src={process.env.PUBLIC_URL + "../assets/images/bt_main_add.svg"}
              alt=""
            />
          </Link>
        </MainAddBt>
      </DiaryMain>
      <Footer></Footer>
    </div>
  );
};

export default Diary;
