import React from "react";
import {
  FooterCalendar,
  FooterDiaryList,
  FooterStyle,
} from "../styles/footerstyle";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <Link to={"/Home"}>
        <FooterCalendar>
          <section className="bt-active">
            <img src="../assets/images/bt_calendar.svg" alt="" />
          </section>
          <h3>일정 관리</h3>
        </FooterCalendar>
      </Link>
      <Link to={"/Diary"}>
        <FooterDiaryList>
          <section>
            <img src="../assets/images/bt_diarylist.svg" alt="" />
          </section>
          <h3>내 청소일기</h3>
        </FooterDiaryList>
      </Link>
    </FooterStyle>
  );
};

export default Footer;
