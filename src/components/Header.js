import { Topbar } from "../styles/headerstyle";

const Header = ({ text }) => {
  return (
    <Topbar>
      <div>
        <h2>userName</h2>

        <span>{text}</span>

        <button>
          <img src="./assets/images/bt_menu.svg" alt=""></img>
        </button>
      </div>
    </Topbar>
  );
};

export default Header;
