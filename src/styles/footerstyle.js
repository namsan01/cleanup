import styled from "@emotion/styled";

const Footerstyle = styled.footer`
  display: flex;
  width: 1024px;
  padding: 0px 8px;
  align-items: flex-start;
  gap: 8px;
  background: var(--m-3-sys-light-surface-container, #efedf1);
  div {
    display: flex;
    padding: 12px 0px 16px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    display: flex;
    width: 64px;
    height: 32px;
    padding: 4px 20px;
    justify-content: center;
    align-items: center;
  }
  .bt-active {
    background: var(--m-3-sys-light-secondary-container, #dde2f9);
  }
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  h3 {
    color: var(--m-3-sys-light-on-surface, #1b1b1f);
    text-align: center;

    /* M3/label/medium - prominent */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.5px;
  }
`;

export default Footerstyle;
