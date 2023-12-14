import styled from "@emotion/styled";

export const ErrorPageMain = styled.div`
  width: 1024px;
  height: 1366px;
  display: flex;
  position: relative;
  font-family: Roboto;
`;
export const ErrorPageDiv = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  flex-direction: column;
`;
export const ErrorCodeNumDiv = styled.div`
  height: 160px;
  width: 262px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;
export const ErrorCodeSpan = styled.span`
  font-size: 20px;
  color: #176bff;
  font-weight: 600;
`;
export const ErrorCodeNum = styled.h2`
  color: #176bff;
  font-weight: 900;
  font-size: 160px;
  line-height: 120px;
`;
export const ErrorDocsDiv = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export const ErrorDocsTitle = styled.h3`
  color: #176bff;
  font-size: 40px;
  font-weight: 600;
`;
export const ErrorDocsText = styled.i`
  font-style: normal;
  color: #176bff;
  opacity: 50%;
  font-size: 25px;
  white-space: nowrap;
  margin-top: 5px;
`;
export const GoMainBtDiv = styled.div`
  margin-top: 70px;
`;
export const GoMainBt = styled.button`
  background-color: #176bff;
  border-radius: 30px;
  width: 760px;
  height: 80px;
  border: none;
  &:hover {
    background-color: #0141b3;
    transition: 0.7s;
  }
`;
export const GoMainBtP = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 900;
`;
