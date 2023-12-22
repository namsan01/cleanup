import styled from "@emotion/styled";
import React, { useState } from "react";
import {
  MenuTabDelete,
  MenuTabEdit,
  MenuTabStyle,
} from "../styles/menutabstyle";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import CreateEdit from "./CreateEdit";

const MenuTab = props => {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(true);
  };

  const handleClickEdit = () => {
    navigate("/diary/edit ");
  };

  const pk = props.pk;
  const handleClick = props.handleClick;
  const handleButtonClick = props.handleButtonClick;

  return (
    <MenuTabStyle>
      {props.type === 1 ? (
        <>
          <MenuTabEdit onClick={props.handleButtonClickEdit}>
            <h3>수정하기</h3>
          </MenuTabEdit>
        </>
      ) : (
        <>
          <MenuTabEdit onClick={handleClickEdit}>
            <h3>수정하기</h3>
          </MenuTabEdit>
        </>
      )}
      {/* <MenuTabEdit onClick={handleClickEdit}>
        <h3>수정하기</h3>
      </MenuTabEdit> */}
      <MenuTabDelete
        onClick={() => {
          handleClick(pk);
        }}
      >
        <h3>삭제하기</h3>
      </MenuTabDelete>
    </MenuTabStyle>
  );
};

export default MenuTab;
