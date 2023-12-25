import React, { useState } from "react";
import {
  CreateList,
  CreateListBg,
  CreateTitle,
} from "../styles/createeditstyle";
import { postTodo } from "../api/todo/todo_api";

const CreateAdd = ({ text, handleCancel }) => {
  const [title , setTitle] = useState("")
  const [cleaning, setCleaning] = useState("");
  const [doDay, setDoDay] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleInputChange = e => {
    const value = e.target.value;

    // 입력 값이 숫자이거나 빈 문자열인 경우에만 업데이트
    if (!isNaN(value) || value === "") {
      // 숫자가 아닌 문자는 제거하고 숫자만 남기기
      const numericValue = value.replace(/[^0-9]/g, "");

      // 8자 이상이면 초과된 부분은 잘라내기
      const trimmedValue = numericValue.slice(0, 8);

      // 숫자만 남긴 값을 이용하여 포맷팅 수행
      const formatted = trimmedValue.replace(
        /(\d{4})(\d{2})(\d{2})/,
        "$1-$2-$3",
      );

      setInputNumber(formatted);
    }
  };
  const handleClearTitle = e => {
    e.preventDefault();
    setTitle("");
  };

  const postSuccess = () => {
    alert("할일이 추가되었습니다");
    handleCancel(true);
  };
  const postFail = () => {
    alert("서버가 불안정합니다. 다시 작성해주세요.");
    handleCancel(false);
  };

  const handleConfirm = e => {
    e.preventDefault();
    if (cleaning === "") {
      handleCancel(false);
      alert("제목을 입력하세요.");
      return;
    }
    if (doDay === "") {
      handleCancel(false);
      alert("날짜를 입력하세요.");
      return;
    }
    diaryAction()
  };

  const diaryAction = () => {
    const obj = {
      loginedUserId: 2,
      cleaning: cleaning,
      doDay: doDay,
      
    };
    // console.log("백엔드 보낼 데이터", obj);
    postTodo(obj, postSuccess, postFail);
  };
  // 제목입력 업데이트
  const handleChangeTitle = e => {
    setCleaning(e.target.value);
  };
    // 내용 입력 값 업데이트
    const handleChangeDate = e => {
      setDoDay(e.target.value);
    };

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
                  type="text"
                  placeholder="yyyy-mm-dd"
                  maxLength="10"
                  value={doDay}
                  onChange={handleChangeDate}
                  // value={inputNumber}
                  // onChange={handleInputChange}
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
