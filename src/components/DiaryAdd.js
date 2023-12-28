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
import { useNavigate } from "react-router-dom";
import Confirm from "./Confirm";
import { postDiary } from "../api/diaryapi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../fb/firebaseconfig";
import moment from "moment";
const DiaryAdd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // 제목입력 업데이트
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };
  // 내용 입력 값 업데이트
  const handleChangeContent = e => {
    setContents(e.target.value);
  };

  // 입력 필드의 내용을 지우기
  const handleClearTitle = e => {
    setTitle("");
  };
  // 총 개수 파악
  const [fileCount, setFileCount] = useState(0);
  // 미리보기 이미지 1
  const [uploadImgBefore, setUploadImgBefore] = useState(
    `${process.env.PUBLIC_URL}/assets/images/bt_media.svg`,
  );
  // 업로드용 이미지 1
  const [uploadImgBeforeFile, setUploadImgBeforeFile] = useState(null);
  // 업로드된 이미지 FB 의 URL
  const [urlBefore, setUrlBefore] = useState("");
  // 미리보기 이미지  2
  const [uploadImgAfter, setUploadImgAfter] = useState(
    `${process.env.PUBLIC_URL}/assets/images/bt_media.svg`,
  );
  // 업로드용 이미지 2
  const [uploadImgAfterFile, setUploadImgAfterFile] = useState(null);
  // 업로드된 이미지 FB 의 URL
  const [urlAfter, setUrlAfter] = useState("");
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
  // 첫번째 이미지 추가 작업(이미지 미리 보기 처리)
  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    if (file) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      setUploadImgBefore(tempUrl); // 미리보기 끝
      // FB 파일을 보관
      setUploadImgBeforeFile(file); // 파일 1개 추가 끝
      setFileCount(prev => prev + 1); // 파일 추가 되었어요.
    }
  };
  // 두번째 이미지 추가 작업(이미지 미리 보기 처리)
  const handleChangeFileTwo = e => {
    const file = e.target.files[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setUploadImgAfter(tempUrl); // 미리보기 끝
      setUploadImgAfterFile(file);
      setFileCount(prev => prev + 1); // 파일 추가 되었어요.
    }
  };
  // 데이터를 모두 전송하고 나서 post 데이터를 만들자.
  const makePostData = async () => {
    const tempName = moment().format("YYYYMMDDhhmmss");
    try {
      // 그냥 파일을 그대로 올리지 마시고, 중복을 고려해서 이름 만들어주세요.
      const fileNameBefore = `images/_${tempName}${uploadImgBeforeFile.name}`;
      const urlOne = await uploadImage(
        fileNameBefore,
        uploadImgBeforeFile,
        setUrlBefore,
      );
      const fileNameAfter = `images/_${tempName}${uploadImgAfterFile.name}`;
      const urlTwo = await uploadImage(
        fileNameAfter,
        uploadImgAfterFile,
        setUrlAfter,
      );
      diaryAction(urlOne, urlTwo);
    } catch (error) {
      console.log(error);
    }
  };
  const diaryAction = (_one, _two) => {
    const obj = {
      loginedUserId: 2,

      title: title,
      contents: contents,
      pics: [_one, _two],
    };
    postDiary(obj, postSuccess, postFail);
  };
  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleButtonClick = () => {
    setConfirmOpen(true);
  };
  const handleConfirm = e => {
    e.preventDefault();
    if (title === "") {
      setConfirmOpen(false);
      alert("제목을 입력하세요.");
      return;
    }
    if (contents === "") {
      setConfirmOpen(false);
      alert("내용을 입력하세요.");
      return;
    }
    if (uploadImgBeforeFile === null) {
      setConfirmOpen(false);
      alert("청소 전 사진을 선택해주세요.");
      return;
    }
    if (uploadImgAfterFile === null) {
      setConfirmOpen(false);
      alert("청소 후 사진을 선택해주세요.");
      return;
    }
    //저장할 내용(타이틀, 본문 공백 등등)을 먼저 체크 하고
    // FB 올릴 자료가 있으면 보낸다.
    // 업로드가 끝나면 데이터를 전송한다.
    // await 필요합니다.
    alert("파일이 저장되었습니다.")
    makePostData();
  };
  // 실제 이미지 업로드를 실행 함수
  const uploadImage = async (_fileName, _file, _set) => {
    try {
      const imageRef = ref(storage, _fileName);
      const fbRes = await uploadBytes(imageRef, _file);
      const url = await getDownloadURL(fbRes.ref);
      _set(url);
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  const postSuccess = () => {
    navigate(`/diary`);
  };
  const postFail = () => {
    alert("서버가 불안정합니다. 다시 작성해주세요.");
    setConfirmOpen(false);
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
            value={contents}
            onChange={handleChangeContent}
            placeholder="내용을 입력해 주세요."
            name="contents"
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
              handleChangeFileOne(event, "before");
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
              handleChangeFileTwo(event, "after");
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
