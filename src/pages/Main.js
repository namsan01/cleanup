import { useState } from "react";
import { Wrap } from "../components/Common";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/MainList";
import { MainAddBt } from "../styles/basic";
import CreateEditList from "../components/CreateEditList";

const Main = () => {
  const [isPopupOpen, setPopupOpen] = useState();

  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(!isPopupOpen);
  };

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="메인화면" type={1} />
      <div style={{ padding: "70px 0" }}>
        <List mgt={false}></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List mgb={false}></List>

        <MainAddBt onClick={handlePopupToggle}>
          <img
            src={process.env.PUBLIC_URL + "../assets/images/bt_main_add.svg"}
          />
          {isPopupOpen && <CreateEditList />}
        </MainAddBt>
      </div>
      <Footer></Footer>
    </Wrap>
  );
};

export default Main;
