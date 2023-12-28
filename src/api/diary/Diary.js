import React, { useEffect, useState } from "react";
import { getDiary } from "./diary_api";

const Diary = () => {
  // useState 는 화면 새로 고침
  const [diary, setDiary] = useState([]);

  getDiary(setDiary);

  useEffect(() => {
    // 화면이 완료되면 get 호출
    const getdiary = getDiary();
    setDiary(getdiary);
  }, []);
  return (
    <div>
      <div>
        Todo Get 결과 :<p>item.todoId : </p>
      </div>
    </div>
  );
};

export default Diary;
