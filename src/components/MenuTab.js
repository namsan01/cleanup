import styled from "@emotion/styled";
import React from "react";
import {
  MenuTabDelete,
  MenuTabEdit,
  MenuTabStyle,
} from "../styles/menutabstyle";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

const MenuTab = props => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate("/diary/edit");
  };
  const pk = props.pk;
  const handleClick = props.handleClick;
  return (
    <MenuTabStyle>
      <MenuTabEdit onClick={handleClickMenu}>
        <h3>수정하기</h3>
      </MenuTabEdit>
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
