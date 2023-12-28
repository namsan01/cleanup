import React, { useState } from "react";
import { EditDelete } from "../styles/mainliststyle";
import MenuTab from "./MenuTab";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  FeedListMenuBt,
  FeedListPopupBack,
  FeedListPopupBody,
  FeedListPopupFooter,
  FeedListPopupHeader,
  FeedListPopupHeaderLeft,
  FeedListPopupHeaderRight,
  FeedListPopupMedia,
  FeedListPopupMediaAfter,
  FeedListPopupMediaBefore,
  FeedListPopupText,
  FeedListPopupTitle,
} from "../styles/feedlistpopupstyle";

const FeedListPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(!isPopupOpen);
  };

  return (
    <FeedListPopupBack>
      <FeedListPopupBody>
        <FeedListPopupHeader>
          <FeedListPopupHeaderLeft>
            <img
              src={
                process.env.PUBLIC_URL + "../assets/images/bt_feedlist_user.svg"
              }
              alt=""
            />
            <h2>UserName</h2>
          </FeedListPopupHeaderLeft>
          <FeedListPopupHeaderRight>
            <FeedListMenuBt onClick={handlePopupToggle}>
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/bt_etc_icon.svg"
                }
                alt=""
              />
              {isPopupOpen && (
                <EditDelete>
                  {/* 팝업 컴포넌트 넣기 */}
                  <MenuTab />
                  {/* 오버레이 */}
                  <div onClick={handlePopupToggle}></div>
                </EditDelete>
              )}
            </FeedListMenuBt>
          </FeedListPopupHeaderRight>
        </FeedListPopupHeader>
        <FeedListPopupMedia>
          <Swiper className="mySwiper">
            <SwiperSlide>
              <FeedListPopupMediaBefore>
                <img
                  src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
                  alt=""
                  className="feed-img-before"
                />
              </FeedListPopupMediaBefore>
            </SwiperSlide>
            <SwiperSlide>
              <FeedListPopupMediaAfter>
                <img
                  src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
                  alt=""
                  className="feed-img-after"
                />
              </FeedListPopupMediaAfter>
            </SwiperSlide>
          </Swiper>
        </FeedListPopupMedia>
        <FeedListPopupFooter>
          <FeedListPopupTitle>title</FeedListPopupTitle>
          <FeedListPopupText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor.
          </FeedListPopupText>
        </FeedListPopupFooter>
      </FeedListPopupBody>
    </FeedListPopupBack>
  );
};

export default FeedListPopup;
