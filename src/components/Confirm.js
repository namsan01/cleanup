import React from "react";
import {
  ConfirmButton,
  ConfirmHeader,
  ConfirmImage,
  ConfirmText,
  ConfirmWrap,
} from "../styles/confirmstyle";

const Confirm = ({ txt, onNo, onOk, type }) => {
  return (
    <ConfirmWrap>
      <ConfirmHeader>
        <ConfirmImage>
          {type === 1 ? (
              <img
                src={process.env.PUBLIC_URL + "/assets/images/bt_save.svg"}
                alt=""
              />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_alert.svg"}
              alt=""
            />
          )}
        </ConfirmImage>
      </ConfirmHeader>
      <ConfirmText>
        <div>{txt}</div>
      </ConfirmText>
      <ConfirmButton>
        <button className="bt_no" onClick={onNo}>
          아니오
        </button>
        <button className="bt_ok" onClick={onOk}>
          네
        </button>
      </ConfirmButton>
    </ConfirmWrap>
  );
};

export default Confirm;
