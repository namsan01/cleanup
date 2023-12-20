import React from "react";
import {
  ErrorCodeNum,
  ErrorCodeNumDiv,
  ErrorCodeSpan,
  ErrorDocsDiv,
  ErrorDocsText,
  ErrorDocsTitle,
  ErrorPageDiv,
  ErrorPageMain,
  GoMainBt,
  GoMainBtDiv,
  GoMainBtP,
} from "../styles/errorpagestyle";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    // 프로그래밍 방식으로 메인 페이지로 이동
    navigate("/");
  };
  return (
    <ErrorPageMain>
      <ErrorPageDiv>
        <ErrorCodeNumDiv>
          <ErrorCodeSpan>ERROR CODE : </ErrorCodeSpan>
          <ErrorCodeNum>404</ErrorCodeNum>
        </ErrorCodeNumDiv>
        <ErrorDocsDiv>
          <ErrorDocsTitle>원하시는 페이지를 찾을 수 없습니다.</ErrorDocsTitle>
          <ErrorDocsText>
            페이지를 찾을 수 없네요. 메인 화면으로 돌아가서 서비스를 이용해
            주세요!
          </ErrorDocsText>
        </ErrorDocsDiv>
        <GoMainBtDiv>
          <GoMainBt onClick={goToMainPage}>
            <GoMainBtP>메인으로 가기</GoMainBtP>
          </GoMainBt>
        </GoMainBtDiv>
      </ErrorPageDiv>
    </ErrorPageMain>
  );
};

export default ErrorPage;
