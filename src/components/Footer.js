import React from "react";
import {
  FooterCalendar,
  FooterDiaryList,
  FooterStyle,
} from "../styles/footerstyle";
import { Link, useNavigate } from "react-router-dom";

const Footer = ({ type }) => {
  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate(`/main`);
  };

  const handleClickFeed = () => {
    navigate(`/diary`);
  };

  return (
    <FooterStyle>
      <FooterCalendar onClick={handleClickMain}>
        {type === 1 ? (
          <>
            <section className="bt-active">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/bt_calendar.svg"}
              />
            </section>
          </>
        ) : (
          <>
            <section>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/bt_calendar_black.svg"
                }
              />
            </section>
          </>
        )}

        {/* <section className="bt-active">
          <img
            src={process.env.PUBLIC_URL + "../assets/images/bt_calendar.svg"}
            alt=""
          />
        </section> */}
        <h3>일정 관리</h3>
      </FooterCalendar>

      <FooterDiaryList onClick={handleClickFeed}>
      {type === 2 ? (
          <>
            <section className="bt-active">
              <img
                src={process.env.PUBLIC_URL + "../assets/images/bt_diarylist.svg"}
              />
            </section>
          </>
        ) : (
          <>
            <section>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../assets/images/bt_diarylist_black.svg"
                }
              />
            </section>
          </>
        )}

        {/* <section>
          <img
            src={process.env.PUBLIC_URL + "../assets/images/bt_diarylist_black.svg"}
            alt=""
          />
        </section> */}
        <h3>내 청소일기</h3>
      </FooterDiaryList>
    </FooterStyle>
  );
};

export default Footer;
