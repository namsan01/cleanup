import React, { useState } from "react";
import {
  FeedListHeader,
  FeedListHeaderContent,
  FeedListMedia,
  FeedListTxt,
  Feedliststyle,
} from "../styles/feedliststyle";
import MenuTab from "./MenuTab";
import { EditDelete } from "../styles/mainliststyle";
import styled from "@emotion/styled";

const FeedList = ({ title, children }) => {
  // isPopupOpen: 현재 팝업의 열림/닫힘 상태를 나타내는 상태
  // setPopupOpen: isPopupOpen 상태를 갱신하는 함수
  const [isPopupOpen, setPopupOpen] = useState();

  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(!isPopupOpen);
  };
  const FeedListHeaderMenu = styled.div`
    position: relative;
    display: block;
    button {
      width: 48px;
      height: 48px;
      display: block;
      &:active {
        filter: brightness(0.8);
        cursor: pointer;
      }
    }
  `;

  return (
    <Feedliststyle>
      <FeedListHeader>
        <FeedListHeaderContent>
          <img
            src={
              process.env.PUBLIC_URL + "../assets/images/bt_feedlist_user.svg"
            }
            alt=""
          />
          <h2>{children}</h2>
        </FeedListHeaderContent>
        <FeedListHeaderMenu>
          <button onClick={handlePopupToggle}>
            <img
              src={process.env.PUBLIC_URL + "../assets/images/bt_etc_icon.svg"}
              alt=""
            />
            {isPopupOpen && (
              <EditDelete>
                {/* 팝업 컴포넌트 넣기 */}
                <MenuTab />
                {/* 오버레이 */}
                <div onClick={handlePopupToggle}></div>
              </EditDelete>
            )}
          </button>
        </FeedListHeaderMenu>
      </FeedListHeader>
      <FeedListMedia>
        <img
          src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
          alt=""
          className="feed-img-before"
        />
        <img
          src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
          alt=""
          className="feed-img-after"
        />
      </FeedListMedia>
      <FeedListTxt>
        <h2>{title}</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor.
        </h3>
      </FeedListTxt>
    </Feedliststyle>
  );
};

export default FeedList;
