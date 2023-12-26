import axios from "axios";
import { SERVER_URL } from "../config";

// 내용 가져오기
export const getTodo = async (loginedUserId, page, setCleanList) => {
  try {
    const url = `${SERVER_URL}/api/todo?loginedUserId=${loginedUserId}&page=${page}`;
    console.log(url);

    const res = await axios.get(url);
    setCleanList([...res.data]);
  } catch (error) {
    // 개발 중에만 활용. 실제 서비스에서는 경고창 마무리
    alert(` ${error} 가 발생했습니다. 데모데이터를 쓸게요.`);
    // 데모 데이터를 이용하여 작업은 진행
    const demo = await axios.get("getTodo.json");
    setCleanList(demo.data);
  }
};

// 내용 추가하기
export const postTodo = async (obj, postSuccess, postFail) => {
  console.log("저장해요.");
  try {
    const res = await axios.post(`api/todo`, obj);
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

// 내용 업데이트하기

export const fetchTodo = async () => {
  const obj = {
    loginedUserId: 2,
    todoId: 0,
    cleaning: "string",
    doDay: "string",
  };
  try {
    const res = await axios.patch(`api/todo`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 내용 삭제하기
export const deleteTodo = async (
  loginedUserId,
  todoId,
  deleteTodoResultAction,
) => {
  try {
    const res = await axios.delete(
      `${SERVER_URL}/api/todo?todoId=${todoId}&loginedUserId=${loginedUserId}`,
    );

    // const res = await axios.delete(
    //   `${SERVER_URL}/api/todo?userId=${userId}&todoId=${todoId}`,
    //   { loginedUserId: userId, todoId: todoId },
    // );

    // 일정을 삭제
    // 0: 수정 실패,
    // 1: 수정 성공
    deleteTodoResultAction(res.data);
  } catch (error) {
    // 개발 중에만 활용. 실제 서비스에서는 경고창 마무리
    alert(` ${error} 가 발생했습니다. 데모데이터를 쓸게요.`);
    // 데모 데이터를 이용하여 작업은 진행
    deleteTodoResultAction(500);
  }
};
