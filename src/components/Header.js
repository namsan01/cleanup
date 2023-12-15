import { Topbar } from "../styles/headerstyle";

const Header = ({ text, type }) => {
  return (
    <Topbar>
      <div className="header-wrap">
        <div className="header-left">
          <button>
            {type === 1 ? (
              <img
                src={process.env.PUBLIC_URL + "/assets/images/bt_user.svg"}
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/assets/images/bt_arrow.svg"}
              />
            )}
          </button>
          <h2>userName</h2>
        </div>
        <span>{text}</span>

        <button>
          <img src={process.env.PUBLIC_URL + "/assets/images/bt_menu.svg"} />
        </button>
      </div>
    </Topbar>
  );
};

export default Header;
