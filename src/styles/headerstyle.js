import styled from "@emotion/styled";

export const Topbar = styled.header`
  position: relative;
  z-index: 9;
  .header-wrap {
    display: flex;
    position: fixed;
    top: 0;
    width: 1024px;
    height: 85px;
    padding: 8px 32px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: var(--m-3-sys-light-surface-tint, #0055d5);
    color: #ffffff;
    z-index: 1;
    .header-left {
      display: flex;
      gap: 10px;
    }
    h2 {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      text-align: center;
      margin-right: 10px;
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
    img {
      display: block;
    }
  }
  button {
    background: transparent;
    border: none;

    img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      display: block;
    }
  }
`;
