import React from "react";
import {
  ConfirmButton,
  ConfirmHeader,
  ConfirmImage,
  ConfirmText,
  ConfirmWrap,
} from "../styles/confirmstyle";
const Confirm = () => {
  return (
    <ConfirmWrap>
      <ConfirmHeader>
        <ConfirmImage>
          <img src="/public/assets/images/bt_alert.svg" alt="" />
        </ConfirmImage>
      </ConfirmHeader>
      <ConfirmText>
        <div>
          작성을 <span>취소</span>하고 나가시겠습니까?
        </div>
      </ConfirmText>
      <ConfirmButton>
        <button>아니오</button>
        <button>네</button>
      </ConfirmButton>
    </ConfirmWrap>
  );
};
export default Confirm;
