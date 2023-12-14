const LOCAL_DB = "diaryDB";

export const initData = () => {
  const db = localStorage.getItem(LOCAL_DB);

  if (!db) {
    localStorage.setItem(LOCAL_DB, "[]");
  }
};

export const getAllData = () => {
  let data = localStorage.getItem(LOCAL_DB);
  data = JSON.parse(data);
  return data;
};

export const getData = () => {};
export const putData = () => {};
export const fetchData = () => {};
export const deleteData = () => {};
export const deleteAllData = () => {
  localStorage.setItem(LOCAL_DB, "[]");
};
export const postData = data => {
  console.log(data);

  const saveData = JSON.stringify(data);
  console.log(saveData);
  localStorage.setItem(LOCAL_DB, saveData);
};
