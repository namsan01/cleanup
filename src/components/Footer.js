import React from "react";
import {FooterCalendar, FooterDiaryList, FooterStyle} from "../styles/footerstyle";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterCalendar>
        <section className="bt-active">
          <img src="../assets/images/bt_calendar.svg" alt="" />
        </section>
        <h3>일정 관리</h3>
      </FooterCalendar>
      <FooterDiaryList>
        <section>
          <img src="../assets/images/bt_diarylist.svg" alt="" />
        </section>
        <h3>내 청소일기</h3>
      </FooterDiaryList>
    </FooterStyle>
  );
};

export default Footer;
