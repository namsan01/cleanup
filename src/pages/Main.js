import { useEffect, useState } from "react";
import { Wrap } from "../components/Common";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/MainList";
import { MainAddBt } from "../styles/basic";
import { getEdit, getTodo } from "../api/todo/todo_api";
import CreateAdd from "../components/CreateAdd";
import CreateEdit from "../components/CreateEdit";

const Main = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleButtonClick = () => {
    setPopupOpen(true);
  };
  const handleCancel = () => {
    setPopupOpen(false);
    setPopupOpenEdit(false);
  };

  const [isPopupOpenEdit, setPopupOpenEdit] = useState(false);
  const handleButtonClickEdit = _item => {
    setNowItem(_item);
    setPopupOpenEdit(true);
  };
  const handleCancelEdit = () => {
    setPopupOpen(isPopupOpenEdit => !isPopupOpenEdit);
  };

  const [loginedUserId, setLoginedUserId] = useState("2");
  const [page, setPage] = useState(1);
  const [cleanList, setCleanList] = useState([]);
  const [getTodoId, getSetTodoId] = useState("2");
  const [getList, setGetList] = useState([]);

  const getTodoAllfn = () => {
    getTodo(loginedUserId, page, setCleanList);
  };

  const cleanListUpdate = () => {
    getTodoAllfn();
  };

  useEffect(() => {
    getTodoAllfn();
  }, []);

  // 일부내용 가져오기
  const getEditAllfn = () => {
    getEdit(getTodoId);
  };

  const [nowItem, setNowItem] = useState(null);

  return (
    <Wrap maxw={1024} maxh={1366}>
      <Header text="메인화면" type={1} />
      <div style={{ paddingTop: "90px", paddingBottom: "150px " }}>
        {cleanList.map(item => (
          <>
            <List
              key={item.todoId}
              item={item}
              loginedUserId={loginedUserId}
              handleButtonClick={handleButtonClick}
              handleButtonClickEdit={handleButtonClickEdit}
              handleCancelEdit={handleCancelEdit}
              getTodoAllfn={getTodoAllfn}
              getEditAllfn={getEditAllfn}
            ></List>
          </>
        ))}

        <MainAddBt
          onClick={() => {
            handleButtonClick(true);
          }}
        >
          <img
            className="MainAddBt"
            src={process.env.PUBLIC_URL + "./assets/images/bt_main_add.svg"}
          />
        </MainAddBt>

        {/* 작성 */}
        {isPopupOpen && (
          <CreateAdd
            text="작성"
            handleCancel={handleCancel}
            cleanListUpdate={cleanListUpdate}
            loginedUserId={loginedUserId}
          />
        )}

        {/* 수정 */}
        {isPopupOpenEdit && (
          <CreateEdit
            text="수정"
            handleCancel={handleCancel}
            handleButtonClickEdit={handleButtonClickEdit}
            getSetTodoId={getSetTodoId}
            item={nowItem}
            todoId={nowItem.todoId}
            getTodoAllfn={getTodoAllfn}
          />
        )}


      </div>
      <Footer type={1}></Footer>
    </Wrap>
  );
};

export default Main;
