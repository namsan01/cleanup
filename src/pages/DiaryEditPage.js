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

const init = "";
const DiaryEdit = () => {
  // 미리 보여줄 이미지 주소
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
    <>
      <Topbar>
        <div>
          <button>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_menu.svg"}
              alt=""
            ></img>
          </button>
        </div>
      </Topbar>
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
    </>
  );
};

export default DiaryEdit;
