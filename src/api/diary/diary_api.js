import axios from "axios";
import { SERVER_URL } from "../config";

// 내용 가져오기
export const getDiary = async (loginedUserId, page, setDiaryList) => {
  try {
    const url = `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`;
    // console.log("diary Url : ", url);
    const res = await axios.get(url);
    // console.log(res.data);

    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      // console.log("전송성공");
      setDiaryList([...res.data]);
    }
  } catch (error) {
    // 개발 중에만 활용. 실제 서비스에서는 경고창 마무리
    alert(` ${error} 가 발생했습니다. 데모데이터를 쓸게요.`);
    // 데모 데이터를 이용하여 작업은 진행
    const demo = await axios.get("getDiary.json");
    setDiaryList(demo.data);
  }
};
export const getDiaryId = async (diaryId, successGetDiaryId) => {
  try {
    // http://192.168.0.144:5215/api/diary/edit?diaryId=230
    const url = `${SERVER_URL}/api/diary/edit?diaryId=${diaryId}`;

    const res = await axios.get(url);
    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      successGetDiaryId(res.data);
    }
  } catch (error) {
    console.log(error);
    alert(` ${error} 가 발생했습니다. 잠시 후 다시 이용해 주세요.`);
    window.location.href = "/";
  }
};

// 내용 추가하기
export const postDiary = async (loginedUserId, page, fnc) => {
  const res = await axios.post(`${SERVER_URL}/api/diary`);
  fnc([...res.data]);
};

export const patchDiary = async (obj, patchFail, patchSuccess) => {
  try {
    const res = await axios.patch(`${SERVER_URL}/api/diary`, obj);
    const resStatus = res.status.toString();

    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      // console.log("전송성공");
      patchSuccess();
    } else {
      alert("데이터 전송에 실패했습니다.");
      patchFail();
    }
  } catch (error) {
    console.log(error);
    patchFail();
  }
};

// 내용 삭제하기
export const deleteDiary = async (
  _userId,
  _diaryId,
  deleteDiaryResultAction,
) => {
  const _url = `${SERVER_URL}/api/diary?loginedUserId=${_userId}&diaryId=${_diaryId}`;
  console.log(_url);
  try {
    const res = await axios.delete(_url);
    // 삭제 완료 : 1
    // 삭제 실패 : 0
    deleteDiaryResultAction(res.data);
  } catch (error) {
    console.log(error);
    alert(` ${error} 가 발생했습니다. 데모데이터를 쓸게요.`);
    deleteDiaryResultAction(500);
  }
};
