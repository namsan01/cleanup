import { Wrap } from "../components/Common";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/MainList";

const Main = () => {
  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="메인화면" type={1} />
      <div>
        <List mgt={false}></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List mgb={false}></List>
      </div>
      <Footer></Footer>
    </Wrap>
  );
};

export default Main;
