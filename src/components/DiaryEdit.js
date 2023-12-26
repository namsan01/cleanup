import React, { useEffect, useState } from "react";
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
import { getDiaryId, putDiary } from "../api/diary/diary_api";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Confirm from "./Confirm";

// ==============================================================
// 더미 ?
const obj = {
  loginedUserId: 0,
  diaryId: 0,
  nickname: "string",
  title: "string",
  contents: "string",
  pics: ["string"],
  createdAt: "string",
};
// ==============================================================

const DiaryEdit = props => {
  const [diaryId, setDiaryId] = useState("2");
  const [diaryEditList, setEditDiaryList] = useState([]);
  // useEffect(() => {
  //   getDiaryId(diaryId, setEditDiaryList);
  // }, []);
  //   const params = useParams();
  //   const diaryId = params.diaryId;

  //   console.log("편집할 ID", diaryId);
  const [loginedUserId, setLoginedUserId] = useState("2");
  //   const [page, setPage] = useState(1);
  //   const [diaryList, setDiaryList] = useState([]);
  const [nowDiary, setNowDiary] = useState({});

  useEffect(() => {
    getDiaryId(diaryId, setEditDiaryList);
  }, []);
  const findeDiary = () => {
    setNowDiary();
  };

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pics, setPics] = useState([]);

  // ==============================================================
  const [uploadImgBefore, setUploadImgBefore] = useState(
    `${process.env.PUBLIC_URL}/assets/images/bt_media.svg`,
  );
  const [uploadImgAfter, setUploadImgAfter] = useState(
    `${process.env.PUBLIC_URL}/assets/images/bt_media.svg`,
  );
  // ==============================================================

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

  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleButtonClick = () => {
    setConfirmOpen(true);
  };
  const handleConfirm = async e => {
    if (nowDiary.title === "") {
      setConfirmOpen(false);
      alert("제목을 입력하세요.");
      return;
    }
    if (nowDiary.content === "") {
      setConfirmOpen(false);
      alert("내용을 입력하세요.");
      return;
    }
    // const obj = {
    //   loginedUserId: 3,
    //   title: title,
    //   contents: content,
    //   pics: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/NewJeans_X_OLENS_1_%28cropped%29.jpg/250px-NewJeans_X_OLENS_1_%28cropped%29.jpg",
    //     "",
    //   ],
    // };
    putDiary(obj, putSuccess, putFail);
    // PUT 요청 보내기
    try {
      await putDiary(nowDiary); // 수정이 필요한 요청으로 변경해야 함
      navigate(`/diary`);
    } catch (error) {
      console.error("Error updating diary:", error);
      alert("서버가 불안정합니다. 다시 시도해주세요.");
    }

    setConfirmOpen(false);
  };
  const putSuccess = () => {
    navigate(`/diary`);
  };
  const putFail = () => {
    alert("서버가 불안정합니다. 다시 작성해주세요.");
    setConfirmOpen(false);
  };
  const handleCancel = () => {
    setConfirmOpen(false);
  };

  // ==============================================================
  // 제목입력 업데이트
  const handleChangeTitle = e => {
    setEditDiaryList(prevDiary => ({
      ...prevDiary,
      title: e.target.value,
    }));
  };
  // 내용 입력 값 업데이트
  const handleChangeContent = e => {
    setNowDiary(prevDiary => ({
      ...prevDiary,
      contents: e.target.value,
    }));
  };
  const handleClearTitle = () => {
    // 입력 필드의 내용을 지우기
    setNowDiary(prevDiary => ({
      ...prevDiary,
      title: "",
    }));
    console.log("Title cleared");
  };
  // ==============================================================
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
      {diaryEditList.map(item => (
        <DiaryAddMain key={item.diaryId}>
          <DiaryAddMainTitle>
            <form>
              <input
                type="text"
                maxLength={50}
                placeholder="제목을 입력해 주세요"
                name="title"
                value={item.title}
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
              value={item.contents}
              onChange={handleChangeContent}
              placeholder="내용을 입력해 주세요."
              name="content"
            />
          </DiaryAddMainContent>
          <DiaryAddMainImage>
            <img src={item.pics} alt="" className="diaryadd-img-before" />
            <img src={item.pics} alt="" className="diaryadd-img-after" />
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
      ))}
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
export default DiaryEdit;
