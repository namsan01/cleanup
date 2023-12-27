import axios from "axios";
import { SERVER_URL } from "../config";

// 내용 가져오기
export const getDiary = async (loginedUserId, page, setDiaryList) => {
  try {
    const url = `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`;
    console.log("diary Url : ", url);
    const res = await axios.get(url);
    console.log(res.data);

    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      console.log("전송성공");
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
export const getDiaryId = async (diaryId, setEditDiaryList) => {
  try {
    // http://192.168.0.144:5215/api/diary/edit?diary_id=1
    const url = `${SERVER_URL}/api/diary?diary_id=${diaryId}`;
    console.log("diary url : ", url);
    const res = await axios.get(url);
    console.log(res.data);
    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      console.log("전송성공");
      setEditDiaryList([...res.data]);
    }
  } catch (error) {
    // 개발 중에만 활용. 실제 서비스에서는 경고창 마무리
    alert(` ${error} 가 발생했습니다. 데모데이터를 쓸게요.`);
    // 데모 데이터를 이용하여 작업은 진행
    const demo = await axios.get("getDiary.json");
    setEditDiaryList(demo.data);
  }
};

// 내용 추가하기
export const postDiary = async (loginedUserId, page, fnc) => {
  const res = await axios.post(`${SERVER_URL}/api/diary`);
  fnc([...res.data]);
};

// 내용 수정하기
export const putDiary = async (
  loginedUserId,
  page,
  fnc,
  putSuccess,
  putFail,
) => {
  try {
    const res = await axios.put(`${SERVER_URL}/api/diary`);
    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      console.log("전송성공");
      fnc([...res.data]);
      putSuccess();
    } else {
      // 리액트가 잘못인 경우 : 약속된 단어 또는 값을 잘못인 경우
      // 백엔드의 문제인 경우 : 서버가 수정된 단어 및 값을 잘못 전달되거나 안 알려준 경우
      // 400 : 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음을 의미
      // 403 : 클라이언트는 콘텐츠에 접근할 권리를 가지고 있지 않습니다. 예를들어 그들은 미승인이어서 서버는 거절을 위한 적절한 응답을 보냅니다. 401과 다른 점은 서버가 클라이언트가 누구인지 알고 있습니다.
      alert("데이터 전송에 실패했습니다.");
      putFail();
    }
  } catch (error) {
    console.log(error);
    putFail();
  }
};
export const patchDiary = async (loginedUserId, page, fnc) => {
  const res = await axios.patch(
    `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`,
  );
  fnc([...res.data]);
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
