import styled from "@emotion/styled";

export const FeedListPopupBack = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 1024px;
  height: 1366px;
  position: relative;
`;
export const FeedListPopupBody = styled.div`
  width: 900px;
  height: 1100px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #c5c6d0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const FeedListPopupHeader = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
`;
export const FeedListPopupHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 16px 16px;
  gap: 15px;
`;

export const FeedListPopupHeaderRight = styled.div`
  padding: 16px 16px 16px 0;
`;
export const FeedListMenuBt = styled.button`
  border: none;
  background-color: transparent;
`;
export const FeedListPopupMedia = styled.div`
  position: relative;
  width: 100%;
  background-color: #c5c6d0;
  z-index: -1;
`;

export const FeedListPopupMediaBefore = styled.div`
  img {
    width: 100%;
    overflow: scroll;
  }
`;
export const FeedListPopupMediaAfter = styled.div`
  img {
    width: 100%;
    overflow: scroll;
  }
`;
export const FeedListPopupFooter = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 20px;
`;
export const FeedListPopupTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 15px;
`;
export const FeedListPopupText = styled.p`
  font-size: 20px;
  color: #45464f;
  word-break: break-all;
  text-align: justify;
`;
