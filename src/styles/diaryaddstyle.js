import styled from "@emotion/styled";

export const DiaryAddStyle = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  width: 918px;
  min-height: 100vh;
  flex-shrink: 0;
`;
export const DiaryAddHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 892px;
  height: 179px;
  flex-shrink: 0;
  margin-bottom: 56px;
  img {
    width: 179px;
    height: 179px;
    flex-shrink: 0;
  }
`;
export const DiaryAddHeaderComment = styled.div`
  h1 {
    display: flex;
    width: 371px;
    height: 29px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: rgba(23, 107, 255, 0.7);
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.5px;
  }
  span {
    display: flex;
    width: 758px;


    color: rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2;
  }
  b {
    color: #176bff;
    margin-left: 8px;
  }
`;
export const DiaryAddMain = styled.div`
  margin-bottom: 36px;
`;
export const DiaryAddMainTitle = styled.div`
  margin-bottom: 30px;
  form {
    width: 911px;
    height: 80px;
    flex-shrink: 0;
    display: flex;
    padding: 28px;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    border: 1.5px solid rgba(0, 0, 0, 0.3);
  }
  .diaryadd-title {
    display: flex;
    width: 502px;
    height: 70px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    border: none;

    color: rgba(0, 0, 0, 0.3);
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 80% */
    letter-spacing: 0.5px;
  }
  .diaryadd-title-bt {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: transparent;
    flex-shrink: 0;
    border: none;
    background-image: url("../assets/images/bt_cancel.svg");
  }
`;
export const DiaryAddMainContent = styled.div`
  textarea {
    display: flex;
    width: 911px;
    height: 534px;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    padding: 28px;
    border-radius: 15px;
    border: 1.5px solid rgba(0, 0, 0, 0.3);
    resize: none;

    color: rgba(0, 0, 0, 0.3);
    font-family: Roboto;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 114.286% */
    letter-spacing: 0.5px;
  }
`;
export const DiaryAddMainImage = styled.div`
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  margin-bottom: 30px;
  .diaryadd-img-before {
    width: 458px;
    height: 270px;
    object-fit: contain;
    border: solid 1px #e7e7e7;
  }
  .diaryadd-img-after {
    width: 458px;
    height: 270px;
    object-fit: contain;
    border: solid 1px #e7e7e7;
  }
`;
export const DiaryAddMainButton = styled.div`
  display: flex;
  justify-content: space-around;
  .diaryadd-img-input-button-before {
    width: 274px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background: transparent;

    color: #000;
    font-family: Roboto;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 114.286% */
    letter-spacing: 0.5px;
  }
  .diaryadd-img-input-button-after {
    width: 274px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background: transparent;

    color: #000;
    font-family: Roboto;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 114.286% */
    letter-spacing: 0.5px;
  }
`;
export const DiaryAddFooter = styled.div`
  display: flex;
  justify-content: center;
  button {
    display: flex;
    width: 187px;
    height: 74px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
    border: 1px solid var(--m-3-sys-light-primary, #0055d5);
    background: var(--m-3-sys-light-primary, #0055d5);

    color: var(--m-3-white, #fff);
    text-align: center;
    /* M3/label/large */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.1px;
  }
`;
