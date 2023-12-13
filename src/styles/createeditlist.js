import styled from "@emotion/styled";

export const CreateList = styled.div`
  width: 864px;
  height: 525px;
  /* background: yellowgreen; */

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
    color: rgba(0, 0, 0, 0.3);
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
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .create-footer {
    display: flex;
    width: 100%;
    height: 168px;
    justify-content: end;
    align-items: end;
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

export const BtYes = styled.button`
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
  margin-left: 15px;
  color: #fff;
  font-size: 15px;
  font-family: Roboto;
`;

export const BtNo = styled.button`
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
  flex-shrink: 0;
  font-weight: 700;
  font-size: 15px;
  font-family: Roboto;
  color: #0055d5;
`;
