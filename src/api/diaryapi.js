import axios from "axios";
import { SERVER_URL } from "./config";

//  Header.js 에서 사용
export const getDiary = async (loginedUserId, page, setDiaryList) => {
  try {
    const url = `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`;
    console.log(url);
    const res = await axios.get(url);
    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
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

// DiaryAdd.js 에서 사용
export const postDiary = async (obj, postSuccess, postFail) => {
  console.log("저장해요.");
  try {
    const res = await axios.post(`api/diary`, obj);
    console.log(res.data);

    // 상태 코드를 글자로 만들어서 첫 글자만 추출

    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      console.log("전송성공");
      postSuccess(res.data);
    } else {
      // 리액트가 잘못인 경우 : 약속된 단어 또는 값을 잘못인 경우
      // 백엔드의 문제인 경우 : 서버가 수정된 단어 및 값을 잘못 전달되거나 안 알려준 경우
      // 400 : 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음을 의미
      // 403 : 클라이언트는 콘텐츠에 접근할 권리를 가지고 있지 않습니다. 예를들어 그들은 미승인이어서 서버는 거절을 위한 적절한 응답을 보냅니다. 401과 다른 점은 서버가 클라이언트가 누구인지 알고 있습니다.
      alert("데이터 전송에 실패했습니다.");
    }
  } catch (error) {
    console.log(error);
    postFail();
  }
};

export const patchDiary = async () => {
  const obj = {
    diaryId: 0,
    title: "string",
    contents: "string",
    pics: ["", ""],
  };
  try {
    const res = await axios.patch(`api/diary`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
