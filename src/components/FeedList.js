import React, { useState, useEffect } from "react";
import {
  FeedListHeader,
  FeedListHeaderContent,
  FeedListHeaderMenu,
  FeedListMedia,
  FeedListTxt,
  Feedliststyle,
} from "../styles/feedliststyle";
import MenuTab from "./MenuTab";
import { EditDelete } from "../styles/mainliststyle";
import styled from "@emotion/styled";

import { deleteDiary } from "../api/diary/diary_api";

const FeedList = props => {
  // const {title, nickname, contents, diaryId}= props.item;
  const item = props.item;
  const title = props.item.title;
  const nickname = props.item.nickname;
  const contents = props.item.contents;

  const diaryId = props.item.diaryId;
  const userId = parseInt(props.userId);
  console.log(props);

  // isPopupOpen: 현재 팝업의 열림/닫힘 상태를 나타내는 상태
  // setPopupOpen: isPopupOpen 상태를 갱신하는 함수
  const [isPopupOpen, setPopupOpen] = useState();

  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(!isPopupOpen);
  };

  const pk = props.pk;
  const handleClcik = props.handleClick;

  const deleteDiaryResultAction = obj => {
    console.log("여기요..", obj);
    const result = parseInt(obj.result);

    if (result === 0) {
      alert("삭제가 실패하였습니다.");
    } else if (result === 1) {
      alert("삭제가 완료되었습니다.");
      props.reloadGetDiary();
    } else if (result === 500) {
      alert("서버가 불안정합니다.");
    }
  };

  // 삭제 완료 : 1
  // 삭제 실패 : 0
  const handleClick = () => {
    //  삭제하고 싶은 유저 번호 user_id
    // 	삭제하고 싶은 다이어리 번호 diary_id
    deleteDiary(userId, diaryId, deleteDiaryResultAction);
  };

  return (
    <Feedliststyle>
      <FeedListHeader>
        <FeedListHeaderContent>
          <img
            src={
              process.env.PUBLIC_URL + "./assets/images/bt_feedlist_user.svg"
            }
            alt=""
          />
          <h2>{nickname}</h2>
        </FeedListHeaderContent>
        <FeedListHeaderMenu>
          <button onClick={handlePopupToggle}>
            <img
              src={process.env.PUBLIC_URL + "./assets/images/bt_etc_icon.svg"}
              alt=""
            />
            {isPopupOpen && (
              <EditDelete>
                {/* 팝업 컴포넌트 넣기 */}
                <MenuTab handleClick={handleClick} item={item} />
                {/* 오버레이 */}
                <div onClick={handlePopupToggle}></div>
              </EditDelete>
            )}
          </button>
        </FeedListHeaderMenu>
      </FeedListHeader>
      <FeedListMedia>
        {item.pics[0] ? (
          <img
            // src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
            src={item.pics[0]}
            alt=""
            className="feed-img-after"
          />
        ) : (
          ""
        )}

        {item.pics[1] ? (
          <img
            // src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
            src={item.pics[1]}
            alt=""
            className="feed-img-after"
          />
        ) : (
          ""
        )}
      </FeedListMedia>
      <FeedListTxt>
        <h2>{title}</h2>
        <h3>{contents}</h3>
      </FeedListTxt>
    </Feedliststyle>
  );
};

export default FeedList;
