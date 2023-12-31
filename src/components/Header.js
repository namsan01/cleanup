import { useLocation, useNavigate } from "react-router-dom";
import { Topbar } from "../styles/headerstyle";
import { useEffect, useState } from "react";
import SubBar from "./SubBar";
import Confirm from "./Confirm";
import { getDiary } from "../api/diaryapi";

const Header = ({ text, type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [isModal, setIsModal] = useState(false);
  const haldeClickBt = () => {
    if (pathname === "/add" || pathname.startsWith("/edit")) {
      setIsModal(true);
    }
  };
  // isPopupOpen: 현재 팝업의 열림/닫힘 상태를 나타내는 상태
  // setPopupOpen: isPopupOpen 상태를 갱신하는 함수
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(!isPopupOpen);
  };
  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleConfirm = e => {
    navigate(`/diary`);
  };
  const handleCancel = () => {
    setConfirmOpen(false);
    setIsModal(false);
  };
  const [loginedUserId, setLoginedUserId] = useState("2");
  const [page, setPage] = useState(1);
  const [diaryList, setDiaryList] = useState([]);
  useEffect(() => {
    getDiary(loginedUserId, page, setDiaryList);
  }, []);

  return (
    <Topbar>
      <div className="header-wrap">
        <div className="header-left">
          <button disabled={type === 1} onClick={() => haldeClickBt()}>
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
          {type === 1 && (
            <h2>
              {diaryList[0]?.nickname !== ""
                ? diaryList[0]?.nickname
                : "로그인되었습니다."}
            </h2>
          )}
        </div>
        <div>
          <span>{text}</span>
          <button onClick={handlePopupToggle}>
            <img src={process.env.PUBLIC_URL + "/assets/images/bt_menu.svg"} />
            {isPopupOpen && (
              <SubBar
                nickname={
                  diaryList[0]?.nickname !== ""
                    ? diaryList[0]?.nickname
                    : "로그인되었습니다."
                }
              />
            )}
          </button>
        </div>
      </div>
      {isModal && (
        <Confirm
          setIsModal={setIsModal}
          isModal={isModal}
          txt={
            <div>
              <span>취소</span>하고 나가시겠습니까??
            </div>
          }
          onOk={handleConfirm}
          onNo={handleCancel}
        />
      )}
    </Topbar>
  );
};
export default Header;
