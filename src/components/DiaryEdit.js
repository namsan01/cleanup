import React, { useEffect, useState } from "react";
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
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getDiary } from "../api/diary/diary_api";
import { Navigate, useNavigate } from "react-router-dom";
import Confirm from "./Confirm";

// 나도 작업해야지
const obj = {
  loginedUserId: 3,
  title: "제목이지",
  contents: "내용입니다.",
  pics: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/NewJeans_X_OLENS_1_%28cropped%29.jpg/250px-NewJeans_X_OLENS_1_%28cropped%29.jpg",
    "",
  ],
};

const DiaryEdit = props => {
  const navigate = useNavigate();

  const item = props.item ? props.item : obj;

  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.contents);
  const [pics, setPics] = useState([...item.pics]);

  const init = "";
  const [cleanList, setCleanList] = useState([]);

  // useEffect(() => {
  //   getDiary(loginedUserId, page, setCleanList);
  // }, []);

  // 이미지 업로드
  // const handleChange = async (event, type) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append("pic", file);

  //   try {
  //     const res = await fetch("/upload/images", {
  //       method: "PATCH",
  //       body: formData,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log("전송완료", res);

  //     // 이미지 타입에 따라 다른 상태 업데이트
  //     if (type === "before") {
  //       setUploadImgBefore(URL.createObjectURL(file));
  //     } else if (type === "after") {
  //       setUploadImgAfter(URL.createObjectURL(file));
  //     }
  //   } catch (error) {
  //     console.log("업로드 실패", error);
  //   }
  // };

  // 미리 보여줄 이미지 주소
  const [uploadImgBefore, setUploadImgBefore] = useState(init);
  const [uploadImgAfter, setUploadImgAfter] = useState(init);

  // const [pics, setPics] = useState([]);
  // useEffect(() => {
  //   getDiary(loginedUserId, page, diary);
  // });

  const postSuccess = () => {
    navigate(`/diary`);
  };

  const postFail = () => {
    alert("서버가 불안정합니다. 다시 작성해주세요.");
    setConfirmOpen(false);
  };

  useEffect(() => {
    // uploadImgBefore 또는 uploadImgAfter 상태가 변경될 때 실행됩니다.
  }, [uploadImgBefore, uploadImgAfter]);
  const handleChange = (event, type) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result;

      // 이미지 타입에 따라 다른 상태 업데이트
      if (type === "before") {
        setUploadImgBefore(imageUrl);
      } else if (type === "after") {
        setUploadImgAfter(imageUrl);
      }
    };

    if (file) {
      reader.readAsDataURL(file); // 파일을 읽어 URL로 변환
    }
  };

  const handleChangeTitle = e => {
    // 입력 값 업데이트
    setTitle(e.target.value);
  };

  const handleChangeContent = e => {
    // 입력 값 업데이트
    setContent(e.target.value);
  };
  const handleClearTitle = e => {
    // 입력 필드의 내용을 지우기
    // e.preventDefault();
    setTitle("");
  };

  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleButtonClick = () => {
    setConfirmOpen(true);
  };
  const handleConfirm = e => {
    Navigate(`/diary`);
  };
  const handleCancel = () => {
    setConfirmOpen(false);
  };

  return (
    <>
      <Header text="수정하기"></Header>

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
              value={content}
              onChange={handleChangeContent}
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
          <button
            onClick={e => {
              handleButtonClick(e);
            }}
          >
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
      <Footer></Footer>
    </>
  );
};

export default DiaryEdit;
