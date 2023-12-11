import styled from "@emotion/styled";

const Feedliststyle = styled.section`
  width: 918px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--m-3-sys-light-outline-variant, #c5c6d0);
  flex-direction: column;
  .feedlist-header {
    display: flex;
    height: 72px;
    padding: 12px 4px 12px 16px;
    align-items: center;
    align-self: stretch;
  }
  .feedlist-header-content {
    display: flex;
    position: relative;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
  }
  .feed-user-background {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    fill: var(--m-3-sys-light-primary, #0055d5);
  }
  .feed-user {
    position: absolute;
    left: 8px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
  }
  .feedlist-media {
    display: flex;
    flex: 1 0 0;
    align-self: stretch;
  }
  .feed-img {
    width: 458.5px;
    height: 100%;
    border: solid 1px #e7e7e7;
  }
  .feedlist-txt {
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export default Feedliststyle;
