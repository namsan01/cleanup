import styled from "@emotion/styled";

export const MenuTabStyle = styled.div`
  height: 112px;
  width: 112px;
  padding: 0px;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  background: var(--m-3-white, #fff);
  /* M3/Elevation Light/2 */
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
export const MenuTabEdit = styled.div`
  display: flex;
  height: 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
    border-bottom: 1px solid #c5c6d0;
  h3 {
    color: var(--m-3-sys-light-on-surface, #1b1b1f);
    text-align: center;
    /* M3/body/large */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
  }
`;
export const MenuTabDelete = styled.div`
  display: flex;
  height: 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  h3 {
    color: #ff2828;
    text-align: center;
    /* M3/body/large */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
  }
`;
