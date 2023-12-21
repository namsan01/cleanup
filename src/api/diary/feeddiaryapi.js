import axios from "axios";

export const getDiary = async (setDiaryData) => {
  try {
    const res = await axios.get(
      `/api/diary?loginedUserId=0&page=1&userid=1`,
    );
    setDiaryData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버 데이터 불안정")
  }
};
