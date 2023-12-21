import React, { useState } from "react";
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
// {jsonData.title}

const MainList = (props) => {
  // check박스 체크 시 ListWrap 배경색 갱신
  const [isChecked, setChecked] = useState(false);

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

  return (
    <ListMain
      backgroundColor={isChecked ? "#E4E2E6" : "#fff"}
    >
      <ListContent>
        <ListDiv>
          <ListImg>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_calendar.svg"}
            />
          </ListImg>
          <ListText>
            <ListTitle>세탁기청소</ListTitle>
          </ListText>
        </ListDiv>
        <ListDiv>
          <ListDate>yy.mm.dd</ListDate>
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
                <MenuTab type={1} handleButtonClick={props.handleButtonClick}/>
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
