import styled from "@emotion/styled";
export const Feedliststyle = styled.section`
  width: 918px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--m-3-sys-light-outline-variant, #c5c6d0);
  flex-direction: column;
  margin: 30px auto;
`;
export const FeedListHeader = styled.div`
  display: flex;
  height: 72px;
  padding: 12px 4px 12px 16px;
  align-items: center;
  align-self: stretch;
  button {
    border: none;
    background: transparent;
  }
`;
export const FeedListHeaderContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  img {
    width: 40px;
    height: 40px;
    // 해당 이미지가 스크롤 시, header 위에 위치하여 z-index 를 줌
    z-index: -1;
  }
  h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
  }
`;
export const FeedListHeaderMenu = styled.div`
  position: relative;
  display: block;
  button {
    width: 48px;
    height: 48px;
    display: block;
    &:active {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }
`;
export const FeedListMedia = styled.div`
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  .feed-img-before {
    width: 458px;
    height: 270px;
    object-fit: contain;
    border: solid 1px #e7e7e7;
  }
  .feed-img-after {
    width: 458px;
    height: 270px;
    object-fit: contain;
    border: solid 1px #e7e7e7;
  }
`;
export const FeedListTxt = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  h2 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
  }
  h3 {
    color: var(--m-3-sys-light-on-surface-variant, #45464f);
    /* M3/body/medium */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
    /* 2줄이상 말줄임 */
    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */
  }
`;
