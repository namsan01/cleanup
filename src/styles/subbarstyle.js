import styled from "@emotion/styled";

export const SubBarBody = styled.div`
  width: 1024px;
  height: 1366px;
  position: absolute;
  top: 0%;
  right: 0%;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const SubBarDiv = styled.div`
  width: 512px;
  height: 1366px;
  background-color: #fff;
  float: right;
  text-align: left;
`;
export const HiUser = styled.div`
  height: 150px;
  width: 100%;
  padding: 35px 42px 28px 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1.5px solid #176bff;
`;
export const HiUserDiv = styled.div`
  width: 225px;
  height: 65px;
`;
export const UserName = styled.p`
  color: #176bff;
  font-size: 45px;
  position: absolute;
  margin-top: 10px;
  margin-bottom: auto;
  line-height: 1.1;
  font-weight: 900;
`;
export const ArrowButton = styled.div`
  width: 66px;
  height: 66px;
  margin-top: 10px;
  background-image: url(${process.env.PUBLIC_URL}/assets/images/subbar_arrow.svg);
  object-fit: cover;
  
`;
export const SubBarSayHi = styled.p`
  color: #c6c6c6; 
  font-size: 20px;
`;
export const SubBarApp = styled.div`
  height: 225px;
  background-image: url(${process.env.PUBLIC_URL}/assets/images/subbar_app.svg);
  padding: 42px;
  border-bottom: 1.5px solid #176bff;
`;
export const SubBarAppP = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;
export const SubBarTitle = styled.p`
  font-size: 30px;
  font-weight: 900;
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
  background-image: url(${process.env.PUBLIC_URL}/assets/images/subbar_plan.svg);
  padding: 62px 40px;
  border-bottom: 1.5px solid #176bff;
  margin: auto;
`;
export const SubBarWrite = styled.div`
  height: 225px;
  background-image: url(${process.env.PUBLIC_URL}assets/images/subbar_write.svg);
  padding: 62px 40px;
  border-bottom: 1.5px solid #176bff;
`;
export const SubBarLogo = styled.div`
  height: 541px;
  width: 512px;
`;
export const SubBarLogoImg = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/images/subbar_logo.svg);
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
