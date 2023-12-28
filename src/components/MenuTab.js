import React, { useState } from "react";
import {
  MenuTabDelete,
  MenuTabEdit,
  MenuTabStyle,
} from "../styles/menutabstyle";
import { useNavigate } from "react-router-dom";

const MenuTab = props => {
  const item = props.item;
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);


  const handleClickEdit = () => {
    navigate(`/edit/${item.diaryId}`);
  };

  const pk = props.pk;
  const handleClick = props.handleClick;

  return (
    <MenuTabStyle>
      {props.type === 1 ? (
        <>
          <MenuTabEdit onClick={props.handleButtonClickEdit(item)}>
            <h3>수정하기</h3>
          </MenuTabEdit>
        </>
      ) : (
        <>
          <MenuTabEdit onClick={handleClickEdit} item={props.diaryId}>
            <h3>수정하기</h3>
          </MenuTabEdit>
        </>
      )}

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
