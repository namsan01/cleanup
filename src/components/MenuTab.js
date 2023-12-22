import styled from "@emotion/styled";
import React from "react";
import {
  MenuTabDelete,
  MenuTabEdit,
  MenuTabStyle,
} from "../styles/menutabstyle";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import CreateEditList from "./CreateEditList";

const MenuTab = props => {
  const item = props.item;
  const navigate = useNavigate();

  const handleClickEdit = () => {
    // 여기서 item을 넘겨야 해요.
    console.log("보자", item);
    navigate(`/diary/edit/${item.diaryId}`);
  };

  const pk = props.pk;
  const handleClick = props.handleClick;
  const handleButtonClick = props.handleButtonClick;
  return (
    <MenuTabStyle>
      {props.type === 1 ? (
        <>
          <MenuTabEdit onClick={handleButtonClick}>
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
