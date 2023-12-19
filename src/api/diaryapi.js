import axios from "axios";

export const postDiary = async () => {
  try {
    const res = await axios.get("/api/diary");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};