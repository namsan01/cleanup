import axios from "axios";
import { SERVER_URL } from "../config";
import { Route } from "react-router";
import ErrorPage from "../../pages/ErrorPage";

// 내용 가져오기
export const getDiary = async (loginedUserId, page, setDiaryList) => {
  try {
    const url = `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`;
    console.log(url);

    const res = await axios.get(url);
    setDiaryList([...res.data]);
  } catch (error) {
    // 개발 중에만 활용. 실제 서비스에서는 경고창 마무리
    alert(` ${error} 가 발생했습니다. 데모데이터를 쓸게요.`);
    // 데모 데이터를 이용하여 작업은 진행
    const demo = await axios.get("getDiary.json");
    setDiaryList(demo.data);
  }
};

// 내용 추가하기
export const postDiary = async (loginedUserId, page, fnc) => {
  const res = await axios.post(`${SERVER_URL}/api/diary`);
  fnc([...res.data]);
};

// 내용 수정하기
export const putDiary = async (loginedUserId, page, fnc) => {
  const res = await axios.put(`${SERVER_URL}/api/diary`);
  fnc([...res.data]);
};

export const patchDiary = async (loginedUserId, page, fnc) => {
  const res = await axios.fetch(
    `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`,
  );
  fnc([...res.data]);
};

// 내용 삭제하기
export const deleteDiary = async diaryListClean => {
  const res = await axios.delete(`${SERVER_URL}/api/diary`);
  diaryListClean([...res.data]);

  // try {

  // } catch (error) {
  //   console.log(error)
  // }
};
