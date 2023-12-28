import React, { useEffect, useState } from "react";
import {
  CreateList,
  CreateListBg,
  CreateTitle,
} from "../styles/createeditstyle";

import { postTodo } from "../api/todo/todo_api";
import moment from "moment/moment";

const CreateAdd = ({ text, handleCancel, cleanListUpdate}) => {
  const [cleaning, setCleaning] = useState("");
  const [doDay, setDoDay] = useState("");

  const handleClearTitle = e => {
    e.preventDefault();
    setCleaning("");
  };

  const postSuccess = () => {
    alert("할일이 추가되었습니다");

    cleanListUpdate();
    handleCancel(true);
  };
  const postFail = () => {
    alert("서버가 불안정합니다. 다시 작성해주세요.");
    handleCancel(false);
  };
  const diaryPost = () => {
    const obj = {
      loginedUserId: 2,
      cleaning: cleaning,
      doDay: doDay,
    };
    postTodo(obj, postSuccess, postFail);
  };


  const handleConfirm = e => {
    if (cleaning === "") {
      alert("일정을 입력하세요.");
      return;
    }
    if (doDay === "") {
      alert("날짜를 입력하세요.");
      return;
    }
    diaryPost();
  };

  // 제목입력 업데이트
  const handleChangeTitle = e => {
    setCleaning(e.target.value);
  };
  // 내용 입력 값 업데이트
  const handleChangeDate = e => {
    setDoDay(e.target.value);
  };

  useEffect(() => {
    const now = moment();
    setDoDay(now.format("YYYY-MM-DD"));
  }, []);

  return (
    <CreateListBg>
      <CreateList>
        <div className="create-header">
          <div>
            <CreateTitle>리스트 {text}</CreateTitle>
          </div>
          <img
            className="create-logo"
            src={process.env.PUBLIC_URL + "./assets/images/logo.svg"}
            alt=""
          />
        </div>
        <div className="create-main">
          <div className="create-main-top">
            <div className="create-main-left">
              <img src="./assets/images/icon.svg" alt="" />
            </div>
            <div className="create-main-right">
              <div className="create-date">
                <input
                  type="date"
                  placeholder="yyyy-mm-dd"
                  maxLength="10"
                  value={doDay}
                  onChange={handleChangeDate}
                />
              </div>
              <h2>날짜를 입력해 주세요!</h2>
            </div>
          </div>

          <form className="create-main-ft">
            <input
              className="create-main-txt"
              type="text"
              name="title"
              value={cleaning}
              maxLength={50}
              placeholder="일정을 입력해 주세요."
              onChange={handleChangeTitle}
            />

            <input
              type="button"
              onClick={handleClearTitle}
              className="create-main-bt"
            />
          </form>
        </div>
        <div className="create-footer">
          <div className="create-footer">
            <button
              className="bt-no"
              onClick={() => {
                handleCancel();
              }}
            >
              취 소
            </button>

            <button className="bt-yes" type="submit" onClick={handleConfirm}>
              완 료
            </button>
          </div>
        </div>
      </CreateList>
    </CreateListBg>
  );
};

export default CreateAdd;
