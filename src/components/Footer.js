import React from "react";
import Footerstyle from "../styles/footerstyle";

const Footer = () => {
  return (
    <Footerstyle>
      <div className="footer-calendar">
        <section className="bt-active">
          <img src="../assets/images/bt_calendar.svg" alt="" />
        </section>
        <h3>일정 관리</h3>
      </div>
      <div className="footer-diarylist">
        <section>
          <img src="../assets/images/bt_diarylist.svg" alt="" />
        </section>
        <h3>내 청소일기</h3>
      </div>
    </Footerstyle>
  );
};

export default Footer;
