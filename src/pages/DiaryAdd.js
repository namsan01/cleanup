import React, { useState } from "react";
import { Topbar } from "../styles/headerstyle";
import {
  DiaryAddFooter,
  DiaryAddHeader,
  DiaryAddHeaderComment,
  DiaryAddMain,
  DiaryAddMainButton,
  DiaryAddMainContent,
  DiaryAddMainImage,
  DiaryAddMainTitle,
  DiaryAddStyle,
} from "../styles/diaryaddstyle";
import { postData } from "../api/diaryapi";
import { useNavigate } from "react-router-dom";

const DiaryAdd = props => {
  const list = props.list;
  const setList = props.setList;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pic1, setPic1] = useState("");
  const [pic2, setPic2] = useState("");

  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };

  const handleSubmitDiartForm = e => {
    e.preventDefault();
    const item = {
      title: title,
      content: content,
      pic1: pic1,
      pic2: pic2,
    };
    const arr = [...list, item];
    setList(arr);
    postData(arr);
    navigate(-1);
  };

  return (
    <>
      <Topbar>
        <div>
          <h2>userName</h2>

          <span>메인 화면</span>

          <button>
            <img src="../assets/images/bt_menu.svg" alt=""></img>
          </button>
        </div>
      </Topbar>
      <DiaryAddStyle>
        <DiaryAddHeader>
          <DiaryAddHeaderComment>
            <h1>어서오세요!</h1>
            <h2>
              완료한 청소에 대해 <br /> 기록해 주세요.
            </h2>
          </DiaryAddHeaderComment>
          <img src="../assets/images/logo.svg" alt="" />
        </DiaryAddHeader>
        <DiaryAddMain>
          <DiaryAddMainTitle>
            <form>
              <input
                type="text"
                maxLength={50}
                placeholder="제목을 입력해 주세요"
                name="title"
                className="diaryadd-title"
              />
              <input type="button" className="diaryadd-title-bt" />
            </form>
          </DiaryAddMainTitle>
          <DiaryAddMainContent>
            <textarea
              type="text"
              maxLength={2000}
              placeholder="내용을 입력해 주세요."
              name="content"
            />
          </DiaryAddMainContent>
          <DiaryAddMainImage>
            <img
              src="../assets/images/bt_media.svg"
              alt=""
              className="diaryadd-img-before"
            />
            <img
              src="../assets/images/bt_media.svg"
              alt=""
              className="diaryadd-img-after"
            />
          </DiaryAddMainImage>
          <DiaryAddMainButton>
            <button className="diaryadd-img-input-button-before">
              청소 전 사진 업로드
            </button>
            <button className="diaryadd-img-input-button-after">
              청소 후 사진 업로드
            </button>
          </DiaryAddMainButton>
        </DiaryAddMain>
        <DiaryAddFooter>
          <button>
            <img src="../assets/images/bt_checkicon.svg" />
            저장
          </button>
        </DiaryAddFooter>
      </DiaryAddStyle>
    </>
  );
};

export default DiaryAdd;
