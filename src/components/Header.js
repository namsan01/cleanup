import { useNavigate } from "react-router-dom";
import { Topbar } from "../styles/headerstyle";
import { useState } from "react";
import SubBar from "./SubBar";
const Header = ({ text, type }) => {
  const navigate = useNavigate();

  // isPopupOpen: 현재 팝업의 열림/닫힘 상태를 나타내는 상태
  // setPopupOpen: isPopupOpen 상태를 갱신하는 함수
  const [isPopupOpen, setPopupOpen] = useState();

  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(!isPopupOpen);
  };

  const confirmBt = () => {
    {
      isPopupOpen && <SubBar />;
    }
  };
  return (
    <Topbar>
      <div className="header-wrap">
        <div className="header-left">
          <button
            disabled={type === 1}
            onClick={type !== 1 ? confirmBt : undefined}
          >
            {type === 1 ? (
              <img
                src={process.env.PUBLIC_URL + "/assets/images/bt_user.svg"}
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/assets/images/bt_arrow.svg"}
              />
            )}
          </button>
          <h2>{type === 1 ? "userName" : ""}</h2>
        </div>

        <div>
          <span>{text}</span>

          <button onClick={handlePopupToggle}>
            <img src={process.env.PUBLIC_URL + "/assets/images/bt_menu.svg"} />
            {isPopupOpen && <SubBar />}
          </button>
        </div>
      </div>
    </Topbar>
  );
};
export default Header;
