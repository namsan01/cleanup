import styled from "@emotion/styled";

export const ConfirmWrap = styled.div`
  position: relative;
  width: 489px;
  height: 285px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid black;
`;
export const ConfirmHeader = styled.div`
  position: relative;
  padding-top: 35px;
`;
export const ConfirmImage = styled.div`
  position: relative;
  width: 53px;
  margin: 0 auto;
  height: 53px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
export const ConfirmText = styled.div`
  font-weight: 600;
  margin-top: 26px;
  text-align: center;
  margin-bottom: 33px;
  font-size: 3rem;
  line-height: 20px;
  div {
    position: relative;
    color: #707070;
    font-size: 30px;
    span {
      color: #176bff;
    }
  }
`;
export const ConfirmButton = styled.div`
  position: relative;
  padding: 0 32px;
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  button {
    width: 205px;
    height: 86px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
  }
  button {
    background-color: #d9d9d9;
    font-size: 3rem;
    color: #000;
  }
  button:last-child {
    background-color: #176bff;
    font-size: 3rem;
    color: #fff;
  }
  .bt_no {
    position: relative;
  }
  .bt_ok {
    position: relative;
  }
`;
