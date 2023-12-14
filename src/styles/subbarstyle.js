import styled from "@emotion/styled";

export const SubBarMain = styled.div`
  width: 512px;
  height: 1366px;
`;
export const HiUser = styled.div`
  height: 150px;
  width: 100%;
  padding: 45px 42px 28px 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1.5px solid #176bff;
`;
export const HiUserDiv = styled.div`
  width: 225px;
  height: 65px;
`;
export const UserName = styled.h2`
  color: #176bff;
  font-size: 45px;
  position: absolute;
  margin-bottom: auto;
  line-height: 1.1;
`;
export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    transition: 0.7s;
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.05);
    transition: 0.7s;
  }
`;
export const SubBarSayHi = styled.p`
  color: #c6c6c6;
  font-size: 20px;
`;
export const SubBarApp = styled.div`
  height: 225px;
  background-image: url("../assets/images/subbar_app.svg");
  padding: 42px;
  border-bottom: 1.5px solid #176bff;
`;
export const SubBarAppP = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;
export const SubBarTitle = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: #176bff;
  line-height: 0.9;
`;
export const SubBarDocs = styled.p`
  font-size: 22px;
  color: #454545;
  line-height: 1.1;
  margin-top: 14px;
`;
export const SubBarPlan = styled.div`
  height: 225px;
  background-image: url("../assets/images/subbar_plan.svg");
  padding: 62px 40px;
  border-bottom: 1.5px solid #176bff;
  margin: auto;
`;
export const SubBarWrite = styled.div`
  height: 225px;
  background-image: url("../assets/images/subbar_write.svg");
  padding: 62px 40px;
  border-bottom: 1.5px solid #176bff;
`;
export const SubBarLogo = styled.div`
  height: 541px;
  width: 512px;
`;
export const SubBarLogoImg = styled.div`
  background-image: url("../assets/images/subbar_logo.svg");
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
