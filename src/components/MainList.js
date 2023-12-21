import React, { useEffect, useState } from "react";
import {
  CheckboxDiv,
  EditDelete,
  ListCheckbox,
  ListContent,
  ListDate,
  ListDiv,
  ListEditButton,
  ListImg,
  ListMain,
  ListText,
  ListTitle,
} from "../styles/mainliststyle";
import MenuTab from "./MenuTab";
import { deleteTodo } from "../api/todo/todo_api";
// {jsonData.title}

const MainList = props => {
  const item = props.item;
  const loginedUserId = props.loginedUserId;
  console.log("item", item);
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

  // 갱신

  // isPopupOpen: 현재 팝업의 열림/닫힘 상태를 나타내는 상태
  // setPopupOpen: isPopupOpen 상태를 갱신하는 함수
  const [isPopupOpen, setPopupOpen] = useState();

  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(!isPopupOpen);
  };

  const deleteTodoResultAction = result => {
    if (result === 0) {
      alert("수정이 실패하였습니다.");
    } else if (result === 1) {
      alert("수정이 성공하였습니다.");
    } else if (result === 500) {
      alert("서버가 불안정합니다. ");
    }
  };
  const handleClick = () => {
    //  todo를 삭제하고 싶은 유저의 PK
    // 	해당 todo의 PK
    deleteTodo(loginedUserId, item.todoId, deleteTodoResultAction);
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
            ></ListCheckbox>
          </CheckboxDiv>
          <ListEditButton onClick={handlePopupToggle}>
            <img src="../assets/images/bt_scissors.svg" />
            {isPopupOpen && (
              <EditDelete>
                {/* 팝업 컴포넌트 넣기 */}
                <MenuTab handleClick={() => handleClick()} />
                {/* 오버레이 */}
                <div onClick={handlePopupToggle}></div>
              </EditDelete>
            )}
          </ListEditButton>
        </ListDiv>
      </ListContent>
    </ListMain>
  );
};

export default MainList;
