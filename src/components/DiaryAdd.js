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
import { useNavigate } from "react-router-dom";
import Confirm from "./Confirm";

const DiaryAdd = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const handleChangeTitle = e => {
    // 입력 값 업데이트
    setTitle(e.target.value);
  };
  const handleClearTitle = e => {
    // 입력 필드의 내용을 지우기
    // e.preventDefault();
    setTitle("");
  };

  const [uploadImgBefore, setUploadImgBefore] = useState(
    `${process.env.PUBLIC_URL}/assets/images/bt_media.svg`,
  );
  const [uploadImgAfter, setUploadImgAfter] = useState(
    `${process.env.PUBLIC_URL}/assets/images/bt_media.svg`,
  );
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

  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleButtonClick = () => {
    setConfirmOpen(true);
  };
  const handleConfirm = e => {
    navigate(`/diary`);
  };
  const handleCancel = () => {
    setConfirmOpen(false);
  };

  return (
    <DiaryAddStyle>
      <DiaryAddHeader>
        <DiaryAddHeaderComment>
          <h1>어서오세요!</h1>
          <span>
            완료한 <b>청소</b> 에 대해
          </span>
          <span>
            <b>기록</b>해 주세요.
          </span>
        </DiaryAddHeaderComment>
        <img
          src={process.env.PUBLIC_URL + "../assets/images/logo.svg"}
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
              value={title}
              className="diaryadd-title"
              onChange={handleChangeTitle}
            />
            <input
              type="button"
              className="diaryadd-title-bt"
              onClick={handleClearTitle}
            />
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
        <button onClick={handleButtonClick}>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/bt_checkicon.svg"}
          />
          저장
        </button>

        {confirmOpen && (
          <Confirm
            type={1}
            txt={
              <div>
                <span>저장</span>하고 나가시겠습니까?
              </div>
            }
            onOk={handleConfirm}
            onNo={handleCancel}
          />
        )}
      </DiaryAddFooter>
    </DiaryAddStyle>
  );
};

export default DiaryAdd;