import React from "react";
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

const DiaryAdd = () => {
  return (
    <DiaryAddStyle>
      <DiaryAddHeader>
        <DiaryAddHeaderComment>
          <h1>어서오세요!</h1>
          <h2>
            완료한 청소에 대해 <br /> 기록해 주세요.
          </h2>
        </DiaryAddHeaderComment>
        <img src={process.env.PUBLIC_URL + "../assets/images/logo.svg"} alt="" />
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
            src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
            alt=""
            className="diaryadd-img-before"
          />
          <img
            src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
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
          <img src={process.env.PUBLIC_URL + "../assets/images/bt_checkicon.svg"} />
          저장
        </button>
      </DiaryAddFooter>
    </DiaryAddStyle>
  );
};

export default DiaryAdd;
