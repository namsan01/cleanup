import React, { useState } from "react";
import { postDiary } from "../api/diaryapi";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "@emotion/styled";
import DiaryAdd from "../components/DiaryAdd";

const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  max-height: ${props => props.maxh + "px"};
`;

const DiaryAddPage = props => {
  const [diaryList, setDiaryList] = useState([]);
  // const handleClickPostDiary = () => {
  //   postDiary(postResultAction, obj)
  // }

  const list = props.list;
  const setList = props.setList;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [pic1, setPic1] = useState("");
  const [pic2, setPic2] = useState("");

  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleButtonClick = () => {
    setConfirmOpen(true);
  };
  const handleConfirm = e => {
    e.preventDefault();
    const item = {
      title: title,
      contents: contents,
      pic1: pic1,
      pic2: pic2,
    };
    const arr = [...list, item];
    setList(arr);
    // 데이터 전송 ()
    postDiary();
    navigate(`/diary`);
  };

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="작성하기"></Header>
      <DiaryAdd></DiaryAdd>
      <Footer type={2}></Footer>
    </Wrap>
  );
};

export default DiaryAddPage;
