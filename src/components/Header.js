import { Topbar } from "../styles/headerstyle";

const Header = () => {
  return (
    <Topbar>
      <div>
        <h2>userName</h2>

        <span>메인 화면</span>

        <button>
          <img src="./assets/images/bt_menu.svg" alt=""></img>
        </button>
      </div>
    </Topbar>
  );
};

export default Header;
