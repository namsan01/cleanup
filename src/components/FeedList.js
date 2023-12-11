import React from "react";
import Feedliststyle from "../styles/feedliststyle";

const FeedList = () => {
  return (
    <Feedliststyle>
      <div className="feedlist-header">
        <div className="feedlist-header-content">
          <img
            src="../assets/images/bt_background.svg"
            alt=""
            className="feed-user-background"
          />
          <img
            src="../assets/images/bt_user.svg"
            alt=""
            className="feed-user"
          />
          <h2>UserName</h2>
        </div>
        <img src="../assets/images/bt_etc_icon.svg" alt=""></img>
      </div>
      <div className="feedlist-media">
        <img src="../assets/images/bt_media.svg" alt="" className="feed-img" />
        <img src="../assets/images/bt_media.svg" alt="" className="feed-img" />
      </div>
      <div className="feedlist-txt">
        <h2>Title</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor.
        </h3>
      </div>
    </Feedliststyle>
  );
};

export default FeedList;
