import styled from "@emotion/styled";

export const CreateListBg = styled.div`
  width: 1024px;
  height: 1500px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 9999;
  top: 0%;
`;

export const CreateList = styled.div`
  width: 864px;
  height: 525px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;

  .create-header {
    display: flex;
    width: 100%;
    height: 170px;
    justify-content: space-between;
    padding-top: 55px;
    padding-bottom: 55px;
    flex-shrink: 0;
    align-items: center;
    border-bottom: 1px solid #176bff;
  }

  .create-logo {
    width: 107px;
    height: 107px;
    margin-right: 51px;
  }

  .create-main {
    width: 100%;
    height: 207px;
    padding-top: 57px;
    padding-left: 54px;
    padding-right: 53px;
  }

  .create-main-top {
    display: flex;
    justify-content: space-between;
  }
  .create-main-left {
    position: relative;
    width: 470px;
    height: 70px;
    flex-shrink: 0;
    padding-left: 9px;
  }

  .create-main-right {
    text-align: center;
    font-size: 16px;
    h2 {
      display: block;
      padding-top: 4px;
      font-size: 12px;
    }
  }

  .create-date {
    position: relative;
    display: flex;
    width: 177px;
    height: 56px;
    border: 4px solid #176bff4d;
    border-radius: 4px 4px 0px 0px;
    justify-content: center;
    align-items: center;
    color: var(--M3-sys-light-on-surface, #1b1b1f);
    input {
      position: relative;
      width: 170px;
      border: none;
      border-radius: 4px 4px 0px 0px;
      text-align: center;
      ::placeholder {
        color: var(--M3-sys-light-on-surface, #1b1b1f);
        font-weight: 700;
      }
    }
  }

  .create-main-ft {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 765px;
    margin-top: 30px;
    border-bottom: 3px solid rgba(23, 107, 255, 0.3);
  }
  .create-main-txt {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 700;
    width: 725px;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 15px;
    border: none;
  }

  .create-main-bt {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: transparent;
    flex-shrink: 0;
    border: none;
    background-image: url("../assets/images/bt_cancel.svg");
  }

  .create-footer {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: end;
    align-items: end;
  }

  .bt-yes {
    display: flex;
    width: 86px;
    height: 47px;
    padding: 10px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    border: none;
    background: var(--m-3-sys-light-primary, #0055d5);
    font-weight: 700;
    margin-right: 50px;
    color: #fff;
    font-size: 15px;
    font-family: Roboto;
  }

  .bt-no {
    display: flex;
    width: 86px;
    height: 47px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1.5px solid #757780;
    background: transparent;
    gap: 8px;
    margin-right: 15px;
    flex-shrink: 0;
    font-weight: 700;
    font-size: 15px;
    font-family: Roboto;
    color: #0055d5;
  }
`;

export const CreateTitle = styled.h2`
  color: #176bff;
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-left: 36px;
`;
