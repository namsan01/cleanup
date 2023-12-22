import styled from "@emotion/styled";
import { useState } from "react";

export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  max-height: ${props => props.maxh + "px"};
`;

export const MyFormComponent = () => {
  // 단계 2: state를 사용하여 날짜 값을 관리합니다.
  const [date, setDate] = useState(setDate);

  // 단계 3: 폼 제출을 처리하여 state를 업데이트합니다.
  const submitForm = event => {
    event.preventDefault();

    // 단계 3 (계속): 현재 날짜로 state를 업데이트합니다.
    const today = new Date();
    const dateString = today.toISOString().slice(0, 10);
    setDate(dateString);
  };

  // 단계 4: 리액트 문법을 사용하여 폼을 렌더링합니다.
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="date">날짜:</label>
        {/* 단계 2 (계속): state를 사용하여 입력 값을 관리합니다. */}
        <input
          type="text"
          id="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};
