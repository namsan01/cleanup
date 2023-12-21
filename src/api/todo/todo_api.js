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
export const postTodo = async (loginedUserId, page, fnc) => {
  const res = await axios.post(`${SERVER_URL}/api/todo`);
  fnc([...res.data]);
};

// 내용 업데이트하기
export const putTodo = async (loginedUserId, page, fnc) => {
  const res = await axios.put(
    `${SERVER_URL}/api/todo?loginedUserId=${loginedUserId}&page=${page}`,
  );
  fnc([...res.data]);
};
export const fetchTodo = async (loginedUserId, page, fnc) => {
  const res = await axios.fetch(
    `${SERVER_URL}/api/todo?loginedUserId=${loginedUserId}&page=${page}`,
  );
  fnc([...res.data]);
};

// 내용 삭제하기
export const deleteTodo = async (userId, todoId, deleteTodoResultAction) => {
  try {
    const res = await axios.delete(
      `${SERVER_URL}/api/todo?userId=${userId}&todoId=${todoId}`,
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
