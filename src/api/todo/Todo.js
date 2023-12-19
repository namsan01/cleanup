import React, { useEffect, useState } from "react";
import { getTodo } from "./todo_api";

const Todo = () => {
  // useState 는 화면 새로 고침
  const [todo, setTodo] = useState([]);

  getTodo(setTodo);

  useEffect(() => {
    // 화면이 완료되면 get 호출
    const todo = getTodo();
    console.log(todo);
    setTodo(todo);
  }, []);
  return (
    <div>
      <div>
        Todo Get 결과 :<p>item.todoId : </p>
      </div>
    </div>
  );
};

export default Todo;
