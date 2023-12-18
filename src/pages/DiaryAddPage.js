import React, { useState } from "react";
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
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "@emotion/styled";

const init = "";
const DiaryAddPage = (props, { children }) => {
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
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
    max-height: ${props => props.maxh + "px"};
  `;

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

  const [uploadImgBefore, setUploadImgBefore] = useState(init);
  const [uploadImgAfter, setUploadImgAfter] = useState(init);
  const handleChange = async (event, type) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("pic", file);
    try {
      const res = await fetch("/upload/images", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("전송완료", res);
      // 이미지 타입에 따라 다른 상태 업데이트
      if (type === "before") {
        setUploadImgBefore(URL.createObjectURL(file));
      } else if (type === "after") {
        setUploadImgAfter(URL.createObjectURL(file));
      }
    } catch (error) {
      console.log("업로드 실패", error);
    }
  };

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="내 청소일기" type="1"></Header>
      <DiaryAddStyle>
        <DiaryAddHeader>
          <DiaryAddHeaderComment>
            <h1>어서오세요!</h1>
            <h2>
              완료한 청소에 대해 <br /> 기록해 주세요.
            </h2>
          </DiaryAddHeaderComment>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
            alt=""
          />
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
            <img src={uploadImgBefore} alt="" className="diaryadd-img-before" />
            <img src={uploadImgAfter} alt="" className="diaryadd-img-after" />
          </DiaryAddMainImage>
          <DiaryAddMainButton>
            <label htmlFor="input-file-before">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("input-file-before").click();
                }}
                className="diaryadd-img-input-button-before"
              >
                청소 전 사진 업로드
              </button>
            </label>
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={event => {
                handleChange(event, "before");
              }}
              id="input-file-before"
              style={{ display: "none" }}
            />
            <label htmlFor="input-file-after">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("input-file-after").click();
                }}
                className="diaryadd-img-input-button-after"
              >
                청소 후 사진 업로드
              </button>
            </label>

            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={event => {
                handleChange(event, "after");
              }}
              id="input-file-after"
              style={{ display: "none" }}
            />
          </DiaryAddMainButton>
        </DiaryAddMain>
        <DiaryAddFooter>
          <button>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_checkicon.svg"}
            />
            저장
          </button>
        </DiaryAddFooter>
      </DiaryAddStyle>
      <Footer></Footer>
    </Wrap>
  );
};

export default DiaryAddPage;
