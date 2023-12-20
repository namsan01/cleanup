import axios from "axios";

export const postDiary = async () => {
  const obj = {
    loginedUserId: 3,
    title: "string",
    content: "string",
    pics: ["arr1", "arr2"],
  };
  try {
    const res = await axios.post(`api/diary`, obj);
    console.log(res.data);
    console.log("전송성공");
  } catch (error) {
    console.log(error);
  }
};
