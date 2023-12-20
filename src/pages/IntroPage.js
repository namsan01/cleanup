import styled from "@emotion/styled";
import React, { useEffect } from "react";

const IntroPage = () => {
  useEffect(() => {
    // 페이지가 로드된 후 2초 후에 메인 페이지로 이동
    const timer = setTimeout(() => {
      window.location.href = "/main"; // 메인 페이지의 경로로 수정
    }, 2000);

    // 컴포넌트가 언마운트되면 타이머를 클리어하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, []);

  const IntroBack = styled.div`
    width: 1024px;
    height: 1366px;
    background-color: #fff;
    position: relative;
  `;
  const IntroMain = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const IntroLogo = styled.div`
    margin-bottom: 100px;
  `;
  const IntroText = styled.span`
    font-size: 20px;
    text-align: center;
    font-style: normal;
    color: #176bff;
    opacity: 0.5;
    font-weight: 500;
    line-height: 1.5;
  `;
  return (
    <IntroBack>
      <IntroMain>
        <IntroLogo>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/intro_logo.svg"}
            alt="intrologo"
          />
        </IntroLogo>
        <IntroText>
          <p>
            한번 청소했다고 언제까지나 방안이 깨끗한 것은 아니다. 한번 반성하고
            <br />
            좋은 뜻을 가졌다고 해서 그것이 늘 우리 마음속에 있는 것은 아니다.
            <br />
            어제의 좋은 뜻은 매일 마음속에 새기며 되씹어야 한다. <br />- <br />
            마틴 루터
          </p>
        </IntroText>
      </IntroMain>
    </IntroBack>
  );
};

export default IntroPage;
