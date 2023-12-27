import React, { useEffect, useState } from "react";
import {
  CheckboxDiv,
  EditDelete,
  ListCheckbox,
  ListContent,
  ListDate,
  ListDeleteButton,
  ListDiv,
  ListEditButton,
  ListImg,
  ListMain,
  ListText,
  ListTitle,
} from "../styles/mainliststyle";
import { deleteTodo, postTodoCheck } from "../api/todo/todo_api";
import CreateEdit from "./CreateEdit";
// {jsonData.title}

const MainList = props => {
  const item = props.item;
  console.log(item);
  const loginedUserId = props.loginedUserId;
  //console.log("item", item);
  // check박스 체크 시 ListWrap 배경색 갱신
  const [isChecked, setChecked] = useState(false);
  // 체크 된 상태 표현
  useEffect(() => {
    // 상태 체크
    if (item.isChecked) {
      setChecked(true);
    }
  }, []);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    // setPopupOpen(!isPopupOpen);
    props.handleButtonClickEdit(item);
  };

  const deleteTodoResultAction = obj => {
    const result = parseInt(obj.result);

    if (result === 0) {
      alert("삭제를 실패하였습니다.");
    } else if (result === 1) {
      alert("삭제를 성공하였습니다.");
      props.getTodoAllfn();
    } else if (result === 500) {
      alert("서버가 불안정합니다. ");
    }
  };
  const handleClick = () => {
    //  todo를 삭제하고 싶은 유저의 PK
    // 	해당 todo의 PK
    deleteTodo(loginedUserId, item.todoId, deleteTodoResultAction);
  };

  const handleCheckbox = () => {
    postTodoCheck(item.todoId, loginedUserId);
  };

  return (
    <ListMain backgroundColor={isChecked ? "#E4E2E6" : "#fff"}>
      <ListContent>
        <ListDiv>
          <ListImg>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_calendar.svg"}
            />
          </ListImg>
          <ListText>
            <ListTitle>{item.cleaning}</ListTitle>
          </ListText>
        </ListDiv>
        <ListDiv>
          <ListDate>{item.doDay}</ListDate>
          <CheckboxDiv>
            <ListCheckbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              onClick={handleCheckbox}
            ></ListCheckbox>
          </CheckboxDiv>
          <ListEditButton onClick={handlePopupToggle}>
            <img src={process.env.PUBLIC_URL + "/assets/images/bt_pen.svg"} />
          </ListEditButton>
          <ListDeleteButton onClick={handleClick}>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_xdelete.svg"}
            />
          </ListDeleteButton>
        </ListDiv>
      </ListContent>
    </ListMain>
  );
};

export default MainList;
