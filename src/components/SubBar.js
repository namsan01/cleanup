import React from "react";
import {
  ArrowButton,
  HiUser,
  HiUserDiv,
  SubBarApp,
  SubBarAppP,
  SubBarBody,
  SubBarDiv,
  SubBarDocs,
  SubBarLogo,
  SubBarLogoImg,
  SubBarPlan,
  SubBarSayHi,
  SubBarTitle,
  SubBarWrite,
  UserName,
} from "../styles/subbarstyle";
const SubBar = (props) => {
  const nickname = props.nickname;
  return (
    <SubBarBody>
      <SubBarDiv>
        <HiUser>
          <HiUserDiv>
            <SubBarSayHi>안녕하세요</SubBarSayHi>
            <UserName>{nickname}</UserName>
          </HiUserDiv>
          <div>
            <ArrowButton></ArrowButton>
          </div>
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
            청소를 하기 전, 후 사진과 완료 소감을 기록해 보세요. 청소하기
            힘들었던 점이나 편리했던 도구들도 메모해 보세요.
          </SubBarDocs>
        </SubBarWrite>
        <SubBarLogo>
          <SubBarLogoImg></SubBarLogoImg>
        </SubBarLogo>
      </SubBarDiv>
    </SubBarBody>
  );
};
export default SubBar;