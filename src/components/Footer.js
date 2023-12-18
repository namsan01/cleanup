import React from "react";
import {
  FooterCalendar,
  FooterDiaryList,
  FooterStyle,
} from "../styles/footerstyle";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate(`/main`);
  };

  const handleClickFeed = () => {
    navigate(`/diarypage`);
  };

  return (
    <FooterStyle>
      <FooterCalendar onClick={handleClickMain}>
        <section className="bt-active">
          <img
            src={process.env.PUBLIC_URL + "../assets/images/bt_calendar.svg"}
            alt=""
          />
        </section>
        <h3>일정 관리</h3>
      </FooterCalendar>

      <FooterDiaryList onClick={handleClickFeed}>
        <section>
          <img
            src={process.env.PUBLIC_URL + "../assets/images/bt_diarylist.svg"}
            alt=""
          />
        </section>
        <h3>내 청소일기</h3>
      </FooterDiaryList>
    </FooterStyle>
  );
};

export default Footer;
