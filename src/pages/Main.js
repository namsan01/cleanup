import { useEffect, useState } from "react";
import { Wrap } from "../components/Common";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/MainList";
import { MainAddBt } from "../styles/basic";
import CreateEditList from "../components/CreateEditList";
import { getTodo } from "../api/todo/todo_api";

const Main = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleButtonClick = () => {
    setPopupOpen(true);
  };
  const handleCancel = () => {
    setPopupOpen(isPopupOpen => !isPopupOpen);
  };

  const [loginedUserId, setLoginedUserId] = useState("2");
  const [page, setPage] = useState(1);
  const [cleanList, setCleanList] = useState([]);

  useEffect(() => {
    getTodo(loginedUserId, page, setCleanList);
  }, []);

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="메인화면" type={1} />
      <div style={{ paddingTop: "90px", paddingBottom: "300px " }}>
        {cleanList.map(item => (
          <List
            key={item.todoId}
            item={item}
            loginedUserId={loginedUserId}
          ></List>
        ))}

        {/* <List mgt={false}></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List mgb={false}></List> */}

        <MainAddBt
          onClick={() => {
            handleButtonClick(true);
          }}
        >
          <img
            className="MainAddBt"
            src={process.env.PUBLIC_URL + "../assets/images/bt_main_add.svg"}
          />
        </MainAddBt>
        {isPopupOpen && <CreateEditList handleCancel={handleCancel} />}
      </div>
      <Footer></Footer>
    </Wrap>
  );
};

export default Main;
