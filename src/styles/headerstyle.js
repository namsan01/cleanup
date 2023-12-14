import styled from "@emotion/styled";

export const Topbar = styled.header`
  div {
    display: flex;
    width: 1024px;
    height: 85px;
    padding: 8px 20px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: var(--m-3-sys-light-surface-tint, #0055d5);
    color: #ffffff;
    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      text-align: center;
      margin-right: 10px;
    }
    h2:first-child:before {
      content: "";
      display: block;
      width: 24px;
      height: 25px;
      padding-right: 7px;
      background: url("../assets/images/bt_user.svg") no-repeat;
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
    }
    span {
      position: absolute;
      font-family: Roboto;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 93.333% */
      text-align: center;
      right: 44.25%;
    }
  }
  button {
    background: transparent;
    border: none;

    img {
      margin-top: 3px;
      display: block;
    }
  }
`;
