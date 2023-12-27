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
import { getDiaryId, patchDiary } from "../api/diary/diary_api";
import { useNavigate, useParams } from "react-router-dom";
import Confirm from "./Confirm";
import {
  getDownloadURL,
  ref,
  storage,
  uploadBytes,
} from "../fb/firebaseconfig";
import moment from "moment";

const DiaryEdit = () => {
  const { diaryId } = useParams();

  const getDiaryIdData = () => {
    getDiaryId(diaryId, successGetDiaryId);
  };
  const successGetDiaryId = data => {
    // console.log(data);
    // 미리보기 이미지
    setUploadImgBefore(data.pics[0] ? data.pics[0] : defaultImgUrl);
    setUploadImgAfter(data.pics[1] ? data.pics[1] : defaultImgUrl);
    // 백엔드 서버에서 받아온 URL
    setServerBeforeUrl(data.pics[0]);
    setServerAfterUrl(data.pics[1]);
    // 기타 정보
    setTitle(data.title);
    setContents(data.contents);
  };

  useEffect(() => {
    getDiaryIdData();
  }, []);

  const navigate = useNavigate();

  // 타이틀 설정
  const [title, setTitle] = useState("");
  // 제목 입력 값 업데이트
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };
  const handleClearTitle = () => {
    // 입력 필드의 내용을 지우기
    setTitle("");
  };

  // 내용 설정
  const [contents, setContents] = useState("");
  // 내용 입력 값 업데이트
  const handleChangeContent = e => {
    setContents(e.target.value);
  };

  // 이미지 설정 설정
  // ==============================================================
  const defaultImgUrl = `${process.env.PUBLIC_URL}/assets/images/bt_media.svg`;
  // 미리보기 이미지
  const [uploadImgBefore, setUploadImgBefore] = useState(defaultImgUrl);
  const [uploadImgAfter, setUploadImgAfter] = useState(defaultImgUrl);
  // Fiel 내 컴퓨터 원본파일
  const [uploadImgBeforeFile, setUploadImgBeforeFile] = useState("");
  const [uploadImgAfterFile, setUploadImgAfterFile] = useState("");
  // 서버에서 받아온 http:~~~ URL 보관
  const [serverBeforeUrl, setServerBeforeUrl] = useState("");
  const [serverAfterUrl, setServerAfterUrl] = useState("");
  // 이미지를 새로 선택했는지?
  const [changeBefore, setChangeBefore] = useState(false);
  const [changeAfter, setChangeAfter] = useState(false);

  // 첫번째 이미지 추가 작업(이미지 미리 보기 처리)
  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    // 사용자가 변경을 시도함.
    setChangeBefore(true);
    if (file) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      setUploadImgBefore(tempUrl); // 미리보기 끝
      // FB 파일을 보관
      setUploadImgBeforeFile(file); // 파일 1개 추가 끝
    }
  };
  // 두번째 이미지 추가 작업(이미지 미리 보기 처리)
  const handleChangeFileTwo = e => {
    const file = e.target.files[0];
    // 사용자가 변경을 시도함.
    setChangeAfter(true);
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setUploadImgAfter(tempUrl); // 미리보기 끝
      setUploadImgAfterFile(file);
    }
  };

  // ==============================================================
  // 모달
  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleButtonClick = () => {
    setConfirmOpen(true);
  };
  // 저장 >>>> 네 버튼 눌렀을 때
  const handleConfirm = async e => {
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

    // 내용 모두 입력확인 -> 업로드
    // 업로드 완료 -> patch 를 보낸다.
    makePatchData();
  };

  // 데이터를 모두 전송하고 나서 post 데이터를 만들자.
  const makePatchData = async () => {
    try {
      let urlOne = serverBeforeUrl;
      let urlTwo = serverAfterUrl;

      const tempName = moment().format("YYYYMMDDhhmmss");
      // 사용자가 파일을 선택했으므로 새로 업로드 및 URL 생성
      if (changeBefore) {
        // 그냥 파일을 그대로 올리지 마시고, 중복을 고려해서 이름 만들어주세요.
        const fileNameBefore = `images/_${tempName}${uploadImgBeforeFile.name}`;
        // fb 문법 업로드시도
        urlOne = await uploadImage(fileNameBefore, uploadImgBeforeFile);
      }

      // 사용자가 파일을 선택했으므로 새로 업로드 및 URL 생성
      if (changeAfter) {
        const fileNameAfter = `images/_${tempName}${uploadImgAfterFile.name}`;
        // 아래는 우리가 만든 함수(파일명, 원본파일, URL 을 보관할 state 를 전달)
        urlTwo = await uploadImage(fileNameAfter, uploadImgAfterFile);
      }

      const obj = {
        loginedUserId: 2,
        title: title,
        contents: contents,
        diaryId: diaryId,
        pics: [urlOne, urlTwo],
      };
      patchDiary(obj, patchFail, patchSuccess);
    } catch (error) {
      console.log(error);
    }
  };
  // 실제 이미지 업로드를 실행 함수
  const uploadImage = async (_fileName, _file) => {
    try {
      // FB 문법                    (_fileName : " images/_a.png ")
      const imageRef = ref(storage, _fileName);
      // console.log("imageRef", imageRef);
      // FB 문법
      const fbRes = await uploadBytes(imageRef, _file);
      // FB 문법
      const url = await getDownloadURL(fbRes.ref);
      return url;
    } catch (error) {
      console.log("FB 오류", error);
    }
  };

  const patchSuccess = () => {
    navigate(`/diary`);
  };
  const patchFail = () => {
    alert("서버가 불안정합니다. 다시 작성해주세요.");
    setConfirmOpen(false);
  };
  const handleCancel = () => {
    setConfirmOpen(false);
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
      {/* {editDiaryList.map(item => ( */}
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
              onChange={e => handleChangeTitle(e)}
            />
            <button
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
            onChange={e => handleChangeContent(e)}
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
      {/* ))} */}
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
