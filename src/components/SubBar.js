import styled from "@emotion/styled";
import React from "react";

const SubBarWrap = styled.section`
  width: 512px;
  height: 1366px;
`;
const HiUser = styled.div`
  height: 150px;
  width: 100%;
  padding: 45px 42px 28px 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1.5px solid #176bff;
`;
const HiUserDiv = styled.div`
  width: 225px;
  height: 65px;
`;
const UserName = styled.h2`
  color: #176bff;
  font-size: 45px;
  position: absolute;
  margin-bottom: auto;
  line-height: 1.1;
`;
const SubBarSayHi = styled.p`
  color: #c6c6c6;
  font-size: 20px;
`;
const SubBarApp = styled.div`
  height: 225px;
  background-image: url("../assets/images/subbar_app.svg");
  padding: 42px;
  border-bottom: 1.5px solid #176bff;
`;
const SubBarAppP = styled.p`
  font-size: 18px;
`;
const SubBarTitle = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: #176bff;
  line-height: 0.9;
`;
const SubBarDocs = styled.p`
  font-size: 22px;
  color: #454545;
  line-height: 1.1;
  margin-top: 14px;
`;
const SubBarPlan = styled.div`
  height: 225px;
  background-image: url("../assets/images/subbar_plan.svg");
  padding: 62px 40px;
  border-bottom: 1.5px solid #176bff;
  margin: auto;
`;
const SubBarWrite = styled.div`
  height: 225px;
  background-image: url("../assets/images/subbar_write.svg");
  padding: 62px 40px;
  border-bottom: 1.5px solid #176bff;
`;
const SubBarLogo = styled.div`
  height: 541px;
  width: 512px;
`;
const SubBarLogoImg = styled.div`
  background-image: url("../assets/images/subbar_logo.svg");
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const SubBar = () => {
  return (
    <SubBarWrap>
      <HiUser>
        <HiUserDiv>
          <SubBarSayHi>안녕하세요</SubBarSayHi>
          <UserName>userName</UserName>
        </HiUserDiv>
        <img src="../assets/images/subbar_arrow.svg" />
      </HiUser>
      <SubBarApp>
        <SubBarAppP>[ 청소 일정 관리 앱 ]</SubBarAppP>
        <SubBarTitle>깔끔한 일상의 시작</SubBarTitle>
        <SubBarDocs>
          ‘청소 할일 관리 앱’은 효과적으로 일상 속 청소 일정을 계획하고 관리할
          수 있도록 도와주는 앱 입니다.
        </SubBarDocs>
      </SubBarApp>
      <SubBarPlan>
        <SubBarTitle>계획적으로 일정을 잡아보자 !</SubBarTitle>
        <SubBarDocs>
          일정을 작성하여 청소를 보다 계획적으로 이행할 수 있도록 도와줍니다.
        </SubBarDocs>
      </SubBarPlan>
      <SubBarWrite>
        <SubBarTitle>전과 후를 기록하자 !</SubBarTitle>
        <SubBarDocs>
          청소를 하기 전, 후 사진과 완료 소감을 기록해 보세요. 청소하기 힘들었던
          점이나 편리했던 도구들도 메모해 보세요.
        </SubBarDocs>
      </SubBarWrite>
      <SubBarLogo>
        <SubBarLogoImg></SubBarLogoImg>
      </SubBarLogo>
    </SubBarWrap>
  );
};

export default SubBar;
